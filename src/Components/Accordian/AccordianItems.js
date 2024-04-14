import React from 'react'
import { useState } from 'react';

const AccordianItems = ({items}) => {
    console.log(items)
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index) => {
        setActiveIndex(index===activeIndex? -1 : index)
    }

  return (
    <div>Accordian
        {items.map((item, index) =>{   
        return(<div key={index}>
            <button onClick={()=>handleClick(index)}>{item.title}</button>
            {index===activeIndex && <p>{item.content}</p>}
            </div>)
        })}
    </div>
    
  )
}

export default AccordianItems