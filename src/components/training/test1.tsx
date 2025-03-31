import React, { useState } from 'react';
import { useEffect } from 'react';

type Post = {
    id: number;
    title: string;
    body: string;
};
type User = {
    userId: number;
};

export function Test1(props: User) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newTitle, setNewTitle] = useState<string>('');
    const [newText, setNewText] = useState<string>('');

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
    }, [props.userId]);

    const createPost = () => {
        const newPost: Post = {
            id: Date.now(),
            title: newTitle,
            body: newText,
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Тип отправляемых данных
            },
            body: JSON.stringify(newPost), // Преобразуем JS-объект в JSON-строку
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка при создании');
                }
                return response.json;
            })
            .then((data) => console.log('Пост успешно создан:', data))
            .catch((error) => console.error('Ошибка:', error));
    };

    const updatePost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 1,
                title: 'Обновленный заголовок',
                body: 'Обновленное содержимое',
                userId: 1,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка при обновлении');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Пост успешно обновлен:', data);
            })
            .catch((error) => {
                console.error('Ошибка:', error);
            });
    };

    const deletePhoto = (id: number) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setPosts(posts.filter((post) => post.id !== id));
            })
            .catch((error) => console.error('Ошибка удаления:', error));
    };

    return <div>Информация о пользователе {props.userId}</div>;
}
