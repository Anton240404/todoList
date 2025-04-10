import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from './users';
import { nav } from './Initial-value';

type Props = {
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export function CreateUser(props: Props) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleAddUser = () => {
        if (!name.trim() || !text.trim()) return;

        const newUser: User = {
            id: crypto.randomUUID(),
            name,
            text,
        };

        props.setUsers((prev) => [...prev, newUser]);
        navigate(nav.base);
    };

    return (
        <div>
            <h2>Создать пользователя</h2>
            <input
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="Описание"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddUser}>Сохранить</button>
        </div>
    );
}
