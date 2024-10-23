import css from '../interactive-button-edit.module.css';
import { ChangeEvent } from 'react';

type Props = {
    value: number;
    onChange: (value: number) => void;
};

export function FontSize({ value, onChange }: Props) {
    return (
        <div className={css.column}>
            <label>Размер шрифта</label>
            <input
                min={16}
                max={100}
                type="range"
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChange(Number(event.target.value))
                }
            />
        </div>
    );
}
