import React from 'react'

function ButtonSec({name}) {
  return (
    <a href="/"  type="button" className="transition ease-in-out delay-100 w-auto text-[#d08ffb] hover:text-white bg-none hover:bg-[#d08ffb] focus:ring-4 focus:outline-none focus:ring-[#d08ffb] border border-[#d08ffb] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#e0b0ff] dark:hover:bg-[#d08ffb]  dark:focus:ring-[#d08ffb] ">{name}</a>
  )
}

export default ButtonSec