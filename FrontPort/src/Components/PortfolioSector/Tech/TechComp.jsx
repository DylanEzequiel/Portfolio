import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { MdDeviceHub, MdOutlineStyle } from 'react-icons/md'
import { LuAppWindow,LuBrainCircuit } from "react-icons/lu";
function TechComp({title,iType,color}) {
  function ityreRender(iType,color){
    const style = { color };

  if (iType === "STY") return <MdOutlineStyle style={style} size={35} />
  if (iType === "FE") return <LuAppWindow style={style} size={35}/>
  if (iType === "DEV") return <MdDeviceHub style={style} size={35}/>
  if (iType === "BE") return <LuBrainCircuit style={style} size={35}/>
  if (iType === "DB") return <FaDatabase style={style} size={35}/>

  }
  return (
    <div className='flex items-center bg-gray-50/20 rounded-md w-[10rem] h-[3rem] font-semibold text-white text-sm text-center hover:-translate-y-1 duration-200'>
      <div className='p-2'>
                {ityreRender(iType,color)}
      </div>
                <h5 className='self-center m-auto'>{title}</h5>
    </div>
  )
}

export default TechComp