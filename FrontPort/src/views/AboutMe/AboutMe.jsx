import React from 'react'

function AboutMe() {
  return (
    <div>
        <main className='mt-10'>
            <article className='flex flex-row justify-center'>

                    <img src="https://cdn.picrew.me/shareImg/org/202502/29413_LJbxDQJK.png" alt="" className='self-center hover:shadow-lg hover:shadow-[#5c543c] rounded-md w-64 h-72 duration-500'/>

                <aside className='px-4'>
                    <div>
                        <p className='my-3 font-medium text-gray-300 text-md'>
                        I am a Front-end Developer with experience in React and Next.js, proficient in both JavaScript and TypeScript. My focus is on building dynamic, optimized, and scalable user interfaces. I have strong expertise in styling using Bootstrap, TailwindCSS, and Styled Components, allowing me to create modern and responsive designs.
                        </p>

                        <p className='my-3 font-medium text-gray-300 text-md'>
                        Additionally, I have backend knowledge, working with both relational (SQL) and non-relational (MongoDB) databases. I have experience configuring servers and developing APIs using Express.js.
                        I am passionate about learning new technologies and constantly improving my skills. I enjoy working in collaborative environments, where I can apply my problem-solving abilities and contribute to high-quality projects.
                        </p>

                        <p className='my-3 font-medium text-gray-300 text-md'>
                        🚀 Technical Skills: React, Next.js, JavaScript, TypeScript, Node.js, Express, SQL, MongoDB, Redux, Jest, GitHub, Git Flow.
                        </p>

                        <p className='my-3 font-medium text-gray-300 text-md'>
                        🌍 Languages: Spanish (Native), English (Intermediate/Advanced - technical reading, documentation, and written communication).
                        </p>
                    </div>
                </aside>
            </article>
        </main>
        <article></article>
    </div>
  )
}

export default AboutMe