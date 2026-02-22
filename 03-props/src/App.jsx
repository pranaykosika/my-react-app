import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='pranay' age={18} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJgexfDAWKxhPcT-DytGgLo9ewkkT_q1hgA&s' />
      <Card user='uday' age={19} img='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg' />
      <Card user='uday' age={20} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmxly7qz8EdxJSXRfjttK5BXp0HrfVjTL4zg&s' />
      </div>
  )
}

export default App