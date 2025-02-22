import React from 'react';
import { useState } from 'react';

type Props = {
    title: string;
    text: string;
};

// Стилизовать
// Добавить иконку стрелочки, нужно посмотреть в интернете как поворачивать изображение
export function Spoiler(props: Props) {
    // Лучше всегда называть булевы переменные с is/are, но вкусовщина
    const [open, setOpen] = useState(false);

    return (
        <div
            // Вынести стили в css
            style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '5px',
                cursor: 'pointer',
            }}
            onClick={() => setOpen(!open)}
        >
            {/* Вынести стили в css */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                    // Вынести стили в css
                    style={{
                        // зачем deg дублировать ?
                        transform: `rotate(${open ? '90deg' : '0deg'})`,
                        transition: 'transform 0.3s ease',
                    }}
                >
                    {/* Сделай нормальную картинку, че позоришься */}▶
                </span>
                {props.title}
            </div>
            {/* Вынести стили в css */}
            {open && <div style={{ marginTop: '5px' }}>{props.text}</div>}
        </div>
    );
}

// Подумать, как будем взаимодействовать с компонентом (как-то через массив)
// <Accordion ... />

// Если я хочу, чтобы первый элемент был сразу же открыт ?
export function Accordion() {
    // Эти данные точно должны быть здесь ?
    const data = [
        { title: 'Заголовок 1', text: 'Текст 1' },
        { title: 'Заголовок 2', text: 'Текст 2' },
        { title: 'Заголовок 3', text: 'Текст 3' },
    ];

    return (
        <div>
            {data.map((item) => (
                // Где ключ ?
                // Посмотреть самостоятельно, что такое children, и вместо text={item.text} в <Spoiler /> передать children
                <Spoiler title={item.title} text={item.text} />
            ))}
        </div>
    );
}

// Сделать <Breadcrumbs /> -----> тут хорошо нужно разобрать код. Не понимаю как работает.
// Сделать <Alert />
