import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import useStore from '../../../zustandStore';


function ProyectComp({url,title,descriptionEsp,descriptionEng,github,vercel,techs}){
  const lang = useStore((state)=>state.language)

  return (
    <article className='group flex md:flex-row flex-col md:gap-4 lg:m-2 my-10 p-2 rounded-md'>
            
        <header className='bg-slate-500/30 rounded-md w-full md:w-[24rem] h-auto md:h-48 overflow-hidden'>
            <img src={url} alt={`${title} image`} className='md:opacity-70 group-hover:opacity-100 w-full md:w-[24rem] h-auto md:h-48 md:translate-x-5 md:translate-y-5 md:group-hover:translate-x-2 md:group-hover:translate-y-2 duration-300' />
        </header>

        <main className='flex flex-col justify-between gap-2 p-2 w-full'>
            <div className='text-balance'>
                <h4 className='font-semibold text-white text-xl'>{title}</h4>
                <p className='text-gray-300 text-sm'>{lang=="eng"?descriptionEng:descriptionEsp}</p>
            </div>
            <div>
                <ul className='flex flex-row flex-wrap gap-2 w-full text-center'>
                    {techs.map((element,index) => {
                        return ( <li key={index} className='md:m-2 px-1 rounded-sm outline outline-1 font-semibold text-[#bbb] hover:text-white text-sm text-center duration-200 select-none'>{element}</li> )
                        }
                    )}
                </ul>
            </div>

            <div className='flex'>
                <a href={github?github:""} className='flex justify-center gap-1 bg-indigo-900/40 hover:bg-indigo-900 hover:shadow-[0px_0px_8px_4px_rgba(36,48,137,1)] m-2 px-4 py-1 rounded-md font-semibold text-white hover:scale-105 duration-150'><FaGithub className='self-center' /> GitHub</a>
                {vercel?
                <button className='flex justify-center gap-1 bg-indigo-900/40 hover:bg-indigo-900 hover:shadow-[0px_0px_8px_4px_rgba(36,48,137,1)] m-2 px-4 py-1 rounded-md font-semibold text-white hover:scale-105 duration-150'><BsBoxArrowUpRight  className='self-center' /> {lang=="eng"?"Visit":"Ir"} </button>
                :null}
            </div>

        </main>
    </article>
  )
}

export default ProyectComp