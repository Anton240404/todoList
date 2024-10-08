import React, { useState } from 'react';
import { uuid } from './components/utils/uuid';
import './components/css/reset.css';
import './components/css/todo.css';
import { A } from './components/a';
import { B } from './components/b';
import { Button } from './components/button/button';
import { AddButton } from './components/add-button/add-button';

type Todo = {
    id: string;
    text: string;
    description: string;
};

export const App = () => {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: uuid(),
            text: 'Начальное дело',
            description: 'Описание начального дела',
        },
        {
            id: uuid(),
            text: 'Другое дело',
            description: 'Описание другого дела',
        },
    ]);

    const addTodo = () => {
        if (text.trim() !== '' && description.trim() !== '') {
            setTodos([...todos, { id: uuid(), text, description }]);
            setText('');
            setDescription('');
        } else {
            alert('Введите правильное значение!');
        }
    };

    const deleteTodo = (id: string) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTodo();
        }
    };

    return (
        <div className="todo-app">
            <h1>Мой список дел</h1>
            <A />
            <B />
            <Button />
            <div>
                <input
                    className="todo-input"
                    type="text"
                    placeholder="Название туду"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    onKeyDown={handleKeyPress}
                />
                <textarea
                    className="todo-textarea"
                    placeholder="Описание туду"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <AddButton
                    color="green"
                    addTodo={() => addTodo()}
                    disabled={text.trim() === '' || description.trim() === ''}
                />
            </div>

            {/* <TodoList /> */}
            <div className="todo-list">
                {todos.map((todo) => (
                    <div className="todo-item" key={todo.id}>
                        <h1 className="todo-title">{todo.text}</h1>
                        <p className="todo-text">{todo.description}</p>
                        <button
                            className="delete-btn"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            Удалить
                        </button>
                    </div>
                ))}
            </div>
            {/* <TodoList /> */}

            {/* <Button text="Добавить" colorVariant="success" | "danger" | "warning" onClick={() => console.log('Click')} /> */}
        </div>
    );
};
