import useStore from '../../../../zustandStore';
import { LuCode, LuCodeXml } from 'react-icons/lu';
import { FaCoffee, FaMusic, FaRegWindowMaximize } from 'react-icons/fa';

function AboutMe() {
    const lang = useStore((state) => state.language);

    return (
        <div>
            <main className='mt-10'>
                <article className='flex flex-col justify-center'>
                    <aside className='px-4'>
                        <div>
                            <p className='my-3 font-medium text-gray-300 text-md'>
                                {lang === 'eng'
                                    ? 'Full Stack Developer specialized in building scalable and high-performance web applications using React, Next.js, and TypeScript. Focused on delivering clean, maintainable, and production-ready interfaces with strong attention to UX, performance, and architecture.'
                                    : 'Desarrollador Full Stack especializado en la creación de aplicaciones web escalables y de alto rendimiento utilizando React, Next.js y TypeScript. Enfocado en construir interfaces limpias, mantenibles y listas para producción, con fuerte atención en UX, performance y arquitectura.'}
                            </p>

                            <p className='my-3 font-medium text-gray-300 text-md'>
                                {lang === 'eng'
                                    ? 'Experience developing complete solutions, including backend services with Node.js and NestJS, database design (SQL and MongoDB), and integration of external services such as payment gateways, email systems, and third-party APIs.'
                                    : 'Experiencia desarrollando soluciones completas, incluyendo servicios backend con Node.js y NestJS, diseño de bases de datos (SQL y MongoDB) e integración de servicios externos como pasarelas de pago, sistemas de email y APIs de terceros.'}
                            </p>

                            <p className='my-3 font-medium text-gray-300 text-md'>
                                {lang === 'eng'
                                    ? 'Worked on real-world products such as e-commerce platforms, SaaS tools, and event-based applications, optimizing performance, improving user flows, and delivering measurable business impact.'
                                    : 'Experiencia en productos reales como e-commerce, herramientas SaaS y aplicaciones orientadas a eventos, optimizando performance, mejorando flujos de usuario y generando impacto directo en negocio.'}
                            </p>

                            <p className='my-3 font-medium text-gray-300 text-md'>
                                {lang === 'eng'
                                    ? '🚀 Tech Stack: React, Next.js, TypeScript, React Native, Node.js, NestJS, SQL, MongoDB, TailwindCSS, Ant Design, Docker.'
                                    : '🚀 Stack: React, Next.js, TypeScript, React Native, Node.js, NestJS, SQL, MongoDB, TailwindCSS, Ant Design, Docker.'}
                            </p>

                            <p className='my-3 font-medium text-gray-300 text-md'>
                                {lang === 'eng'
                                    ? '🌍 Languages: Spanish (Native), English (C1 – professional working proficiency).'
                                    : '🌍 Idiomas: Español (Nativo), Inglés (C1 – nivel profesional).'}
                            </p>
                        </div>
                    </aside>
                    <div className='flex flex-row self-center gap-8 md:gap-20 opacity-80 pt-20 rounded-md w-auto h-[16rem] text-gray-400/50 text-xl md:text-6xl'>
                        <LuCode className='text-gray-400/50 hover:text-white duration-500' />
                        <FaRegWindowMaximize className='text-gray-400/50 hover:text-white duration-500' />
                        <FaCoffee className='text-gray-400/50 hover:text-white duration-500' />
                        <FaMusic className='text-gray-400/50 hover:text-white duration-500' />
                        <LuCodeXml className='text-gray-400/50 hover:text-white duration-500' />
                    </div>
                </article>
            </main>
        </div>
    );
}

export default AboutMe;
