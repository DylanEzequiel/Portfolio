import { MdMilitaryTech } from "react-icons/md";
import TechComp from '../../../Components/PortfolioSector/Tech/TechComp';
import skillsData from './skillsData'

function Skills() {
  return (
    <article className='m-auto'>
        <header>
            <h4 className='py-10 font-semibold text-white text-2xl'>
                <MdMilitaryTech className='inline' size={30}/> Skills & Technologies
            </h4>
        </header>
        <main className='flex flex-col gap-4 p-4'>
            {skillsData.map(cat=> <div className='rounded-md w-full duration-200'>
  <h4 className='pt-2 pl-8 font-semibold text-white text-xl'>{cat.title}</h4>

  <aside className='flex flex-row flex-wrap gap-4 m-auto p-4'>
    {cat.items.map(itm=><TechComp  title={itm.title} iType={itm.type} color={`${itm.color}`}/>)}
  </aside>
</div>)}

        </main>
    </article>
  )
}

export default Skills
{/* <div className='rounded-md w-full duration-200'>
  <h4 className='pt-2 pl-8 font-semibold text-white text-xl'>FrontEnd</h4>

  <aside className='flex flex-row flex-wrap gap-4 m-auto p-4'>
    <TechComp  title="HTML" iType={"FE"} color={"[#ccc]"}></TechComp>
    <TechComp  title="CSS" iType={"FE"} color={"[#ccc]"}></TechComp>
    <TechComp  title="React" iType={"FE"} color={"[#ccc]"}></TechComp>
    <TechComp  title="Next.Js" iType={"FE"} color={"[#ccc]"}></TechComp>
    <TechComp  title="tailwincss" iType={"FE"} color={"[#ccc]"}></TechComp>
    <TechComp title="bootstrap" iType={"FE"} color={"[#ccc]"}></TechComp>
    <TechComp title="Figma" iType={"FE"} color={"[#ccc]"}></TechComp>
    <TechComp  title="Angular" iType={"FE"} color={"[#ccc]"}></TechComp>
    <TechComp  title="React Native" iType={"FE"} color={"[#ccc]"}></TechComp>
    
     
  </aside>
</div>
  <div className='rounded-md'>
    <h4 className='pt-2 pl-8 font-semibold text-white text-xl'>BackEnd</h4>

    <aside className='flex flex-row flex-wrap gap-4 m-auto p-4'>
       <TechComp  title="Express" iType={"FE"} color={"[#ccc]"}></TechComp>
       <TechComp  title="MongoDb" iType={"FE"} color={"[#ccc]"}></TechComp>
       <TechComp  title="MySQL" iType={"FE"} color={"[#ccc]"}></TechComp>
       <TechComp  title="TypeOrm" iType={"FE"} color={"[#ccc]"}></TechComp>
       <TechComp  title="Nest.Js" iType={"FE"} color={"[#ccc]"}></TechComp>
    </aside>
  </div>

  <div className='rounded-md'>
    <h4 className='pt-2 pl-8 font-semibold text-white text-xl'>Core Integrations</h4>

    <aside className='flex flex-row flex-wrap gap-4 m-auto p-4'>
       <TechComp  title="Merc Pago API" iType={"FE"} color={"[#ccc]"}></TechComp>
       <TechComp  title="Stripe" iType={"FE"} color={"[#ccc]"}></TechComp>
       <TechComp  title="Transbank SDK" iType={"FE"} color={"[#ccc]"}></TechComp>
    </aside>
  </div> */}