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
            <ul>
                {nums.map((x, i) => (
                    <li key={i}>
                        <input type="text" />
                        text = {x.text}{' '}
                        <button
                            onClick={() => {
                                const copy = [...nums];
                                copy.splice(i, 1);
                                setNums(copy);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            {/* <button onClick={handleClickDelete}></button>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={() => handleClickText()}>click</button> */}
        </div>
    );
}

export default App;
