import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {Link} from "react-router-dom"


function NavBar() {
  return (
    <div className='bg-white p-4 outline outline-2 outline-black'>
      <ul className='flex text-black'>
        <li className='inline bg-transparent hover:bg-slate-400 p-2 rounded-full transition-colors duration-200 ease-in'>
            <a href="https://www.linkedin.com/in/dylan-correa-586a012a9/" >
              <FaLinkedin size={30} />
            </a>
        </li>
        <li className='bg-transparent hover:bg-blue-300 p-2 rounded-full transition-colors duration-200 ease-in'>
             <a href="https://github.com/DylanEzequiel">
              <FaGithub size={30} />
             </a>
        </li>
        <li className='bg-transparent hover:bg-green-400 p-2 rounded-full transition-colors duration-200 ease-in'>
          <SiGmail size={30}/>
        </li>
      </ul>
    </div>
  )
}

export default NavBar