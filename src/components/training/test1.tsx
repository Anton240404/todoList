import React from 'react';
import { useEffect } from 'react';

// Todo
let x = 1;

export function Test1({ userId }) {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('error');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Имя пользователя:', data.name);
                console.log('Email пользователя:', data.email);
            })
            .catch((error) => {
                console.log('Проблема с fetch запросом:', error);
            });
    }, [userId, x]);

    return <div onClick={() => ++x}>Информация о пользователе {userId}</div>;
}
