import React from 'react';

import { CommonTextFieldProps } from './TextField';

interface UncontrolledTextFieldProps extends CommonTextFieldProps {
    ref?: React.ForwardedRef<HTMLInputElement>;
}

const UncontrolledTextField: React.FC<UncontrolledTextFieldProps> = React.forwardRef(
    ({ placeholder, type = 'text' }, ref) => {
        return (
            <div className="text-field">
                <input
                    ref={ref}
                    className="text-field__input"
                    type={type}
                    placeholder={placeholder}
                />
                <span className="text-field__label">{placeholder}</span>
            </div>
        );
    }
);

UncontrolledTextField.displayName = 'UncontrolledTextField';

export default React.memo(UncontrolledTextField);
