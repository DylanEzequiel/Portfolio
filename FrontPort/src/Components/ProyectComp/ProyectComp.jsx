import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";


function ProyectComp({url,title,description,github,vercel,techs}){

  return (
    <article className='group flex gap-4 m-2 p-2 rounded-md w-max'>
            
        <header className='bg-slate-500/30 rounded-md overflow-hidden'>
            <img src={url} alt={`${title} image`} className='w-64 h-48 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 duration-300' />
        </header>
        <main className='flex flex-col justify-between'>
            <div className='max-w-[80%] text-balance'>
                <h4 className='font-semibold text-white text-xl'>{title}</h4>
                <p className='text-gray-300 text-sm'>{description}</p>
            </div>
            
            <div>
                <ul className='flex flex-wrap max-w-[80%] text-center'>
                    {techs.map((element,index) => {
                        return ( <li key={index} className='m-2 px-1 rounded-sm font-semibold text-[#bbb] text-center text-sm hover:text-white duration-200 select-none outline outline-1'>{element}</li> )
                        }
                    )}
                </ul>
            </div>

            <div className='flex'>
                <a href={github?github:""} className='flex justify-center gap-1 bg-indigo-900/40 hover:bg-indigo-900 hover:shadow-[0px_0px_8px_4px_rgba(36,48,137,1)] m-2 px-4 py-1 rounded-md font-semibold text-white duration-150 hover:scale-105'><FaGithub className='self-center' /> GitHub</a>
                {vercel?
                <button className='flex justify-center gap-1 bg-indigo-900/40 hover:bg-indigo-900 hover:shadow-[0px_0px_8px_4px_rgba(36,48,137,1)] m-2 px-4 py-1 rounded-md font-semibold text-white duration-150 hover:scale-105'><BsBoxArrowUpRight  className='self-center' /> Visit </button>
                :null}
            </div>

        </main>
    </article>
  )
}

export default ProyectComp