import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { moveLeft, moveRight } from './store/movableSlice'

const MoveSwapComponent = () => {
    const leftData = useSelector( appStore => appStore.move.leftComponent )
    const rightData = useSelector( appStore => appStore.move.rightComponent )
    const dispatch = useDispatch();

    const handleMoveLeft = (index) => {
       dispatch(moveLeft(index))
    }
    
    const handleMoveRight = (index) => {
        dispatch(moveRight(index))
     }

    return (
        <div> 
            <h1 className='text-2xl'>Move or Swap</h1>
            <div className='flex'>
            <div className='m-4 p-4'>
                <ul>
                   {leftData && leftData.map((data, index) => { 
                    return <li onDoubleClick={()=> handleMoveLeft(index)} key={index}>{data}</li>
                   })}

                </ul>
            </div>


            <div className='m-4 p-4'>
                <ul>
                    {rightData && rightData.map((data, index) => { 
                    return <li  onDoubleClick={()=> handleMoveRight(index)}  key={index}>{data}</li>
                   })}
                    
                </ul>
            </div>
            </div>
        </div>
    )
}

export default MoveSwapComponent