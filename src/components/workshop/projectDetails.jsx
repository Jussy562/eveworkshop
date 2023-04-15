import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ButtonPrimary from '../button/button';
import ButtonSec from '../button/buttonSec';

function ProjectDetails() {
    const { state } = useLocation();
    const { project } = state || {};
  return (
    <div className='flex flex-col justify-center items-center bg-slate-300 py-5 md:py-10 '>
        <div className='w-full md:w-2/3'>
            <div className='w-full mb-6 '>
                <img src={project.image} alt='project' />

            </div>
            <div className='flex flex-col justify-between mb-4'>
                <h3 className='text-2xl md:text-3xl text-black mb-2'>{project.name}</h3>
                <p className='text-black text-xl md:text2xl mb-2'>{project.desc}</p>
                <p className='text-black text-xl md:text-2xl'>Founder: {project.founder}</p>
            </div>
            <div className='w-full flex flex-row justify-between'>
                <div>
                    <ButtonSec url="/" name="View Demo" />
                </div>
                <div>
                    <ButtonPrimary url="/" name="Invest Today" />
                </div>
            </div>
           


        </div>
    </div>
  )
}

export default ProjectDetails