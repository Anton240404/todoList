import { ReactNode, useState } from 'react';

function App() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState<string[]>([]);

    const handleClickText = () => {
        const copyTodos = [...todos];
        copyTodos.push(text);
        setTodos(copyTodos);
        setText('');
    };

    const handleClickDelete = (index: number) => {
        const copyTodos = [...todos];
        copyTodos.splice(index, 1);
        setText(copyTodos);
    };

    return (
        <div>
            <button onClick={handleClickDelete}></button>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={() => handleClickText()}>click</button>
        </div>
    );
}

export default App;
