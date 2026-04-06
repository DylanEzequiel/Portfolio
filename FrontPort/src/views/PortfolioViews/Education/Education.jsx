import useStore from '../../../../zustandStore';
import educationData from './educationData';

function Education() {
    const lang = useStore((state) => state.language);

    function Item({ value }) {
        return <li className='text-md'>{value}</li>;
    }

    return (
        <div className='mt-10'>
            <h2 className='pl-4 font-semibold text-white text-2xl'>
                {lang === 'eng' ? 'Education' : 'Educacion'}
            </h2>
            <aside className='gap-4 px-4'>
                {educationData.map((exp) => {
                    return (
                        <p className='my-3 font-medium text-gray-300 text-md'>
                            <strong className='text-lg'>
                                {lang === 'eng' ? exp.titleENG : exp.titleES}
                            </strong>
                            <ul className='pl-10 list-disc'>
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

export default Education;
