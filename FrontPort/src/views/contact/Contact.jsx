import React from 'react'
import { MdPermPhoneMsg } from "react-icons/md";


function Contact() {
  return (
    <article className='m-auto my-10'>
      <header>
         <h3 className="py-10 font-semibold text-2xl text-white"><MdPermPhoneMsg className='inline' size={30}></MdPermPhoneMsg> Contact</h3>
      </header>
         <div className='flex flex-row gap-4 bg-slate-500/20 mx-4 p-4 rounded-md h-max duration-200 overflow-hidden'>
            <main className='h-96'>
              <div className=''>
                <h5 className="font-semibold text-lg text-white">Get In Touch</h5>
              </div>
            </main>
         </div>
         
    </article>
  )
}

export default Contact