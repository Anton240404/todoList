import React from 'react';

type TextareaProps = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export const Textarea = ({ placeholder, value, onChange }: TextareaProps) => {
    return (
        <textarea
            className="todo-textarea"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};
