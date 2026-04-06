import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import useStore from '../../../../../zustandStore';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';

function ModalDetail({
    modal,
    setModal,
    data: { url, title, descriptionEsp, descriptionEng, github, vercel, techs },
}) {
    const lang = useStore((state) => state.language);
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [modal]);

    useEffect(() => {
        function handleEsc(e) {
            if (e.key === 'Escape') {
                setModal(false);
            }
        }

        if (modal) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [modal]);

    return createPortal(
        <AnimatePresence>
            {modal && (
                <div className='z-50 fixed inset-0 flex justify-center items-center px-4'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setModal(false)}
                        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
                    />

                    <motion.div
                        initial={{ y: 60, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -60, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className='z-10 relative bg-[#1b1b1bef] shadow-xl rounded-xl w-full max-w-2xl overflow-hidden'>
                        <h2 className='p-4 font-semibold text-white text-2xl'>{title}</h2>
                        {url && (
                            <img
                                src={url}
                                alt={title}
                                className='p-4 rounded-md w-full h-[25rem]'
                            />
                        )}

                        <div className='flex flex-col gap-4 p-5 font-semibold text-white'>
                            <p className='text-gray-300 text-md'>
                                {lang === 'eng' ? descriptionEng : descriptionEsp}
                            </p>

                            <ul className='flex flex-wrap gap-2'>
                                {techs?.map((tech) => (
                                    <li
                                        key={tech}
                                        className='shadow-md shadow-transparent hover:shadow-white/20 px-2 py-1 border border-white/20 rounded-md text-gray-300 hover:text-white text-xs transition duration-200'>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
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
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body,
    );
}

export default ModalDetail;
