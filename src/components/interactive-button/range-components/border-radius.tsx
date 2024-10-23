import css from '../interactive-button-edit.module.css';
import { ChangeEvent } from 'react';

type Props = {
    value: number;
    onChange: (value: number) => void;
};

export function BorderRadius({ value, onChange }: Props) {
    return (
        <div className={css.column}>
            <label>Скругление</label>
            <input
                min={0}
                max={10}
                type="range"
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChange(Number(event.target.value))
                }
            />
        </div>
    );
}
