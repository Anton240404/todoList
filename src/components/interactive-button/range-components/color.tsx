import css from '../interactive-button-edit.module.css';
import { ChangeEvent } from 'react';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export function Color({ value, onChange }: Props) {
    return (
        <div className={css.column}>
            <label>Цвет</label>
            <input
                type="color"
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChange(event.target.value)
                }
            />
        </div>
    );
}
