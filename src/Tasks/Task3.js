import { useState } from "react";

function Task3() {

    const [number, setNumber] = useState(10)

    const subtract5 = () => {
        setNumber(number - 5)
    }
    const subtract1 = () => {
        setNumber(number - 1)
    }
    const add1 = () => {
        setNumber(number + 1)
    }
    const add5 = () => {
        setNumber(number + 5)
    }

    return (
        <div>
            <h2 style={{ marginTop: '30px', marginLeft: '20px' }}>Task 3</h2>
            <button style={{marginLeft: '40px'}} onClick={subtract5}>-5</button>
            <button onClick={subtract1}>-1</button>
            <input value={number}></input>
            <button onClick={add1}>+1</button>
            <button onClick={add5}>+5</button>
        </div>
    )
}


export default Task3;