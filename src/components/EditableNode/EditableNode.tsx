import React, { useCallback, useState } from 'react';
import clsx from 'clsx';

import './EditableNode.scss';
import TextField, { CommonTextFieldProps } from '../TextField/TextField';
import IconButton from '../IconButton';
import { SaveIcon } from '../icons';

interface EditableNodeProps {
    value: string;
    inputType?: CommonTextFieldProps['type'];
    editMode: boolean;
    changeValue: (editedValue: string) => void;
    viewerFn?: (value: string) => React.ReactNode | string;
}

const EditableNode: React.FC<EditableNodeProps> = ({
    value,
    inputType,
    editMode,
    changeValue,
    viewerFn
}) => {
    const [editedValue, setEditedValue] = useState(value);

    const onChange = useCallback(
        ({ target }: React.ChangeEvent<HTMLInputElement>) => {
            setEditedValue(target.value);
        },
        []
    );

    const onSave = () => {
        changeValue(editedValue);
    };

    if (editMode)
        return (
            <div
                className={clsx(
                    'editable-node',
                    value !== editedValue && 'editable-node_changed'
                )}>
                <TextField
                    type={inputType}
                    placeholder={value}
                    value={editedValue}
                    onChange={onChange}
                    onEnter={onSave}
                />
                <IconButton Icon={SaveIcon} onClick={onSave} />
            </div>
        );

    return <>{viewerFn ? viewerFn(value) : value}</>;
};

export default EditableNode;
