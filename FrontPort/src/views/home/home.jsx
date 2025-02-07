import React from 'react'
import Presentation from '../presentation/Presentation';
import ComponentTimeline from '../../Components/Timeline/Timeline';
import Proyects from '../Proyects/Proyects';
import Skills from '../Skills/Skills';
import Contact from '../contact/Contact';

function Home() {
  
  return (
    <main className='bg-[#0e0f1f] min-h-max'>
      <div className='m-auto max-w-[48rem]'>
        <Presentation></Presentation>
        {/* <ComponentTimeline></ComponentTimeline> */}
        <Proyects></Proyects>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </main>
  )
}

export default Home