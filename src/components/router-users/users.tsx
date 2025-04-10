import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/create">
                <button>Добавить нового</button>
            </Link>
        </div>
    );
}
