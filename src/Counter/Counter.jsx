import React, { useState } from 'react'

const Counter = () => {

    const [counterValue, setCounterValue] = useState("0");

  return (
    <div>
       <h2 data-testid="header">My Counter</h2>
       <h2 data-testid="counter">{counterValue}</h2>
       <button data-testid="substract-btn">-</button>
    </div>
  )
}

export default Counter;