import { useEffect, useState } from 'react';
import ProyectComp from '../../../Components/PortfolioSector/ProyectComp/ProyectComp';
import projects from './ProyectsData';
import { BiWindows } from 'react-icons/bi';

function Proyects() {
    const [itemsToRender, setItemsToRender] = useState([projects]);
    const [step, setStep] = useState(0);

    function getSplicedPairs(projects, itemsPerPage = 4) {
        const length = projects.length;
        const steps = Math.ceil(length / itemsPerPage);
        const pairSteps = [];
        for (let i = 0; i < steps; i++) {
            pairSteps.push([i * itemsPerPage, (i + 1) * itemsPerPage]);
        }
        const itemsToRender = pairSteps.map((pair) => projects.slice(pair[0], pair[1]));
        return itemsToRender;
    }
    useEffect(() => {
        const arrangedItems = getSplicedPairs(projects, 4);
        setItemsToRender(arrangedItems);
    }, []);

    return (
        <article className='my-10 w-full min-h-[48rem] md:max-h-[48rem]'>
            <header>
                <h4 className='py-10 font-semibold text-white text-2xl'>
                    <BiWindows className='inline' size={30} /> Proyects
                </h4>
            </header>
            <main className='place-items-center gap-4 grid grid-cols-1 md:grid-cols-2 m-auto w-full min-h-[40rem] md:max-h-[40rem]'>
                {itemsToRender[step].map((project, index) => (
                    <ProyectComp
                        key={index}
                        url={project.url}
                        title={project.title}
                        techs={project.techs}
                        descriptionEsp={project.descriptionEsp}
                        descriptionEng={project.descriptionEng}
                        github={project.github}
                        vercel={project.vercel}
                    />
                ))}
            </main>
            <div className='flex flex-row justify-center gap-1 p-2'>
                {itemsToRender?.map((a, i) => (
                    <p
                        key={a}
                        onClick={() => {
                            setStep(i);
                            window.scroll(0, 1600);
                        }}
                        className={`duration-200 cursor-pointer  p-1 px-2 rounded-md font-bold text-white ${step === i ? 'bg-gray-500/40' : 'bg-gray-500/20'}`}>
                        {i}
                    </p>
                ))}
            </div>
        </article>
    );
}

export default Proyects;
