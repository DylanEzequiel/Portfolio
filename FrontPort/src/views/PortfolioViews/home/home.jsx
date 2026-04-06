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
      <div className="relative overflow-auto no-scrollbar">
   <div className="top-0 right-0 absolute w-2 h-full pointer-events-none">
        <div
          className="absolute bg-purple-900/60 backdrop-blur-md rounded-full w-full"
          style={{
            height: "80px",
            top: `${scroll * 100}%`,
            transform: "translateY(-50%)",
          }}
        />
      </div>
      <div className='z-50 bg-[#0e0f1f88] shadow-[#FFFFFF20] shadow-xl backdrop-blur-md m-auto p-2 max-w-[50rem] overflow-x-hidden'>
        <Presentation/>
        <Quantity/>
        <Slider/>
        <Proyects/>
        <Skills/>
        <Contact/>

</div>
      </div>
    </main>
  )
}

export default Home