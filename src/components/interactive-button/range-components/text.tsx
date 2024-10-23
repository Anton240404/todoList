import css from '../interactive-button-edit.module.css';
import { ChangeEvent } from 'react';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export function Text({ value, onChange }: Props) {
    return (
        <div className={css.column}>
            <label>Текст</label>
            <input
                type="text"
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChange(event.target.value)
                }
            />
        </div>
    );
}
