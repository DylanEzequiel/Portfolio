import React from 'react'
import { SiGithubactions } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import { GrOptimize } from "react-icons/gr";

function Quantity() {
  return (
    <section className="flex justify-center gap-6 my-24">
        <div
          className="group relative flex flex-col justify-around items-center bg-gray-600/20 shadow-md border border-gray-700 rounded-lg w-60 h-44 text-white hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <div className="group-hover:text-blue-500 top-4 font-semibold text-white text-2xl group-hover:scale-110 duration-200">
          <SiGithubactions size={30} />
          </div>
          <div className='text-center'>
            <h3 className="font-semibold text-lg">Github</h3>
            <p className="px-4 py-2 text-gray-400 text-sm text-center">
            Uso de Git y GitHub para el manejo de repositorios, control de versiones y flujos de trabajo colaborativos.
            </p>
          </div>
        </div>
        <div
          className="group relative flex flex-col justify-around items-center bg-gray-600/20 shadow-md border border-gray-700 rounded-lg w-60 h-44 text-white hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <div className="group-hover:text-blue-500 top-4 font-semibold text-white text-2xl group-hover:scale-110 duration-200">
          <GrDeploy size={30} />
          </div>
          <div className='text-center'>
            <h3 className="font-semibold text-lg">Deployments</h3>
            <p className="px-4 py-2 text-gray-400 text-sm text-center">
            Despliegue eficiente en plataformas como Vercel, Netlify y DigitalOcean, asegurando rendimiento y estabilidad.
            </p>
          </div>
        </div>
        <div
          className="group relative flex flex-col justify-around items-center bg-gray-600/20 shadow-md border border-gray-700 rounded-lg w-60 h-44 text-white hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <div className="group-hover:text-blue-500 top-4 font-semibold text-white text-2xl group-hover:scale-110 duration-200">
          <GrOptimize size={30} />
          </div>
          <div className='text-center'>
            <h3 className="font-semibold text-lg">SEO Optimization</h3>
            <p className="px-4 py-2 text-gray-400 text-sm text-center">
            Aplicación de buenas prácticas de SEO técnico para mejorar el rendimiento y visibilidad en motores de búsqueda.
            </p>
          </div>
        </div>
       
    </section>
  )
}

export default Quantity