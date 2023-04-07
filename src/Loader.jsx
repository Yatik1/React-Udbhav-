import React from 'react'
import logo from '../public/logo.png'

function Loader() {
  return (
    <div className='h-screen w-screen bg-black text-white font-bold flex justify-center items-cente'>
        <div className='my-[50vh]'>
          <image src = {logo} alt= 'loading .'/>

           . . . . . . . . . . 

          </div> 
    </div>
  )
}

export default Loader
