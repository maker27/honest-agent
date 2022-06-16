import React, { useCallback, useState } from 'react';

import { ApiError, CompanyId } from '../types';
import Organization from '../components/Organization';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import ModalWindow from '../components/ModalWindow';
import useModal from '../hooks/useModal';
import useCompany from '../hooks/useCompany';

interface OrganizationContainerProps {
    companyId: CompanyId;
}

const OrganizationContainer: React.FC<OrganizationContainerProps> = ({
    companyId
}) => {
    const { isModalOpen, closeModal, openModal } = useModal();

    const [updatedError, setUpdatedError] = useState<ApiError>();

    const onError = useCallback(
        (error: ApiError) => {
            setUpdatedError(error);
            openModal();
        },
        [openModal]
    );

    const {
        isLoading,
        error,
        company,
        onUpdate,
        onEdit,
        onDelete
    } = useCompany(companyId, onError);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        const { status, data } = error;
        return <ErrorMessage error={`${status} - ${data.error}`} />;
    }

    if (company) {
        return (
            <>
                <Organization
                    company={company}
                    onUpdate={onUpdate}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
                <ModalWindow
                    show={isModalOpen}
                    title="Ошибка при выполнении"
                    onClose={closeModal}>
                    {updatedError?.data?.error ?? 'Неизвестная ошибка'}
                </ModalWindow>
            </>
        );
    }

    return null;
};

export default OrganizationContainer;
