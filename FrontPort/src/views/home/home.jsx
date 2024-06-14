import React from 'react'
import HandCoding from '../../Components/svg/handcoding/HandCoding'

function Home() {
  
  return (
      <div className='flex flex-wrap justify-around m-20 h-max'>
              <div className='w-3/5 font-customFont'>
                <h1 className='font-medium text-4xl'>Hola!</h1>
                <h3 className='my-3 font-medium text-3xl'>Me llamo 
                  <i className='text-comp_first_color'> Dylan Ezequiel Correa </i>
                  </h3>
                <p className='text-gray-600 text-lg'>Y soy un desarrollador Fullstack con especialización en el front end, me gusta mucho trabajar en diseños y realizarlos es algo muy comodo y lindo para mí.
                </p>
              </div>

              <div className='min-w-40'> 
                <HandCoding  className="float-right"/>
              </div>

      </div>
  )
}

export default Home