import React from 'react'
import Contact from '../../views/contact/Contact'

function Footer() {
  return (
    

<footer className="shadow">
    <div >
        <Contact></Contact>
    </div>
    <div className="md:flex md:justify-between md:items-center bg-gray-800 mx-auto p-4 w-full max-w-screen-xl">
      <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-center">
        text of info
    </span>
    <ul className="flex flex-wrap items-center mt-3 sm:mt-0 font-medium text-gray-500 dark:text-gray-400 text-sm">
        <li>
            <a href="#" className="me-4 md:me-6 hover:underline">About</a>
        </li>
        <li>
            <a href="#" className="me-4 md:me-6 hover:underline">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="me-4 md:me-6 hover:underline">Licensing</a>
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