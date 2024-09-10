import { useState } from "react"
import "./componets/testArray"

function App() {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])

    const handleClickText = () => {
        const copyTodos = [...todos]
        copyTodos.push(text)
        setTodos(copyTodos)
        setText("")
        /* todos.push(text)
        setText("");*/
    }

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={() => handleClickText()}>click</button>
            <div>{todos.join(";")}</div>
        </div>
    )
}

export default App
