import React, { useState } from 'react'
import { motion } from "framer-motion";
import Proyects from '../Proyects/Proyects'
import Skills from '../Skills/Skills'
import AboutMe from '../AboutMe/AboutMe'
import Experience from '../Experience/Experience'

function Slider() {
    const [render,setRender]=useState("Proyects")
    console.log(render)
    const variants = {
        hidden: { opacity: 0, x: 50 }, // Comienza fuera del viewport (derecha)
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Se desliza hacia dentro
      };
  return (
    <div className='mt-20'>
        <header className='m-auto w-full'>
            <ul className='flex flex-row justify-between shadow-2xl shadow-blue-300/60 text-center select-none'>
                <li  onClick={()=>setRender("Proyects")} className={`font-semibold text-white text-xl border-b-2  duration-200 shadow-2xl shadow-blue-500 border-b-blue-500  w-1/3 ${render != "Proyects"?"hover:border-b-blue-300 border-b-gray-500 shadow-none shadow-transparent":null}`}>Proyects</li>
                
                <li onClick={()=>setRender("About Me")} className={`font-semibold text-white text-xl border-b-2  duration-200 shadow-2xl shadow-blue-500 border-b-blue-500  w-1/3 ${render != "About Me"?"hover:border-b-blue-300 border-b-gray-500 shadow-none shadow-transparent":null}`}>About Me</li>

                <li  onClick={()=>setRender("Experience")} className={`font-semibold text-white text-xl border-b-2  duration-200 shadow-2xl shadow-blue-500 border-b-blue-500  w-1/3 ${render != "Experience"?"hover:border-b-blue-300 border-b-gray-500 shadow-none shadow-transparent":null}`}>Experience</li> 
            </ul>
        </header>
        <main className='pt-10'>
            <motion.div
            key={render} // Clave para forzar re-render y animación en cada cambio
            variants={variants}
            initial="hidden"
            animate="visible"
            className="w-full"
            >
                {render == "Proyects"?<div> <Proyects/> <Skills/></div>:""}
                {render == "About Me"?<><AboutMe/></>:""}
                {render == "Experience"?<><Experience/></>:""}
            </motion.div>
        </main>
    </div>
  )
}

export default Slider