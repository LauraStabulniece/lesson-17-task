import { useState } from "react";

function Task4() {

    const [number, setNumber] = useState(1)
    const [color1, setColor1] = useState('blue')
    const [color2, setColor2] = useState('red')
    const [color3, setColor3] = useState('red')
    const [color4, setColor4] = useState('red')
    const [color5, setColor5] = useState('red')

    const oneToRight = () => {
        if (number === 1) {
            setColor1('red')
            setColor2('blue')
            setNumber(2)
        } else if (number === 2) {
            setColor2('red')
            setColor3('blue')
            setNumber(3)
        } else if (number === 3) {
            setColor3('red')
            setColor4('blue')
            setNumber(4)

        } else {
            setColor4('red')
            setColor5('blue')
            setNumber(5)
        }
    }

    const oneToLeft = () => {
        if (number === 5) {
            setColor5('red')
            setColor4('blue')
            setNumber(4)
        } else if (number === 4) {
            setColor4('red')
            setColor3('blue')
            setNumber(3)
        } else if (number === 3) {
            setColor3('red')
            setColor2('blue')
            setNumber(2)

        } else {
            setColor2('red')
            setColor1('blue')
            setNumber(1)
        }
    }
    return (
        <div>
            <h2 style={{ marginTop: '30px', marginLeft: '20px'}}>Task 4</h2>
            <div className="row" style={{marginLeft: '40px'}}>
                <div className="col-1 m-1" style={{ backgroundColor: color1, height: '100px', width: '150px' }}></div>
                <div className="col-1 m-1" style={{ backgroundColor: color2, height: '100px', width: '150px' }}></div>
                <div className="col-1 m-1" style={{ backgroundColor: color3, height: '100px', width: '150px' }}></div>
                <div className="col-1 m-1" style={{ backgroundColor: color4, height: '100px', width: '150px' }}></div>
                <div className="col-1 m-1" style={{ backgroundColor: color5, height: '100px', width: '150px' }}></div>
            </div>
            <div className="row" style={{marginLeft: '40px'}}>
                <button className="btn btn-secondary col-1 m-3" onClick={oneToLeft}>Left</button>
                <button className="btn btn-secondary col-1 m-3" onClick={oneToRight}>Right</button>
            </div>
        </div>
    )
}


export default Task4;