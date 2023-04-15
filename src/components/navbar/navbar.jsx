import React, { useState } from 'react'
import ButtonPrimary from '../button/button'
import { Link } from 'react-router-dom';

function    Navbar() {
    const [open, setOpen] = useState(false);
    const toggleNav = () => setOpen(!open);
    console.log(open);
  return (
    <div className='navBar w-full py-4 md:py-8  sticky z-50 '>
        <nav class="navBar border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <a href="#" class="flex items-center text-[#e0b0ff] self-center text-2xl font-semibold whitespace-nowrap ">
                        eve
                        <span className='text-black' >WORKSHOP</span>
                    </a>
                </Link>
                <div class="flex md:order-2">
                    
                    {/* <button type="button" class="text-[#e0b0ff] bg-[#e0b0ff] hover:bg-[#d08ffb] focus:ring-4 focus:outline-none focus:ring-[#d08ffb] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#e0b0ff] dark:hover:bg-[#d08ffb]  dark:focus:ring-[#d08ffb] ">Get started</button> */}
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" >
                        <span class="sr-only">Open main menu</span>
                        <svg onClick={toggleNav} class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class={`items-center justify-between w-full md:flex md:flex-row md:w-2/3 md:order-1 ${open ? 'flex flex-col' : 'hidden'}`} id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border-none  rounded-lg bg-none md:flex-row md:space-x-8 md:mt-0  md:bg-none dark:bg-gray-800 md:dark:bg-none dark:border-none">
                    <li onClick={toggleNav}>
                        <Link to="/">
                            <a href="#" class="transition ease-in-out delay-100 block py-2 pl-3 pr-4 text-[#e0b0ff] bg-nonerounded md:bg-none tw-ring-color-none md:text-[#e0b0ff] md:p-0 md:dark:text-[#e0b0ff] hover:text-[#d08ffb] " >Home</a>
                        </Link>
                    </li>
                    <li onClick={toggleNav}>
                        <Link to="/about">
                            <a href="#" class="transition ease-in-out delay-100 block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:text-[#d08ffb]  md:p-0 md:dark:hover:text-[#d08ffb]  dark:text-[#e0b0ff] dark:hover:bg-gray-700 dark:hover:text-[#e0b0ff] md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </Link>
                    </li>
                    <li onClick={toggleNav}>
                        <Link to="/workshopPage">
                            <a href="#" class="transition ease-in-out delay-100 block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:text-[#d08ffb]  md:p-0 md:dark:hover:text-[#d08ffb]  dark:text-[#e0b0ff] dark:hover:bg-gray-700 dark:hover:text-[#e0b0ff] md:dark:hover:bg-transparent dark:border-gray-700">Workshop</a>
                        </Link>
                    </li>
                    <li onClick={toggleNav}>
                        <Link to="/mentorList">
                            <a href="#" class="transition ease-in-out delay-100 block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:text-[#d08ffb]  md:p-0 md:dark:hover:text-[#d08ffb]  dark:text-[#e0b0ff] dark:hover:bg-gray-700 dark:hover:text-[#e0b0ff] md:dark:hover:bg-transparent dark:border-gray-700">Mentors</a>
                        </Link>
                    </li>
                    <li onClick={toggleNav}>
                        <Link to="/community">
                            <a href="#" class="transition ease-in-out delay-100 block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:text-[#d08ffb]  md:p-0 md:dark:hover:text-[#d08ffb]  dark:text-[#e0b0ff] dark:hover:bg-gray-700 dark:hover:text-[#e0b0ff] md:dark:hover:bg-transparent dark:border-gray-700">Community</a>
                        </Link>
                    </li>
                    </ul>
                    <Link to='/login' onClick={toggleNav}>
                        <ButtonPrimary url="/" name="Get Started"/>
                    </Link>
                </div>
                
            </div>
        </nav>

    </div>
    
  )
}

export default Navbar