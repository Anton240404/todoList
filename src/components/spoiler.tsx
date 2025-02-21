import React from 'react';
import { useState } from 'react';

type Props = {
    title: string;
    text: string;
};

// Стилизовать
// Добавить иконку стрелочки, нужно посмотреть в интернете как поворачивать изображение
export function Spoiler(props: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div
            style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '5px',
                cursor: 'pointer',
            }}
            onClick={() => setOpen(!open)}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                    style={{
                        transform: `rotate(${open ? '90deg' : '0deg'})`,
                        transition: 'transform 0.3s ease',
                    }}
                >
                    ▶
                </span>
                {props.title}
            </div>
            {open && <div style={{ marginTop: '5px' }}>{props.text}</div>}
        </div>
    );
}

// Подумать, как будем взаимодействовать с компонентом (как-то через массив)
// <Accordion ... />

export function Accordion() {
    const data = [
        { title: 'Заголовок 1', text: 'Текст 1' },
        { title: 'Заголовок 2', text: 'Текст 2' },
        { title: 'Заголовок 3', text: 'Текст 3' },
    ];

    return (
        <div>
            {data.map((item) => (
                <Spoiler title={item.title} text={item.text} />
            ))}
        </div>
    );
}

// Сделать <Breadcrumbs /> -----> тут хорошо нужно разобрать код. Не понимаю как работает.
// Сделать <Alert />
