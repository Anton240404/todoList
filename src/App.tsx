import React, { useState } from 'react';
import { uuid } from './components/utils/uuid';
import './components/css/todo.css';

type Todo = {
    id: string;
    text: string;
};

export const App = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState<Todo[]>([
        { id: uuid(), text: 'Начальное дело' },
        { id: uuid(), text: 'Другое дело' },
    ]);

    const addTodo = () => {
        if (text.trim() !== '') {
            setTodos([...todos, { id: uuid(), text }]);
            setText('');
        } else {
            alert('Введите правильное значение!');
        }
    };

    const deleteTodo = (index: number) => {
        const copyTodos = [...todos];
        copyTodos.splice(index, 1);
        setTodos(copyTodos);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className="todo-app">
            <h1>Мой список дел</h1>

            <div className="todo-list">
                {todos.map((todo, index) => (
                    <div className="todo-item" key={todo.id}>
                        <p className="todo-text">{todo.text}</p>
                        <button
                            className="delete-btn"
                            onClick={() => deleteTodo(index)}
                        >
                            Удалить
                        </button>
                    </div>
                ))}
            </div>

            <div className="todo-input">
                <input
                    type="text"
                    placeholder="Текст"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={() => addTodo()}>Добавить</button>
            </div>
        </div>
    );
};
