import React from 'react'

function SmallTechComp({title,image}) {
  return (
    <div className='font-semibold text-[#bbb] hover:text-white text-center hover:-translate-y-1 duration-200'>
                  <img src={image} alt={`${title} Icon`} className='m-auto h-14' /> 
                  <h5>{title}</h5>
                </div>
  )
}

export default SmallTechComp