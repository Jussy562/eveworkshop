import React from 'react'

function MentorCard({mentor}) {
  return (
    
<div class="mentor-card flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='rounded-full circle mb-4'>
        <img src={mentor.picture.large} alt='mentor' className='rounded-full  border-[#e0b0ff] border-8'/>
    </div>
    <div>
        <h4 className='text-xl md:text-2xl font-semibold'>{mentor.name.first} {mentor.name.last}</h4>
        <p className='text-lg md:text-xl text-[#e0b0ff]'>Software Engineer</p>
        <p className='text-sm md:text-lg text-black'>Google</p>
    </div>
    
</div>

  )
}

export default MentorCard