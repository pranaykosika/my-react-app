import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(10)
  const btnclicked = () => {
        setnum(prev=>(prev+3))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked}>click me </button>
    </div>
  );
}

export default App