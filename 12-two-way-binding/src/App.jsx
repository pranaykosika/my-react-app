import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState('')
  const formsubmit = (e)=>{
    e.preventDefault()
    console.log("Form submitted by",num)
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formsubmit(e)
      }}>
        <input type="text" placeholder="Enter your name" value={num} onChange={(e)=>{
          setnum(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App