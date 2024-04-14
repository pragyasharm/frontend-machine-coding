import React from 'react'
import AccordianItems from './AccordianItems'

const items = [
    {
       title: "Section 1",
       content: "This is the content of section 1"
    },
    {
       title: "Section 2",
       content: "This is the content of section 2"
    },
    {
       title: "Section 3",
       content: "This is the content of section 3"
    }
 ]

const Accordian = () => {
  
  return (
    <div>
        <AccordianItems items={items}/>
    </div>

  )
}

export default Accordian