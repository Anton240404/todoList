import React, { useState } from 'react';
import './components/css/reset.css';
import './components/css/todo.css';

export type Todo = {
    id: string;
    text: string;
    description: string;
};

const names = ['A', 'B'];
const [a, b] = names;

const numbers = [1, 2, 3];

export const App = () => {
    const [state, setState] = useState(10);
    const [show, setShow] = useState(false);

    return (
        <div>
            <button
                onClick={() => {
                    setState(state + 1);
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    setState(state - 1);
                }}
            >
                -
            </button>
            {state > 0 && <div>{state} &gt; 0</div>}

            <button onClick={() => setShow(!show)}>Toggle</button>

            {show && (
                <>
                    {numbers.map((x) => (
                        <p>{x}</p>
                    ))}
                </>
            )}
        </div>
    );
};
