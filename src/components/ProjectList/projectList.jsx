import React from 'react'
import { Link } from 'react-router-dom'

function ProjectList({project}) {
  return (
    
    <div class="flex flex-col md:flex-row-reverse items-center max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg" src={project.image} alt="project" className='h-full' />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>
            <Link 
            to = {`/projectdetails/${project.name}`}
            state={{project}}>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#e0b0ff] rounded-lg hover:bg-[#d08ffb] transition ease-in-out delay-100  focus:outline-none dark:bg-[#e0b0ff] dark:hover:bg-[#d08ffb]">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </Link>
        </div>
    </div>

  )
}

export default ProjectList