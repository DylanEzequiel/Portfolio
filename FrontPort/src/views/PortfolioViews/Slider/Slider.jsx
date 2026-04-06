import { useState } from 'react';
import { motion } from 'framer-motion';
import AboutMe from '../AboutMe/AboutMe';
import Experience from '../Experience/Experience';
import useStore from '../../../../zustandStore';
import Education from '../Education/Education';

function Slider() {
    const [render, setRender] = useState('Experience');
    const lang = useStore((state) => state.language);

    const variants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const styleSection = `font-semibold hover:cursor-pointer  text-white  border-b-2  duration-200 shadow-2xl shadow-blue-500 border-b-blue-500  w-1/3 `;
    function conditional(type) {
        return `${render !== type ? 'hover:border-b-blue-400 border-b-gray-500 shadow-none shadow-transparent' : null}`;
    }
    return (
        <div className='mt-20'>
            <header className='md:m-auto'>
                <ul className='flex flex-row justify-between shadow-blue-300/20 shadow-xl text-md md:text-xl text-center select-none'>
                    <li
                        onClick={() => setRender('Experience')}
                        className={[styleSection, conditional('Experience')]}>
                        {lang === 'eng' ? 'Experience' : 'Experiencia'}
                    </li>
                    <li
                        onClick={() => setRender('Education')}
                        className={[styleSection, conditional('Education')]}>
                        {lang === 'eng' ? 'Education' : 'Educación'}
                    </li>
                    <li
                        onClick={() => setRender('About Me')}
                        className={[styleSection, conditional('About Me')]}>
                        {lang === 'eng' ? 'About Me' : 'Sobre mí'}
                    </li>
                </ul>
            </header>
            <main className=''>
                <motion.div
                    key={render}
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    className='w-full min-h-[40rem] md:max-h-[40rem] md:overflow-y-hidden'>
                    {/* {render === "Proyects"?<div> <Proyects/> </div>:""} */}
                    {render === 'About Me' && <AboutMe />}
                    {render === 'Experience' && <Experience />}
                    {render === 'Education' && <Education />}
                </motion.div>
            </main>
        </div>
    );
}

export default Slider;
