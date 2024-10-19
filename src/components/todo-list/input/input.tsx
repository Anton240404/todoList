import React from 'react';

type InputProps = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = ({
    placeholder,
    value,
    onChange,
    onKeyDown,
}: InputProps) => {
    return (
        <input
            className="todo-input"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};
