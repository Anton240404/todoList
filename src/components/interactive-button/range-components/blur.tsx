import css from '../interactive-button-edit.module.css';
import { ChangeEvent } from 'react';

type Props = {
    xAxis: number;
    yAxis: number;
    blur: number;
    onChange: (values: { xAxis: number; yAxis: number; blur: number }) => void;
};

export function Blur({ xAxis, yAxis, blur, onChange }: Props) {
    return (
        <div className={css.blur}>
            <label> X </label>
            <input
                min={0}
                max={100}
                type="range"
                value={xAxis}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChange({ xAxis: Number(event.target.value), yAxis, blur })
                }
            />

            <label>Y </label>
            <input
                min={0}
                max={100}
                type="range"
                value={yAxis}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChange({ xAxis, yAxis: Number(event.target.value), blur })
                }
            />

            <label>Blur</label>
            <input
                min={0}
                max={100}
                type="range"
                value={blur}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChange({ xAxis, yAxis, blur: Number(event.target.value) })
                }
            />
        </div>
    );
}
