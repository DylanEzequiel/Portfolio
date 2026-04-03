import Presentation from '../presentation/Presentation';
import Skills from '../Skills/Skills';
import Slider from '../Slider/Slider';
import Quantity from '../Quantity/Quantity';
import Contact from "../contact/Contact"
import BgParallax from '../../../Components/PortfolioSector/background-parallax';
import Proyects from '../Proyects/Proyects';


function Home() {
  


// 
  return (
    <main className='relative w-full min-h-screen'>
      {/* <div className='z-0 relative h-full'> */}
        <div className="absolute inset-0">
					<BgParallax/>
				</div>
      {/* </div> */}
      <div className='z-50 bg-[#0e0f1f88] shadow-[#FFFFFF20] shadow-xl backdrop-blur-md m-auto p-2 max-w-[50rem] overflow-x-hidden'>
        <Presentation></Presentation>
        <Quantity></Quantity>
        <Slider></Slider>
        <Proyects></Proyects>
        <Skills></Skills>
        <Contact/>
      </div>
    </main>
  )
}

export default Home