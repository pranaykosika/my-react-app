import React from 'react'
import Rightcard from './Rightcard'
import 'remixicon/fonts/remixicon.css'
const RightContent = (props) => {
  
  return (
    <div className='h-full  flex flex-nowrap overflow-x-auto gap-11 w-2/3 p-7'>
       
        {props.users.map(function(elem,idx){
          return <Rightcard img={elem.img} tag={elem.tag} color={elem.color} key={idx} id={idx} />
        })}
    </div>
  )
}

export default RightContent