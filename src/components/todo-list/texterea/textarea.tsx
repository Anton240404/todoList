import React from 'react';
import css from './textarea.module.css';

type TextareaProps = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = ({ placeholder, value, onChange }: TextareaProps) => {
    return (
        <textarea
            className={css.textarea}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};
