import React, { useState } from 'react'
import { FaDatabase } from 'react-icons/fa'
import { MdDeviceHub, MdOutlineStyle } from 'react-icons/md'
import { LuAppWindow,LuBrainCircuit } from "react-icons/lu";


function TechComp({title,iType,color}) {
   const [hover, setHover] = useState(false);

  function ityreRender(iType, color) {
    const style = {
      color,
      opacity: hover ? 1 : 0.7,
      transition: 'opacity 0.2s ease'
    };

  if (iType === "STY") {return <MdOutlineStyle style={style} size={20} />}
  if (iType === "FE") {return <LuAppWindow style={style} size={20}/>}
  if (iType === "DEV") {return <MdDeviceHub style={style} size={20}/>}
  if (iType === "BE") {return <LuBrainCircuit style={style} size={20}/>}
  if (iType === "DB") {return <FaDatabase style={style} size={20}/>}

  }
  return (
    <div  
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
      style={{
        // "#528ce4"
        boxShadow: hover ? `0 0 10px ${color}` : 'none',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease'
      }} className='group flex items-center bg-gray-50/20 rounded-full w-[10rem] h-[3rem] font-semibold text-white text-sm text-center hover:-translate-y-1 duration-200'>
      <div className='bg-slate-200/20 m-2 p-2 rounded-full outline outline-2 outline-transparent group-hover:outline-white/70 duration-200'>
                {ityreRender(iType,color)}
      </div>
                <h5 className='self-center m-auto'>{title}</h5>
    </div>
  )
}

export default TechComp