import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";


function NavBar() {
  return (
    <div className=' bg-fourth_color  '>
      <div className='flex justify-between'>
        <ul className='flex m-2 text-black'>
          <li >
            <div className='bg-transparent m-2 p-2 hover:shadow-md drop-shadow-md hover:shadow-white rounded-full transition-all duration-200 ease-in hover:bg-white hover:text-blue-500'>
              <a href="https://www.linkedin.com/in/dylan-correa-586a012a9/" className='text-3xl'>
                <FaLinkedin className='' />
              </a>
            </div>
          </li>
          <li >
            <div className='bg-transparent hover:shadow-md hover:shadow-black hover:bg-black m-2 p-2 rounded-full hover:text-white transition-all duration-200 ease-in'>
                <a href="https://github.com/DylanEzequiel" className='text-3xl'>
                  <FaGithub />
                </a>
            </div>
          </li>
        </ul>
        <div>
          <ul className='flex p-4 select-none'>
            <li className='p-2'>
                <b>About Me</b>
            </li>
            <li className='p-2'>
                <b>Background</b>
            </li>
            <li className='p-2'>
                <b>Proyects</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar