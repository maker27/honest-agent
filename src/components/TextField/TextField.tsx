import React from 'react';

import './TextField.scss';

interface TextFieldProps {
    placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder }) => {
    return (
        <div className="text-field">
            <input
                className="text-field__input"
                type="text"
                placeholder={placeholder}
            />
            <span className="text-field__label">{placeholder}</span>
        </div>
    );
};

export default TextField;
