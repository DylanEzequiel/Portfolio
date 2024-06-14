import React from 'react'
import HandCoding from '../../Components/svg/handcoding/HandCoding'
import Question from '../../Components/svg/question/question'

function AboutMe() {
  return (
    <div className=''>
        <h3 className='m-4 font-bold font-customFont text-3xl'>About me ? 🤔 </h3>
        <div className='flex flex-wrap justify-around'>
            <div className=' w-1/2 font-serif text-lg'>
                <b>Im a student from life</b>
                <p>i like to take all the conflicts that life throws at me and face it 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ducimus voluptates vel fugiat quasi doloribus rerum eveniet sed. Odio, cum? Dolore cupiditate, aliquam harum earum nemo a animi asperiores eos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, reiciendis illum. Commodi nesciunt sed possimus facere? Inventore architecto velit veniam, illo maiores, deleniti quo animi, tempora fugit distinctio voluptatibus eum delectus nihil doloribus cupiditate.
                </p>
            </div>
            <div>
                <Question  />
            </div>
            

        </div>
    </div>
  )
}

export default AboutMe