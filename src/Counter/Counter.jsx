import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState("1");

     const handleAddButton = () => {
        setCounterValue(parseInt(inputValue) + counterValue);
    }

    const handleSubstractButton = () => {
        setCounterValue(counterValue - inputValue);
    }


  return (
    <div className='Counter'>
       <h1 data-testid="header">My Counter</h1>
       <h2 
         data-testid="counter" 
         className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`}>{counterValue}</h2>
       <button data-testid="substract-btn" onClick={handleSubstractButton}>-</button>
       <input 
          type="number" 
          data-testid="input" 
          value={inputValue}
          onChange={(e) => setInputValue(parseInt(e.target.value))}/>
        <button data-testid="add-btn" onClick={handleAddButton}>+</button>
    </div>
  )
}

export default Counter;