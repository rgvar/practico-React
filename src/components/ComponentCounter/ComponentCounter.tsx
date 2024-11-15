import { useState } from 'react'




export const ComponentCounter = () => {
    const [counter,setCounter] = useState<number>(0);

    const increaseCounter = () => {
        setCounter((prev) => prev+1);
    };

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter((prev) => prev-1);
        }
    };

    return (
        <div>
            <h2>valor: {counter}</h2>
            <button onClick={increaseCounter} >+</button>
            <button onClick={decreaseCounter} >-</button>
        </div>
    )
}
