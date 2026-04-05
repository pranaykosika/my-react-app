import React from 'react'


const App = () => {
 const user={
    name:"pranay",
    age:22,
    city:"pune"
  }
  localStorage.setItem("user",JSON.stringify(user))
  return (
    <div>App</div>
  )
}

export default App