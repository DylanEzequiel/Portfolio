import React, { useState } from 'react'
import { motion } from "framer-motion";
import Proyects from '../Proyects/Proyects'
import Skills from '../Skills/Skills'
import AboutMe from '../AboutMe/AboutMe'
import Experience from '../Experience/Experience'
import useStore from '../../../zustandStore';

function Slider() {
    const [render,setRender]=useState("Proyects")
    const lang = useStore((state)=>state.language)

    const variants = {
        hidden: { opacity: 0, x: 50 }, // Comienza fuera del viewport (derecha)
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Se desliza hacia dentro
      };
  return (
    <div className='mt-20'>
        <header className='md:m-auto'>
            <ul className='flex flex-row justify-between shadow-blue-300/20 shadow-xl text-md md:text-xl text-center select-none'>
                <li  onClick={()=>setRender("Proyects")} className={`font-semibold hover:cursor-pointer  text-white  border-b-2  duration-200 shadow-2xl shadow-blue-500 border-b-blue-500  w-1/3 ${render != "Proyects"?"hover:border-b-blue-400 border-b-gray-500 shadow-none shadow-transparent":null}`}>
                    {lang=="eng"?"Proyects":"Proyectos"}
                </li>
                
                <li onClick={()=>setRender("About Me")} className={`font-semibold hover:cursor-pointer  text-white  border-b-2  duration-200 shadow-2xl shadow-blue-500 border-b-blue-500  w-1/3 ${render != "About Me"?"hover:border-b-blue-400 border-b-gray-500 shadow-none shadow-transparent":null}`}>
                    {lang=="eng"?"About Me":"Sobre mí"}
                </li>

                <li  onClick={()=>setRender("Experience")} className={`font-semibold text-white hover:cursor-pointer  border-b-2  duration-200 shadow-2xl shadow-blue-500 border-b-blue-500  w-1/3 ${render != "Experience"?"hover:border-b-blue-400 border-b-gray-500 shadow-none shadow-transparent":null}`}>
                    {lang=="eng"?"Experience":"Experiencia"} 
                </li> 
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
                {render == "Proyects"?<div> <Proyects/> </div>:""}
                {render == "About Me"?<><AboutMe/></>:""}
                {render == "Experience"?<><Experience/></>:""}
            </motion.div>
        </main>
    </div>
  )
}

export default Slider