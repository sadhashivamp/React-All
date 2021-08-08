import React, { useState } from 'react'
        
function IcrDcr() {
    const [counter, setCounter] = useState(0)

    const clickHandler = () => {
        setCounter(counter + 1)
    }
    return (
        <div style={{backgroundColor:"grey",width:"300px", height:"100px"}}>
            <h1 style={{color:"blue"}}>{counter}</h1>
            <div>
                <button style={{color:"white",backgroundColor:"green"}} onClick={clickHandler} id="increment">Increment</button>
                <button style={{color:"white",backgroundColor:"red"}} onClick={() => setCounter((c) => c - 1)} id="decrement" >Decrement</button>
            </div>
        </div>
    )
}

export default IcrDcr

        

            
