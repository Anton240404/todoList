import React, { useState } from 'react';

// Написать что происходит
export function MyInput() {
    const [count, setCount] = useState(0);

    return (
        <div>
            {/*<button onClick={() => setCount(Math.random())}>*/}
            {/*    Изменить стейт {count}*/}
            {/*</button>*/}
            <div style={{ padding: 5, border: '1px solid' }}>{count}</div>
            <button
                onClick={() => {
                    window.addEventListener('keydown', (event) => {
                        console.log('Была нажата клавиша', event.key);

                        setCount(event.key);
                    });

                    console.log('Был добавлен обработчик keydown на window');
                }}
            >
                Добавить обработчик
            </button>
        </div>
    );
}
