import css from '../interactive-button-edit.module.css';
import { ChangeEvent } from 'react';

type Props = {
    value: number;
    onChange: (value: number) => void;
};

export function FontWeight({ value, onChange }: Props) {
    return (
        <div className={css.column}>
            <label>Жирность</label>
            <input
                min={100}
                max={900}
                step={100}
                type="range"
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChange(Number(event.target.value))
                }
            />
        </div>
    );
}
