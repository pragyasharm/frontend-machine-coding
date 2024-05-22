import React, { useState } from 'react'
import image_1 from './Carousel_images/image_1.jpg'
import image_2 from './Carousel_images/image_2.jpg'
import image_3 from './Carousel_images/image_3.jpg'

const CarouselBody = () => {
        const data = [image_1, image_2, image_3]
        const [currentImageIndex, setCurrentImageIndex] = useState(0)

const handlePre = () => {
    currentImageIndex === 0 ?setCurrentImageIndex(data.length-1) : setCurrentImageIndex((currentImageIndex)=> currentImageIndex-1)
}

const handleNext = () => {
    currentImageIndex === data.length-1 ?setCurrentImageIndex(0) : setCurrentImageIndex((currentImageIndex)=> currentImageIndex+1)
}
  return (
    <div className='flex'>
        <button onClick={handlePre} className='border border-black bg-green-400 w-12'>pre</button> 
         <div>
           <img src={data[currentImageIndex]} alt='images'></img> 
         </div>
        <button onClick={handleNext} className='border border-black bg-green-700 rounded-lg w-12'>next</button>
    </div>
  )
}

export default CarouselBody