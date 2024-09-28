import { useState } from 'react';
import { Button } from './components/print-sum-text';
import TypesInReact from './components/home-work/typesInReact.tsx';

function App() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState<string[]>(['A', 'B', 'C']);

    const addTodo = () => {
        const copyTodos = [...todos];
        copyTodos.push(text);
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
            <TypesInReact />

            {todos.map((value, index) => (
                <p>
                    value = {value}, index = {index}
                    <button onClick={() => deleteTodo(index)}>Удалить</button>
                </p>
            ))}

            {[
                <p>
                    value = {'A'}, index = {0}
                    <button onClick={() => console.log(123)}>Delete</button>
                </p>,
                <p>
                    value = {'B'}, index = {1}
                </p>,
                <p>
                    value = {'C'}, index = {2}
                </p>,
            ]}

            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={() => addTodo()}>Добавить туду</button>
        </div>
    );
}

export default App;
