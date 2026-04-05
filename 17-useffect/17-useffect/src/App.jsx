import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  useEffect(function(){
    aChanging()
  },[a])
  useEffect(function(){
    bChanging()
  },[b])


  function aChanging() {
    console.log('a is changing...');
  }
    function bChanging() {
    console.log('b is changing...');
  }
  return (
    <div>
      <h1>A is {a} </h1>
      <h1>B is {b} </h1>
      <button onClick={()=>{
        setA(a+1)
      }}>click</button>
      <button onClick={()=>{
        setB(b-1)
      }}>click</button>
    </div>
  )
}

export default App