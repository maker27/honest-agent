import React, { useCallback } from 'react';

import './TextField.scss';

export interface CommonTextFieldProps {
    type?: 'text' | 'password' | 'date';
    placeholder?: string;
}

interface ControlledTextFieldProps extends CommonTextFieldProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onEnter?: () => void;
}

const TextField: React.FC<ControlledTextFieldProps> = ({
    value,
    placeholder,
    type = 'text',
    onChange,
    onEnter
}) => {
    const onKeyDown = useCallback(
        (event: React.KeyboardEvent) => {
            if (onEnter && (event.key || event.code) === 'Enter') onEnter();
        },
        [onEnter]
    );

    return (
        <div className="text-field">
            <input
                className="text-field__input"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <span className="text-field__label">{placeholder}</span>
        </div>
    );
};

export default React.memo(TextField);
