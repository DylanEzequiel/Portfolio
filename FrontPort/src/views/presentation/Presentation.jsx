import React, { useState } from 'react'
import { motion } from "framer-motion";
import { IoIosDownload } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import image from "../../assets/me/Me.png"
import image2 from "../../assets/me/MeSaludando.png"
function Presentation() {
  const [background, setBackground]=useState(image)
  return (
    <header className='flex justify- gap-4 m-auto pt-10 align-middle'>
            <div >
                      
              <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileDrag={{ scale: 0.95, rotate: 10 }}
                  drag 
                  dragSnapToOrigin={true}
                  className='group flex-col self-center m-auto w-40 select-none'
                      onMouseEnter={() => setBackground(image2)}
                      onMouseLeave={() => setBackground(image)}
                  >
                    <img src={background} alt="user icon"   draggable="false" className='z-10 relative bg-slate-600 shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)] m-0 p-0 rounded-full duration-200 select-none' />
                    
              </motion.button>
              
            </div>
            <main className='self-center'>
              <div>
                <h1 className='font-semibold text-white text-4xl'>Correa Dylan</h1>
                <p className='pt-2 text-gray-300 text-sm'>I am constantly striving to improve myself every day, developing my skills and gaining knowledge to make the right decisions and deliver the best solutions at the right time.</p>
              </div>
              <div className='flex pt-2 align-center'>
                <a  
                  href="/assets/Cv/Dylan Correa Cv español.docx" 
                  download="Dylan_Correa_CV.docx" className='flex justify-center bg-indigo-900/40 hover:bg-indigo-900 hover:shadow-[0px_0px_8px_4px_rgba(36,48,137,1)] m-2 px-4 py-1 rounded-md font-semibold text-white hover:scale-105 duration-150'> <IoIosDownload className='m-auto text-xl'>
                  </IoIosDownload> Resume</a>
                  <a href='https://www.linkedin.com/in/dylan-correa-586a012a9/' className='flex justify-center bg-indigo-900/40 hover:bg-indigo-900 hover:shadow-[0px_0px_8px_4px_rgba(36,48,137,1)] m-2 px-2 py-1 rounded-md font-semibold text-white hover:scale-105 duration-150'> <FaLinkedinIn className='m-auto text-xl'></FaLinkedinIn></a>
                  <a href='https://github.com/DylanEzequiel' className='flex justify-center bg-indigo-900/40 hover:bg-indigo-900 hover:shadow-[0px_0px_8px_4px_rgba(36,48,137,1)] m-2 px-2 py-1 rounded-md font-semibold text-white hover:scale-105 duration-150'> <FaGithub className='m-auto text-xl'></FaGithub></a>
              </div>
            </main>
          </header>
  )
}

export default Presentation