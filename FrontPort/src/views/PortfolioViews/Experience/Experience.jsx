import useStore from '../../../../zustandStore';
import ExperienceData from './ExperienceData';

function Experience() {
    const lang = useStore((state) => state.language);

    function Item({ value }) {
        return <li className='py-1 max-w-[40rem] text-md'>{value}</li>;
    }

    return (
        <div className='mt-10'>
            <h2 className='pl-4 font-semibold text-white text-2xl'>
                {lang === 'eng' ? 'Experience' : 'Experiencia'}
            </h2>
            <aside className='gap-4 px-4'>
                {ExperienceData.map((exp) => {
                    return (
                        <p className='my-3 font-medium text-gray-300 text-md'>
                            <strong className='text-xl'>
                                {lang === 'eng' ? exp.titleENG : exp.titleES}
                            </strong>
                            <ul className='pt-2 pl-10 list-disc'>
                                {lang === 'eng'
                                    ? exp.itemsENG.map((itm) => {
                                          return <Item key={itm} value={itm} />;
                                      })
                                    : exp.itemsES.map((itm) => {
                                          return <Item key={itm} value={itm} />;
                                      })}
                            </ul>
                        </p>
                    );
                })}
            </aside>
        </div>
    );
}

export default Experience;
