import css from '../interactive-button-edit.module.css';
import { ChangeEvent } from 'react';

type Props = {
    value: number;
    onChange: (value: number) => void;
};

export function PaddingHorizontal({ value, onChange }: Props) {
    return (
        <div className={css.column}>
            <label>Внутренние отступы горизонтальные</label>
            <input
                min={0}
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
