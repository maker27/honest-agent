import React from 'react';

import './Button.scss';
import { AddIcon } from '../icons';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <div className="button">
            <span className="button__icon">
                <AddIcon />
            </span>
            <span className="button__text">{text}</span>
        </div>
    );
};

export default Button;
