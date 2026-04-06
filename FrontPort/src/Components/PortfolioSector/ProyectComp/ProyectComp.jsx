import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import useStore from '../../../../zustandStore';
import { useState } from 'react';
import ModalDetail from './modalDetail/ModalDetail';

function ProyectComp({ url, title, descriptionEsp, descriptionEng, github, vercel, techs }) {
    const lang = useStore((state) => state.language);
    const [render, SetRender] = useState(false);

    return (
        <article className='group flex flex-col items-center md:gap-4 lg:m-2 my-10 p-2 rounded-md w-[18rem]'>
            <header
                onClick={() => SetRender(true)}
                className='group relative bg-slate-500/30 rounded-md w-full md:w-[18rem] h-auto md:h-48 overflow-hidden cursor-pointer'>
                <img
                    src={url}
                    alt={`${title} image`}
                    className='md:opacity-70 group-hover:opacity-100 w-full md:w-[24rem] h-auto md:h-56 md:group-hover:translate-y-2 md:translate-y-5 duration-300'
                />
            </header>

            <main className='flex flex-col justify-between gap-2 w-full'>
                <div className=''>
                    <h4 className='font-semibold text-white text-xl'>{title}</h4>
                </div>

                <div className='flex self-start gap-2 py-2'>
                    {github ? (
                        <a
                            href={github}
                            className='flex justify-center gap-1 bg-indigo-900/40 hover:bg-indigo-900/80 hover:shadow-[0px_0px_8px_4px_#2430897a] px-4 py-1 rounded-md font-semibold text-white hover:scale-105 duration-150'>
                            <FaGithub className='self-center' /> GitHub
                        </a>
                    ) : null}
                    {vercel ? (
                        <a
                            href={vercel}
                            className='flex justify-center gap-1 bg-indigo-900/40 hover:bg-indigo-900/80 hover:shadow-[0px_0px_8px_4px_#2430897a] px-4 py-1 rounded-md font-semibold text-white hover:scale-105 duration-150'>
                            <BsBoxArrowUpRight className='self-center' />
                            {lang === 'eng' ? 'Visit' : 'Visitar'}
                        </a>
                    ) : null}
                </div>
            </main>
            <ModalDetail
                modal={render}
                setModal={SetRender}
                data={{
                    url: url,
                    title: title,
                    descriptionEsp: descriptionEsp,
                    descriptionEng: descriptionEng,
                    github: github,
                    vercel: vercel,
                    techs: techs,
                }}
            />
        </article>
    );
}

export default ProyectComp;
