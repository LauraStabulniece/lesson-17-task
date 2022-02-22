import { useState } from "react";

function Task1() {

    const [word, setWord] = useState('Foo')

    const changeFoo = () => {
        if (word === 'Foo') {
            setWord('Bar')
        } else {
            setWord('Foo')
        }
    }

    const color = word === 'Foo' ? 'blue' : 'red'

    return (
        <div>
            <h2 style={{ marginTop: '30px', marginLeft: '20px' }}>Task 1</h2>
            <h2 style={{ color: color, marginLeft: '40px'}}>{word}</h2>
            <button style={{marginLeft: '40px'}} onClick={changeFoo}>Click me</button>
        </div>
    )
}

export default Task1;

