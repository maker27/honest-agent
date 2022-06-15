import React from 'react';

import './ModalWrapper.scss';
import ModalWindow, { ModalWindowProps } from './ModalWindow';

interface ModalWrapperProps extends ModalWindowProps {
    show: boolean;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ show, ...props }) => {
    if (!show) return null;

    return (
        <div className="modal">
            <ModalWindow {...props} />
        </div>
    );
};

export default ModalWrapper;
