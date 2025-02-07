import React from 'react'
import { IoIosDownload } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import image from "../../assets/me/download20250202205313.png"
function Presentation() {
  return (
    <header className='flex justify- gap-4 m-auto pt-10 align-middle'>
             
            <div className='group float-left m-auto w-80 self-center'>
              <img src={image} alt="user icon" className='relative z-10 bg-slate-600 shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)] m-0 p-0 rounded-full' />
            </div>
            <main className='self-center'>
              <div>
                <h1 className='font-semibold text-4xl text-white'>Correa Dylan</h1>
                <p className='pt-2 text-gray-300 text-sm'>I am constantly striving to improve myself every day, developing my skills and gaining knowledge to make the right decisions and deliver the best solutions at the right time.</p>
              </div>
              <div className='flex pt-2 align-center'>
                  <button className='flex justify-center bg-indigo-900/40 hover:bg-indigo-900 hover:shadow-[0px_0px_8px_4px_rgba(36,48,137,1)] m-2 px-4 py-1 rounded-md font-semibold text-white duration-150 hover:scale-105'> <IoIosDownload className='m-auto text-xl'></IoIosDownload> Resume</button>
                  <a href='https://www.linkedin.com/in/dylan-correa-586a012a9/' className='flex justify-center bg-indigo-900/40 hover:bg-indigo-900 hover:shadow-[0px_0px_8px_4px_rgba(36,48,137,1)] m-2 px-2 py-1 rounded-md font-semibold text-white duration-150 hover:scale-105'> <FaLinkedinIn className='m-auto text-xl'></FaLinkedinIn></a>
                  <a href='https://github.com/DylanEzequiel' className='flex justify-center bg-indigo-900/40 hover:bg-indigo-900 hover:shadow-[0px_0px_8px_4px_rgba(36,48,137,1)] m-2 px-2 py-1 rounded-md font-semibold text-white duration-150 hover:scale-105'> <FaGithub className='m-auto text-xl'></FaGithub></a>
              </div>
            </main>
          </header>
  )
}

export default Presentation