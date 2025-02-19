import React from 'react'
import Contact from '../../views/contact/Contact'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'

function Footer() {
  return (
    

<footer className="shadow">
    <div >
        <Contact></Contact>
    </div>
    <div className="md:flex md:justify-between md:items-center bg-gray-800 mx-auto p-4 w-full max-w-screen-xl">
      <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-center">
        Created by: Correa Dylan
    </span>
    <ul className="flex flex-wrap items-center mt-3 sm:mt-0 font-medium text-gray-500 dark:text-gray-400 text-sm">
        <li className='flex justify-center mx-2 py-1 rounded-md font-semibold text-gray-400 hover:text-white hover:scale-105 duration-150'>
            <a href="#" className="m-auto pr-1 text-gray-300 text-xl">
                <FaLinkedinIn/>
            </a>
        </li>
        <li className='flex justify-center mx-2 py-1 rounded-md font-semibold text-gray-400 hover:text-white hover:scale-105 duration-150'>
            <a href="#" className="m-auto pr-1 text-gray-300 text-xl">
                <FaGithub/>
            </a>
        </li>
        {/* <li>
            <a href="#" className="me-4 md:me-6 hover:underline">
                <BsTwitterX />
            </a>
        </li> */}
       
    </ul>
    </div>
</footer>

  )
}

export default Footer