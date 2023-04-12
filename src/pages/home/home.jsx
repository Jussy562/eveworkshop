import React from 'react'
// import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero'
import Workshop from '../../components/workshop/workshop'
import MentorSlide from '../../components/mentorship/mentorSlide'
import MenteeSlide from '../../components/mentee/menteeslide'

function Home() {
  return (
    <div>
        <header className='py-4 md:py-8 px-6 md:px-12 header h-100vh'>
            
            <Hero />
        </header>
        <section className=' py-12 md:py-24 px-6 md:px-12 bg-black home-mentor'>
            
            
            <MentorSlide />     
        
        </section>
        <section className='py-12 md:py-24 px-6 md:px-12 home-workshop'>
            <Workshop />
        </section>
        <section className=' py-12 md:py-24 px-6 md:px-12 bg-[#f4e5f2] home-mentee'>
            
            
            <MenteeSlide />     
        
        </section>
        
    </div>
  )
}

export default Home