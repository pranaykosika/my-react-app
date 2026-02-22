import React from 'react'

const RightCardContent = (props) => {
    console.log(props.color)
  return (
     <div className='absolute top-0 left-0 h-full w-full  bg-opacity-70 p-6 flex flex-col justify-between'>
          <h2 className='bg-white rounded-full flex text-2xl font-semibold items-center justify-center h-11 w-11'>{props.id+1}</h2>
          <div>
            <p className='text-xl leading-relaxed mb-10 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor a, assumenda doloremque provident perferendis ex.</p>
            <div className='flex justify-between'>
              <button style={{backgroundColor:props.color}} className='text-white px-8 py-3 rounded-full font-medium '>{props.tag}</button>
              <button  className='bg-gray-500 text-white px-6 py-3 rounded-full font-medium '><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>

        </div>
  )
}

export default RightCardContent