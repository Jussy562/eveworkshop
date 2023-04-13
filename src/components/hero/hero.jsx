import React from 'react'
import ButtonPrimary from '../button/button'
import create from '/assets/create.svg'



function Hero() {
  return (
    <div className='hero mt-24 pb-8'>
        <div className='flex flex-col-reverse md:flex-row w-full md:items-center'>
            <div className='w-full md:w-1/2'>
                <div className='mb-7 hero-text dark:text-black'>
                  <h3 className='text-4xl mb-4'>Empowering women to <span className='text-[#e0b0ff]'>build </span>
                    for the future.</h3>
                  <p><span className='text-[#e0b0ff]'>eve</span><span>Workshop</span> is the community for women to 
                  showcase their projcts and get the support they to enable
                  them launch a product.</p>
                  <p>Invest in a project today</p>
                </div>
                <div>
                    <ButtonPrimary url="/" name="Invest Today" />
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <div>
                    <img src={create} alt="build" className='h-64 lg:h-96 jump' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero