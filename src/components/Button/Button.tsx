import React from 'react';

import './Button.scss';
import AddIcon from './AddIcon';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <div className="button">
            <AddIcon />
            <span className="button__text">{text}</span>
        </div>
    );
};

export default Button;
