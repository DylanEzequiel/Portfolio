import Presentation from '../presentation/Presentation';
import Skills from '../Skills/Skills';
import Slider from '../Slider/Slider';
import Quantity from '../Quantity/Quantity';
import Contact from "../contact/Contact"


function Home() {
  



  return (
    <main className='bg-[#0e0f1f] max-w-full min-h-max'>
      <div className='shadow-[#FFFFFF20] shadow-xl m-auto p-2 max-w-[50rem] overflow-x-hidden'>
        <Presentation></Presentation>
        <Quantity></Quantity>
        <Slider></Slider>
        {/* <Proyects></Proyects> */}
        <Skills></Skills>
        <Contact/>
      </div>
    </main>
  )
}

export default Home