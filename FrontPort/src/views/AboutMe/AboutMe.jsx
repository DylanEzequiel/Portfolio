import React from 'react'
import useStore from '../../../zustandStore'

function AboutMe() {
  const lang = useStore((state)=>state.language)

  return (
    <div>
        <main className='mt-10'>
            <article className='flex md:flex-row flex-col justify-center'>

                    {/* <img src="https://cdn.picrew.me/shareImg/org/202502/29413_LJbxDQJK.png" alt="Dylan Profile" className='self-center hover:shadow-lg hover:shadow-[#5c543c] rounded-md w-64 h-72 duration-500'/> */}

                <aside className='px-4'>
                    <div>
                        <p className='my-3 font-medium text-gray-300 text-md'>
                        {lang === "eng"
                            ? "I am a Front-end Developer with experience in React and Next.js, proficient in both JavaScript and TypeScript. My focus is on building dynamic, optimized, and scalable user interfaces. I have strong expertise in styling using Bootstrap, TailwindCSS, and Styled Components, allowing me to create modern and responsive designs."
                            : "Soy un desarrollador Front-end con experiencia en React y Next.js, competente tanto en JavaScript como en TypeScript. Mi enfoque está en construir interfaces de usuario dinámicas, optimizadas y escalables. Tengo una gran experiencia en el estilado utilizando Bootstrap, TailwindCSS y Styled Components, lo que me permite crear diseños modernos y responsivos."}
                        </p>

                        <p className='my-3 font-medium text-gray-300 text-md'>
                        {lang === "eng"
                            ? "Additionally, I have backend knowledge, working with both relational (SQL) and non-relational (MongoDB) databases. I have experience configuring servers and developing APIs using Express.js. I am passionate about learning new technologies and constantly improving my skills. I enjoy working in collaborative environments, where I can apply my problem-solving abilities and contribute to high-quality projects."
                            : "Adicionalmente, tengo conocimientos en backend, trabajando con bases de datos tanto relacionales (SQL) como no relacionales (MongoDB). Tengo experiencia configurando servidores y desarrollando APIs utilizando Express.js. Me apasiona aprender nuevas tecnologías y mejorar constantemente mis habilidades. Disfruto trabajar en entornos colaborativos, donde puedo aplicar mis habilidades para resolver problemas y contribuir a proyectos de alta calidad."}
                        </p>

                        <p className='my-3 font-medium text-gray-300 text-md'>
                        {lang === "eng"
                            ? "🚀 Technical Skills: React, Next.js, JavaScript, TypeScript, Node.js, Express, SQL, MongoDB, Redux, Jest, GitHub, Git Flow."
                            : "🚀 Habilidades Técnicas: React, Next.js, JavaScript, TypeScript, Node.js, Express, SQL, MongoDB, Redux, Jest, GitHub, Git Flow."}
                        </p>

                        <p className='my-3 font-medium text-gray-300 text-md'>
                        {lang === "eng"
                            ? "🌍 Languages: Spanish (Native), English (Intermediate/Advanced - technical reading, documentation, and written communication)."
                            : "🌍 Idiomas: Español (Nativo), Inglés (Intermedio/Avanzado - lectura técnica, documentación y comunicación escrita)."}
                        </p>
                    </div>
                </aside>
            </article>
        </main>
        <article></article>
    </div>
  )
}

export default AboutMe