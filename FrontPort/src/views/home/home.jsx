import React from 'react'
import HandCoding from '../../Components/svg/handcoding/HandCoding'
import AboutMe from '../aboutMe/aboutMe'

function Home() {
  
  return (
    <div>
      <div className='flex flex-wrap justify-around m-20'>
              <div className='m-auto border-b-2 w-2/4 font-customFont'>
                <h1 className='font-medium text-4xl'>Hola!</h1>
                <h3 className='my-3 font-medium text-3xl'>Me llamo 
                  <i className='text-comp_first_color'> Dylan Ezequiel Correa </i>
                  </h3>
                <p className='text-gray-600 text-lg'>Soy un desarrollador Fullstack con especialización en el front end, me gusta mucho trabajar en diseños y realizarlos con mi toque especial!
                </p>
              </div>

              <div className='p-4 w-2/4'> 
                <HandCoding  className="float-right"/>
              </div>

      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  )
}

export default Home