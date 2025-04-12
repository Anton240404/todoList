import React from 'react';
import { Link } from 'react-router-dom';
import { nav } from './Initial-value';

export type User = {
    id: string;
    name: string;
    text: string;
};

type Props = {
    users: User[];
};

export function RouterUsers(props: Props) {
    return (
        <div>
            <h2>Пользователи:</h2>
            {props.users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <div>{user.text}</div>
                </div>
            ))}
            <Link to={nav.create}>
                <button>Добавить нового</button>
            </Link>
        </div>
    );
}
