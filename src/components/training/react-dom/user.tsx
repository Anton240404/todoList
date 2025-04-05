import React from 'react';
import { useParams } from 'react-router-dom';

export function User() {
    const { id } = useParams();

    return <div>Пользователь с ID: {id}</div>;
}
