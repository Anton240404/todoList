import { ReactNode, useState } from 'react';
import { Button } from './components/print-sum-text';

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
        setTodos(copyTodos);
    };

    return (
        <div>
            {/* {todos.map...} */}
            <Button text="Hello" borderRadius="0px" textColor="red" />

            <Tabs
                items={[
                    {
                        title: 'Контакты',
                        content: 'Контент для вкладки Контакты',
                    },
                ]}
            />

            <button onClick={() => handleClickDelete(2)}>Удалить</button>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={() => handleClickText()}>Добавить туду</button>
        </div>
    );
}

export default App;
