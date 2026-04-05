import axios from 'axios'

const App = () => {
  const Data = async () => {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
      console.log(data)
  }
  return (
    <div>
      <button onClick={Data}>Get data </button>
    </div>
    
  )
}

export default App