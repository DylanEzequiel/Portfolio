import React from 'react'
import useStore from '../../../zustandStore'
import { BsTranslate } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";

function Header() {
    const lang = useStore((state)=>state.language)
  const switchFunction = useStore((state)=>state.switchLanguage)

  function handleClick(){
    if(lang=="eng"){
      switchFunction("esp")
    }
    else{
      switchFunction("eng")
    }
  }

  return (
    <header className='top-0 z-50 sticky flex flex-row justify-between space-x-4 bg-#0e0f1ff9 shadow-2xl shadow-black backdrop-blur-sm w-full'>
      <button className='flex flex-row justify-center gap-1 p-2 font-semibold text-gray-200 text-center'  onClick={handleClick}>
        <BsTranslate className='self-center'/>
        <p className=''>{lang}</p>
      </button>
      {/* <h3 className='justify-center p-2 font-semibold text-gray-200 text-2xl text-center'>
        <span className='text-white'> {"<Dylan"} </span> 
        <span className='[text-shadow:_2px_5px_12px_rgba(255,255,255,0.47)] text-blue-500'>{"Codes/>"}</span>
      </h3> */}
      {/* <button className='flex flex-row justify-center p-2 font-semibold text-gray-200 text-2xl text-center'  >
        <IoSunnySharp className='self-center'/>
       
      </button> */}
    </header>
)
}

export default Header