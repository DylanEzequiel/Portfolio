import Presentation from '../presentation/Presentation';
import Skills from '../Skills/Skills';
import Slider from '../Slider/Slider';
import Quantity from '../Quantity/Quantity';
import Contact from "../contact/Contact"


function Home() {
  



  return (
    <main className='bg-[#0e0f1f] max-w-full min-h-max'>
      <div className='m-auto max-w-[48rem]'>
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