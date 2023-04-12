import React from 'react'
import ProjectList from '../ProjectList/projectList'
import { projectsFile } from '../../store/data/projectdata'

function Workshop() {
  return (
    <>  
        
        <div className='home-workshop-intro'>
                <h2 className='text-4xl font-bold text-[#e0b0ff]'>Empower women by investing in their projects</h2>
                <h4 className='text-2xl'>Projects in our workshop:</h4>
        </div>
        <div className='flex flex-row flex-wrap gap-6 md:gap-16 mt-12'>
            {
                projectsFile.map((item) => (
                    <ProjectList key={item.id} item={item} />
                )
                )
            }
        </div>
    </>
  )
}

export default Workshop