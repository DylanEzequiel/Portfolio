import React from 'react'
import useStore from '../../../zustandStore'

function Experience() {
  const lang = useStore((state)=>state.language)

  return (
    <div className='mt-10'>
        <h2 className='font-semibold text-white text-xl'>
          {lang === "eng" ? "Experience" : "Experiencia"}
        </h2>
        <aside className='px-4'>
          <div>
            <p className='my-3 font-medium text-gray-300 text-md'>
              🏢 <strong>{lang === "eng" ? "Front-End Developer Intern - Innevo" : "Practicante de Desarrollador Front-End - Innevo"}</strong> (01/2025 – Presente)  
              <span className='block pl-2'> 
                {lang === "eng"
                  ? "• Developing an application using React Native, Vue, Angular, and Firebase."
                  : "• Desarrollando una aplicación utilizando React Native, Vue, Angular y Firebase."}
              </span>
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Gaining hands-on experience in mobile and web development."
                  : "• Adquiriendo experiencia práctica en desarrollo móvil y web."}
              </span>
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Strengthening front-end skills while working in a professional environment."
                  : "• Fortaleciendo habilidades en front-end mientras trabajo en un entorno profesional."}
              </span>                    
            </p>

            <p className='my-3 font-medium text-gray-300 text-md'>
              💇‍♂️ <strong>{lang === "eng" ? "Beauty Salon Application" : "Aplicación para Salón de Belleza"}</strong> (10/2024 – 12/2024)  
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Built a web platform for a beauty salon in Brazil."
                  : "• Construí una plataforma web para un salón de belleza en Brasil."}
              </span>
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Utilized React, TailwindCSS for a dynamic and modern UI."
                  : "• Utilicé React y TailwindCSS para una interfaz de usuario dinámica y moderna."}
              </span>
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Enhanced technical expertise by working in a real-world project environment."
                  : "• Mejoré mis habilidades técnicas trabajando en un entorno de proyecto real."}
              </span>
            </p>

            <p className='my-3 font-medium text-gray-300 text-md'>
              🍦 <strong>{lang === "eng" ? "Ice Cream Shop Application" : "Aplicación para Heladería"}</strong> (07/2024 – 10/2024)  
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Designed and developed an interactive platform using React, TypeScript, TailwindCSS, and Cloudinary."
                  : "• Diseñé y desarrollé una plataforma interactiva utilizando React, TypeScript, TailwindCSS y Cloudinary."}
              </span>
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Managed the development workflow with GitHub and version control."
                  : "• Gestioné el flujo de desarrollo con GitHub y control de versiones."}
              </span>
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Focused on improving user experience through innovative technology solutions."
                  : "• Me enfoqué en mejorar la experiencia del usuario a través de soluciones tecnológicas innovadoras."}
              </span>
            </p>

            <p className='my-3 font-medium text-gray-300 text-md'>
              🏋️ <strong>{lang === "eng" ? "Gym Management Platform" : "Plataforma de Gestión de Gimnasios"}</strong> (04/2024 – 06/2024)  
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Developed an application integrating online payments with Stripe and Mercado Pago."
                  : "• Desarrollé una aplicación integrando pagos en línea con Stripe y Mercado Pago."}
              </span>
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Implemented React PDF to generate documents for better administrative control."
                  : "• Implementé React PDF para generar documentos y mejorar el control administrativo."}
              </span>
              <span className='block pl-2'>
                {lang === "eng"
                  ? "• Technologies used: React, TypeScript, TailwindCSS, Cloudinary."
                  : "• Tecnologías utilizadas: React, TypeScript, TailwindCSS, Cloudinary."}
              </span>
            </p>
          </div>
        </aside>
    </div>
  )
}

export default Experience