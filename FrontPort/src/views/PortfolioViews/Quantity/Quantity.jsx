import React from 'react'
import { SiGithubactions } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import { GrOptimize } from "react-icons/gr";
import useStore from '../../../../zustandStore';

function Quantity() {
  const lang = useStore(state=>state.language)

  return (
    <section className="flex md:flex-row flex-col justify-center items-center gap-4 my-24 max-w-[48rem]">
        <div
          className="group flex flex-col justify-around items-center bg-gray-600/20 shadow-md border border-gray-700 rounded-lg w-60 h-44 text-white hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <div className="group-hover:text-blue-500 top-4 font-semibold text-white text-2xl group-hover:scale-110 duration-200">
          <SiGithubactions size={30} />
          </div>
          <div className='text-center'>
            <h3 className="font-semibold text-lg">Github</h3>
            <p className="px-4 py-2 text-gray-400 text-sm text-center">
              {lang=="eng"
              ?"Use of Git and GitHub for repository management, version control, and collaborative workflow management."
              :" Uso de Git y GitHub para el manejo de repositorios, control de versiones y flujos de trabajo colaborativos."}
           
            </p>
          </div>
        </div>
        <div
          className="group flex flex-col justify-around items-center bg-gray-600/20 shadow-md border border-gray-700 rounded-lg w-60 h-44 text-white hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <div className="group-hover:text-blue-500 top-4 font-semibold text-white text-2xl group-hover:scale-110 duration-200">
          <GrDeploy size={30} />
          </div>
          <div className='text-center'>
            <h3 className="font-semibold text-lg">Deployments</h3>
            <p className="px-4 py-2 text-gray-400 text-sm text-center">
            {lang=="eng"
            ?"Efficient deployment on platforms such as Vercel, Netlify, and DigitalOcean, ensuring performance and stability."
            :"Despliegue eficiente en plataformas como Vercel, Netlify y DigitalOcean, asegurando rendimiento y estabilidad."}
            
            </p>
          </div>
        </div>
        <div
          className="group flex flex-col justify-around items-center bg-gray-600/20 shadow-md border border-gray-700 rounded-lg w-60 h-44 text-white hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <div className="group-hover:text-blue-500 top-4 font-semibold text-white text-2xl group-hover:scale-110 duration-200">
          <GrOptimize size={30} />
          </div>
          <div className='text-center'>
            <h3 className="font-semibold text-lg">SEO Optimization</h3>
            <p className="px-4 py-2 text-gray-400 text-sm text-center">
            {lang=="eng"
            ?"Application of best technical SEO practices to improve performance and visibility in search engines."
            :"Aplicación de buenas prácticas de SEO técnico para mejorar el rendimiento y visibilidad en motores de búsqueda."}
            
            </p>
          </div>
        </div>
       
    </section>
  )
}

export default Quantity