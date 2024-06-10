import React from 'react'
import svg from "./Handcoding-bro.svg"
function HandCoding() {
  return (
    <div className='flex justify-evenly m-4 h-max' >
        <div className='shadow-lg shadow-third_color m-auto h-max'>
            <h1 className='bg-second_color font-bold text-3xl'>Hola!</h1>
            <h3 className='bg-second_color font-bold text-xl'>Me llamo Dylan Ezequiel Correa</h3>
            <p className='bg-second_color m-0 font-bold text-xl'>Y soy un desarrollador Entusiasta</p>
        </div>
        <div className='bg-second_color m-auto rounded-full'> 
            <img src={`${svg}`} alt="" className='w-auto h-64' />
        </div>
    </div>
  )
}

export default HandCoding