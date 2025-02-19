import React, { useState } from 'react'
import { motion } from "framer-motion";
import { IoIosDownload } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";

import image from "../../assets/me/Me.png"
import image2 from "../../assets/me/MeSaludando.png"
import useStore from '../../../zustandStore';
function Presentation() {
  const [background, setBackground]=useState(image)
  const lang = useStore((state)=>state.language)
  return (
  <div className='max-w-[48rem]'>
    <div className='-z-10 m-auto w-full'>
      <img className='absolute m-auto rounded-sm w-[48rem] h-44' src="https://static.vecteezy.com/system/resources/thumbnails/035/704/300/small/japanese-background-with-hand-drawn-line-wave-in-vintage-style-art-black-landscape-banner-design-with-crane-birds-card-design-decoration-icon-and-symbol-element-in-asia-style-vector.jpg" alt="Background Banner" />
    </div>
    <header className='flex-col gap-4 m-auto pt-24 max-w-[36rem] align-middle'>
            <div className=' '>
                      
              <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileDrag={{ scale: 0.95, rotate: 10 }}
                  drag 
                  dragSnapToOrigin={true}
                  className='group flex-col self-center m-auto sm:w-20 lg:w-40 max-w-40 select-none'
                  onMouseEnter={() => setBackground(image2)}
                  onMouseLeave={() => setBackground(image)}
                  >
                    <img src={background} alt="user icon"   draggable="false" className='z-10 relative bg-[#0e0f1ff5] shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)] m-0 p-0 border-[#0e0f1f] border-4 rounded-full sm:w-20 lg:w-40 duration-200 select-none' />
                    
              </motion.button>
              
            </div>
            <main className='self-center'>
              <div className=''>
                <h1 className='font-semibold text-white text-4xl'>Correa Dylan</h1>
                <p className='pt-2 text-gray-300 text-md'>
                  {lang =="eng"?
                  "I am constantly striving to improve myself every day, developing my skills and gaining knowledge to make the right decisions and deliver the best solutions at the right time."
                  :"Constantemente busco mejorar, desarrollar mis habilidades y ganar conocimiento para poder realizar las mejores soluciones en el momento correcto"}</p>
              </div>
              <div className='flex gap-2 pt-2 font-semibold text-center align-center'>
                <span className='flex justify-center mr-2 py-1 rounded-md font-semibold text-gray-400 hover:text-white hover:scale-105 duration-150' >
                  <HiBriefcase  className='m-auto pr-1 text-gray-200 text-2xl' />
                  <p>
                    {lang=="eng"?"Available":"Disponible"}
                  </p>
                </span>
                <a  
                  href="/assets/Cv/Dylan Correa Cv español.docx" 
                  download="Dylan_Correa_CV.docx" className='flex justify-center mr-2 py-1 rounded-md font-semibold text-gray-400 hover:text-white hover:scale-105 duration-150'> 
                    <IoIosDownload className='m-auto pr-1 text-gray-200 text-2xl'/>
                    {lang=="eng"?"Resume":"Curriculum"}
                  </a>
                  <a href='https://www.linkedin.com/in/dylan-correa-586a012a9/' className='flex justify-center mx-2 py-1 rounded-md font-semibold text-gray-400 hover:text-white hover:scale-105 duration-150'> 
                    <FaLinkedinIn className='m-auto pr-1 text-gray-200 text-2xl'/>
                    Linkedin
                  </a>
                  <a href='https://github.com/DylanEzequiel' className='flex justify-center mx-2 py-1 rounded-md font-semibold text-gray-400 hover:text-white hover:scale-105 duration-150'> 
                    <FaGithub className='m-auto pr-1 text-gray-200 text-2xl'/>
                    Github
                  </a>
              </div>
            </main>
            
          </header>
</div>
  )
}

export default Presentation