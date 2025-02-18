import React from 'react'

function TechComp({title,image}) {
  return (
    <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                <img src={image} alt={`${title} Icon`} className='m-auto h-20' /> 
                <h5>{title}</h5>
              </div>
  )
}

export default TechComp