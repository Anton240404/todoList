import React, { useEffect, useState } from 'react';
import { RouterDom } from './components/training/react-dom/router-dom';
import { RouterUsers, User } from './components/router-users/users';
import { CreateUser } from './components/router-users/create-users';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
    const [users, setUsers] = useState<User[]>(() => {
        const saved = localStorage.getItem('users');
        if (saved) {
            return JSON.parse(saved);
        }
        return [
            { id: '1', name: 'Jon', text: 'men' },
            { id: '2', name: 'Maria', text: 'women' },
            { id: '3', name: 'Anna', text: 'women' },
        ];
    });
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <div>
            <Routes>
                <Route path="/" element={<RouterUsers users={users} />} />
                <Route
                    path="/create"
                    element={<CreateUser setUsers={setUsers} />}
                />
            </Routes>
        </div>
    );
};
