import { useState } from 'react';
import css from './select.module.css';
import React from 'react';

type Props = {
    variants: string[];
    selectedVariant: string | undefined;
    onChange: (val: string) => void;
};

export function Select(props: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setOpen(!open)} className={css.selectItem}>
                {props.selectedVariant ?? 'Значение не выбрано'}
            </div>

            {open && (
                <div>
                    {props.variants.map((variant) => (
                        <div
                            className={css.selectItem}
                            onClick={() => {
                                props.onChange(variant);
                                setOpen(false);
                            }}
                        >
                            {variant}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export function SelectTest() {
    const [educationType, setEducationType] = useState<string | undefined>(
        undefined
    );

    const [gender, setGender] = useState<string | undefined>(undefined);

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'column',
                }}
            >
                <Select
                    variants={['Очное', 'Заочное', 'Комбинированное']}
                    selectedVariant={educationType}
                    onChange={(val) => {
                        setEducationType(val);
                    }}
                />

                <Select
                    variants={['Мужской', 'Женский']}
                    selectedVariant={gender}
                    onChange={(val) => {
                        setGender(val);
                    }}
                />
            </div>
        </div>
    );
}
