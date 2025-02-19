import React from 'react'
import useStore from '../../../zustandStore'

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
    <header className='top-0 z-50 sticky flex flex-col justify-between space-x-4 bg-#0e0f1ff9 shadow-2xl shadow-black backdrop-blur-sm w-full'>
      <div className=''>
        <button onClick={handleClick} className='m-auto p-1 text-gray-200 text-xl'>{lang}</button>
      </div>
    </header>
)
}

export default Header