import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submithandler =(e)=>{
    e.preventDefault()

    const copyTask =[...task];
    copyTask.push({title,details})
    setTask(copyTask)
    
    
  
   
    setTitle('')
    setDetails('')

  }

  const deleteHandler =(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='flex p-10  flex-col items-start lg:w-1/2 gap-5'>
        
          <input 
          className='px-5 py-2 border-2 w-full  rounded  '
          type="text"
          placeholder='enter a text' 
          value={title} 
          onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
        <textarea 
        className='px-5 h-40 py-2 border-2 rounded items-start flex-row w-full' 
        type="text" 
        placeholder='Enter Details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }} />
        <button className='bg-white active:scale-95 text-black rounded px-5 py-3 w-full '>Add note</button>
       
      </form>
      <div className=' p-10 lg:border-l-2 lg:w-1/2'>
      <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 h-[90%] overflow-auto mt-5'>
       {task.map(function(elem,idx){
        return<div key={idx} className="h-60 py-9.5 flex justify-between flex-col relative w-45 text-black px-5 pb-4 pt-9 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover">
          <h3 className='text-xl font-bold leading-tight '>{elem.title}</h3>
          <p className='leading-tight font-medium mt-4 text-gray-500'>{elem.details}</p>
          <div>
            <button onClick={()=>{
              deleteHandler(idx)
            }} className='bg-red-500 active:scale-95 cursor-pointer w-full rounded text-xs py-1 '>Delete</button>
          </div>
        </div>
        
        

       })}
    
        
        </div>
      </div>
    </div>
  )
}

export default App