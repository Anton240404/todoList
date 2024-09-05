import {useState} from "react";

function App() {

    const [add, setAdd] = useState('')



    return (
        <div>
        <input type="text" onChange={e => setAdd(e.target.value)}/>
        <button onClick={}>click</button>
        </div>
    )
}

export default App
