import React from 'react'

const ModalContent = ({ toggleModal }) => {
    return (
        <div className='fixed inset-0'>
            <div className='fixed inset-0 bg-gray-700/40'  onClick={toggleModal}></div>
            <div className='p-4 rounded-lg fixed w-54 h-auto top-[200px] left-[40%] bg-white'>
                <div> lorem lisum fggee gfgfggsdsdsdds ssasafgfgfgf
                </div>
                <button className='border rounded-lg m-2 p-2' onClick={toggleModal}>Close</button>
            </div>
        </div>
    )
}


export default ModalContent