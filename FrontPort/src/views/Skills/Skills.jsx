import React from 'react'
import { MdMilitaryTech } from "react-icons/md";


function Skills() {
  return (
    <article className='m-auto'>
        <header>
            <h4 className='py-10 font-semibold text-2xl text-white'>
                <MdMilitaryTech className='inline' size={30}/> Techs
            </h4>
        </header>
        <main className='flex flex-col gap-4 p-4'>
          <div className='bg-slate-500/20 rounded-md w-full duration-200'>
            <h4 className='pt-2 pl-8 font-semibold text-white text-xl'>FrontEnd</h4>

            <aside className='gap-4 grid grid-cols-4 m-auto p-4 grif'>
            
            
              <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                <img src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png" alt="" className='m-auto h-20' /> 
                <h5>HTML</h5>
              </div>
              <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png" alt="" className='m-auto h-20' /> 
                <h5>CSS</h5>
              </div>
              <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" className='m-auto h-20' /> 
                <h5>React</h5>
              </div>
              <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                <img src="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg" alt="" className='m-auto h-20' /> 
                <h5>Next.js</h5>
              </div>
              <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" alt="" className='m-auto h-20' /> 
                <h5>tailwincss</h5>
              </div>
              <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="" className='m-auto h-20' /> 
                <h5>bootstrap</h5>
              </div>
              <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                <img src="https://blog.greggant.com/images/posts/2019-04-25-figma/Figma.png" alt="" className='m-auto h-20' /> 
                <h5>Figma</h5>
              </div>
              
               
            </aside>
          </div>
          <div className='flex justify-between w-full'>
            <div className='bg-slate-500/20 rounded-md w-[48%]'>
              <h4 className='pt-2 pl-8 font-semibold text-white text-xl'>BackEnd</h4>

              <aside className='gap-4 grid grid-cols-3 m-auto p-4 grif'>
              
                <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                  <img src="https://cdn.hackersandslackers.com/2020/05/express.png" alt="" className='m-auto h-16' /> 
                  <h5>Express</h5>
                </div>
                <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                  <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="" className='m-auto h-16' /> 
                  <h5>MongoDB</h5>
                </div>
                <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                  <img src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png" alt="" className='m-auto h-16' /> 
                  <h5>MySQL</h5>
                </div>
              </aside>
            </div>

            <div className='bg-slate-500/20 rounded-md w-[48%]'>
              <h4 className='pt-2 pl-8 font-semibold text-white text-xl'>Languages</h4>

              <aside className='gap-4 grid grid-cols-3 m-auto p-4 grif'>
              
                <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                  <img src="https://media.licdn.com/dms/image/D4D12AQFpMentYRp9WQ/article-cover_image-shrink_600_2000/0/1685558134344?e=2147483647&v=beta&t=wC8RJObS5Ex2crRSTfK2QTWsrw5uJEX9796onE49cuI" alt="" className='m-auto h-16' /> 
                  <h5>Apex</h5>
                </div>
                <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                  <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" className='m-auto h-16' /> 
                  <h5>JavaScript</h5>
                </div>
                <div className='font-semibold text-[#bbb] text-center hover:text-white hover:-translate-y-1 duration-200'>
                  <img src="https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png" alt="" className='m-auto h-16' /> 
                  <h5>TypesCript</h5>
                </div>
              </aside>
            </div>
            

          </div>
        </main>
    </article>
  )
}

export default Skills