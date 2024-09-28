import { useState } from 'react';
import { Button } from './components/button';
import { uuid } from './components/utils/uuid';

type Todo = {
    // id: number; // 1 2 3 4 5
    id: string;
    text: string;
};

// Домашка
// 1) Добавить создание туду по нажатию на Enter
// 2) Привести список в человеческий вид

export const App = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState<Todo[]>([
        { id: uuid(), text: 'Начальное дело' },
        { id: uuid(), text: 'Другое дело' },
    ]);

    const addTodo = () => {
        const copyTodos = [...todos];
        copyTodos.push({
            text: text,
            id: uuid(),
        });
        setTodos(copyTodos);
        setText('');
    };

    const deleteTodo = (index: number) => {
        const copyTodos = [...todos];
        copyTodos.splice(index, 1);
        setTodos(copyTodos);
    };

    return (
        <div>
            <Button text="Hello" borderRadius="0px" textColor="red" />

            {todos.map((todo, index) => (
                <p key={todo.id}>
                    {todo.text}, id = {todo.id}
                    <button onClick={() => deleteTodo(index)}>Удалить</button>
                </p>
            ))}

            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={() => addTodo()}>Добавить туду</button>
        </div>
    );
};
