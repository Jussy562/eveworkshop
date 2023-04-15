import React from 'react'

function About() {
  return (
    <div className='w-full flex flex-col justify-center items-center py-12 md:py-24 px-6 md:px-12 home-workshop'>
        <div>
            <div className='flex flex-col  justify-center items-center about py-6'>
                <div className='w-full md:w-2/3'>
                    <p className='text-black text-xl md:text-2xl mb-6'>
                        The <span className="text-[#e0b0ff]">eve</span>WORKSHOP is a web-based platform 
                        designed to provide women in technology with the opportunity to showcase 
                        their projects, connect with potential investors, and gain access to 
                        mentorship and a supportive community. The platform aims to bridge the 
                        gender gap in tech and empower women by giving them a voice, a platform to 
                        showcase their work, and access to valuable resources.
                    </p>
                    <p className='text-[#e0b0ff] font-bold text-2xl md:text-3xl mb-6 p-6 bg-black'>The Problem</p>
                    <p className='text-black text-xl md:text-2xl mb-6'>
                        Despite the increasing numbers of women entering the technology industry, 
                        there is still a significant gender gap in terms of founders and 
                        representation. Women are often underrepresented in tech leadership 
                        positions and are less likely to receive venture capital funding for their 
                        projects. This lack of representation and support can make it challenging 
                        for women to advance their careers in technology and create successful 
                        projects.
                    </p>
                    <p className='text-[#e0b0ff] font-bold text-2xl md:text-3xl mb-6 p-6 bg-black'>Our Solutions</p>
                    <p className='text-black text-xl md:text-2xl'>
                        The <span className="text-[#e0b0ff]">eve</span>WORKSHOP provides a solution to the problem by creating a centralized platform 
                        for women in technology to showcase their projects to potential investors. 
                        By providing this platform, women will have the opportunity to increase their 
                        visibility in the industry and potentially receive funding for their projects. 
                        Additionally, the platform will provide mentorship opportunities and a supportive 
                        community where women can connect, learn, and build together.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About