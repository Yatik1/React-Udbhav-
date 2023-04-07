import React from 'react'
import loadImage from '../public/loadback.jpg'

function Loader() {
  return (
    <div className='h-screen w-screen text-white font-bold flex justify-center items-center'
    
    style={{
      backgroundImage: `url(${loadImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',

     }}   
    
    >
         
         <div className='w-[50vh] h-fit'>
           <img src = "../public/loadimage.png" alt= 'loading .'/>
         </div>
    </div>
  )
}

export default Loader
