import React from 'react'
import HandCoding from '../../Components/svg/handcoding/HandCoding'

function Home() {
  return (
      <div className='flex flex-wrap justify-around bg-second_color m-20 rounded-2xl h-max'>
              <div className='w-3/5'>
                <h3 className='my-3 font-medium text-3xl'>Me llamo 
                  <i className='text-violet-600'> Dylan Ezequiel Correa </i>
                  </h3>
                <p className='text-gray-600 text-xl'>Y soy un desarrollador Fullstack con especialización en el front end, me gusta mucho trabajar en diseños y realizarlos es algo muy comodo y lindo para mí</p>
              </div>

              <div className='rounded-full min-w-40'> 
                <HandCoding  className="float-right"/>
              </div>

      </div>
  )
}

export default Home