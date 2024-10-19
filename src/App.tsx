import React, { useState } from 'react';
import { uuid } from './components/utils/uuid';
import './components/css/reset.css';
import './components/css/todo.css';
import { A } from './components/a';
import { B } from './components/b';
import { Button } from './components/button/button';
import { AddButton } from './components/add-button/add-button';
import { TodoList } from './components/todo-list/todo-list.tsx';
import { InteractiveButtonEdit } from './components/interactive-button/Interactive-button-edit.tsx';
import { Input } from './components/todo-list/input/input.tsx';
import { Textarea } from './components/todo-list/texterea/textarea.tsx';

export type Todo = {
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
        {
            id: uuid(),
            text: 'Другое дело 2',
            description: 'Описание другого дела',
        },
        {
            id: uuid(),
            text: 'Другое дело 2',
            description: 'Описание другого дела',
        },
    ]);
    const [gap, setGap] = useState(20);

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
            <InteractiveButtonEdit />
            <div>
                <Input
                    placeholder="Название туду"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    onKeyDown={handleKeyPress}
                />
                <Textarea
                    placeholder="Описание туду"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <AddButton
                    color=""
                    addTodo={() => addTodo()}
                    disabled={text.trim() === '' || description.trim() === ''}
                />
            </div>
            <p>gap = {gap}</p>
            <input
                min={0}
                max={200}
                type="range"
                onChange={(ev) => {
                    setGap(Number(ev.target.value)); // "134"
                }}
            />
            <TodoList deleteTodo={deleteTodo} todos={todos} gap={gap} />
            <Button
                text={'Добавить'}
                colorVariant="success"
                onClick={() => console.log('Click')}
            />
        </div>
    );
};

function doOperation(
    a: number,
    b: number,
    getResult: (a: number, b: number) => number,
    print: (value: number) => void
) {
    const _3 = getResult(a, b);
    print(_3);
}

const sum = (a: number, b: number): number => {
    return a + b;
};

doOperation(
    1,
    2,
    (a, b) => sum(a, b),
    (value) => console.log(value)
);
doOperation(1, 2, sum, console.log);
