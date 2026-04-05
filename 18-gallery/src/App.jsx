import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)
  const GetData = async () =>{
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
  setuserData(response.data)
  }

  useEffect(function(){
    GetData()
  },[index])

  let currentuserData =<h3 className='text-gray-300 text-xs absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length>0){
    currentuserData = userData.map(function(elem,idx){
      return <div>
       <Card elem={elem} />
      </div>
    })
  }



  return (
    <div className='bg-black overflow-auto h-screen text-white'>
     
      <div className='flex flex-wrap p-4 gap-2'>
       {currentuserData}
      </div>
      <div className='flex justify-center items-center gap-6 p-4 '>
        <button onClick={()=>{
          if(index>1)
            setuserData([])
          setindex(index-1)
        }} className='bg-[#BFA28C] text-white rounded text-sm cursor-pointer active:scale-75 px-4 py-1'>
          Prev
        </button>
        <h2 className='font-sans'>Page {index}</h2>
        <button onClick={()=>{
          setindex(index+1)
          setuserData([])
        }} className='bg-[#BFA28C] text-white rounded text-sm cursor-pointer active:scale-75 px-4 py-1'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App