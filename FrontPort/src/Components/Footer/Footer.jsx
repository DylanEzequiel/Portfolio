import React from 'react'

function Footer() {
  return (
    

<footer className="bg-gray-800 shadow">
    <div className="md:flex md:justify-between md:items-center mx-auto p-4 w-full max-w-screen-xl">
      <span className="text-gray-500 text-sm sm:text-center dark:text-gray-400">
        text of info
    </span>
    <ul className="flex flex-wrap items-center mt-3 sm:mt-0 font-medium text-gray-500 text-sm dark:text-gray-400">
        <li>
            <a href="#" className="hover:underline md:me-6 me-4">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline md:me-6 me-4">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline md:me-6 me-4">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer