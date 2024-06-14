import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import ButtonDownload from '../ButtonDownload/ButtonDownload'

function Footer() {
  return (
    <div className='bottom-0 fixed bg-fourth_color p-4 w-full text-center'>
       
        <div className='flex flex-wrap justify-between border-b-2 border-b-comp_fourth_color'>
            <div className='m-4'>
                <h4>Contact me:</h4>
                <p>d.correa.e05@gmail.com</p>
                <a href="">
                    <ButtonDownload />
                </a>
            </div>
            <div className='flex flex-row m-4'>
                <div className='block m-2'>
                    <i>Pages</i>
                    <ul>
                        <li>
                            <Link to={"/"} className='hover:bg-white p-1 rounded-full font-medium font-serif hover:underline'>About Me</Link>
                        </li>
                        <li>
                            <Link to={"/"} className='hover:bg-white p-1 rounded-full font-medium font-serif hover:underline'>Background</Link>
                        </li>
                        <li>
                            <Link to={"/"} className='hover:bg-white p-1 rounded-full font-medium font-serif hover:underline'>Projects</Link>
                        </li>
                    </ul>
                </div>
                {/* List Social media */}
                <div className='block m-2'>
                    <i>social media</i>
                    <ul>
                        <li>
                            <a href="" className='hover:bg-white p-1 rounded-full font-medium font-serif hover:underline'>
                                <FaLinkedin size={20} className='inline' />
                                <i>LinkedIn</i>
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-white p-1 rounded-full font-medium font-serif hover:underline'>
                                <FaInstagram size={20} className='inline' />
                                <i>Instagram</i>
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-white p-1 rounded-full font-medium font-serif hover:underline'>
                                <FaGithub size={20} className='inline' />
                                <i>Github</i>
                            </a>
                        </li>
                    </ul>    
                </div>

            </div>
        </div>
        <b className='text-center'>Copyright Dylan Ezequiel Correa 2024</b>
    </div>
  )
}

export default Footer