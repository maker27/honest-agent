import React, { useCallback, useMemo } from 'react';

import Section, { Record, Records } from '../Section';
import {
    convertDateStringToISO,
    convertISOToDateString,
    dateView
} from '../../utils';
import { companyTypes } from '../../constants';
import { CompanyProperties, StringObject, UpdatedCompany } from '../../types';
import { EditableNode, EditableToggler } from '../EditableNode';
import useEditableNode from '../../hooks/useEditableNode';

interface SummarySectionProps {
    company: UpdatedCompany;
    onEdit: (property: CompanyProperties, value: string | StringObject) => void;
}

const SummarySection: React.FC<SummarySectionProps> = ({ company, onEdit }) => {
    const { editMode, toggleEditMode, onChange } = useEditableNode<
        CompanyProperties
    >(onEdit);

    const onChangeName = useMemo(() => onChange('name'), [onChange]);

    const onChangeContractNo = useMemo(
        () => onChange('contract', company.contract, 'no'),
        [company.contract, onChange]
    );

    const onChangeContactDate = useCallback(
        value => {
            onChange(
                'contract',
                company.contract,
                'issue_date'
            )(convertDateStringToISO(value));
        },
        [company.contract, onChange]
    );

    const onChangeBusinessEntity = useMemo(() => onChange('businessEntity'), [
        onChange
    ]);

    const onChangeType = useMemo(() => onChange('type'), [onChange]);

    return (
        <Section
            className="organization__section"
            title={
                <>
                    Общая информация
                    <EditableToggler
                        editMode={editMode}
                        toggleEditMode={toggleEditMode}
                    />
                </>
            }>
            <Records>
                <Record key="name" name="Полное название">
                    <EditableNode
                        value={company.name}
                        editMode={editMode}
                        changeValue={onChangeName}
                    />
                </Record>
                <Record key="contract" name="Договор">
                    <EditableNode
                        value={company.contract.no}
                        editMode={editMode}
                        changeValue={onChangeContractNo}
                    />{' '}
                    от{' '}
                    <EditableNode
                        value={convertISOToDateString(
                            company.contract.issue_date
                        )}
                        inputType="date"
                        editMode={editMode}
                        viewerFn={dateView}
                        changeValue={onChangeContactDate}
                    />
                </Record>
                <Record key="businessEntity" name="Форма">
                    <EditableNode
                        value={company.businessEntity}
                        editMode={editMode}
                        changeValue={onChangeBusinessEntity}
                    />
                </Record>
                <Record key="type" name="Тип">
                    <EditableNode
                        value={company.type
                            .map(type => companyTypes[type])
                            .join(', ')}
                        editMode={editMode}
                        changeValue={onChangeType}
                    />
                </Record>
            </Records>
        </Section>
    );
};

export default React.memo(SummarySection);
