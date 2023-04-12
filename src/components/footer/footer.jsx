import React from 'react'

function Footer() {
  return (
    <footer className='h-100vh py-20 md:py-40 px-6 md:px-12 bg-gray-500'>
            <div className='flex flex-col w-full  '>
                <div className='flex flex-col md:grid  md:grid-cols-3 md:gap-6 mb-16 md:mb-20'>
                    <div className='flex flex-col items-start mb-4 md:mb-0'>
                        <div className='mb-2 md:mb-8'>
                            <a href="/" class="flex items-center text-[#e0b0ff] self-center text-2xl font-semibold whitespace-nowrap ">
                                eve
                                <span className='text-black' >WORKSHOP</span>
                            </a>
                        </div>
                        <div>
                            <p className='text-s md:text-xl text-gray-300'>
                                <span className='text-[#e0b0ff]'>eve</span><span>Workshop</span> is the community for women to 
                                showcase their projcts and get the support they to enable
                                them launch a product.
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-auto flex justify-start md:justify-center mb-4 md:mb-0 '>
                        <div className='flex flex-col items-start '>
                            <div className='flex  mb-2 md:mb-8'>
                                <span>
                                    <h4 className='text-gray-300 font-bold text-l md:text-xl'>Links</h4>
                                </span>
                            </div>

                            <div className='flex md:justify-center'>
                                <ul className='text-xl text-gray-300 '>
                                    <li>
                                        <a href='/' className='text-[#e0b0ff] hover:text-[#d08ffb]'>Home</a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-[#e0b0ff] hover:text-[#d08ffb]'>About</a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-[#e0b0ff] hover:text-[#d08ffb]'>Workshop</a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-[#e0b0ff] hover:text-[#d08ffb]'>Mentors</a>
                                    </li>
                                    <li>
                                        <a href='/' className='text-[#e0b0ff] hover:text-[#d08ffb]'>Community</a>
                                    </li>
                                </ul>
                            </div>
                        
                        </div>
                    </div>
                    <div className='w-full md:w-auto flex justify-start md:justify-center'>
                        <div className='flex flex-col md:items-start'>
                                <div className='flex  mb-2 md:mb-8'>
                                    <span>
                                        <h3 className='text-l md:text-xl text-gray-300 font-bold'>Contact Us</h3>
                                    </span>
                                </div>
                                <div className='flex flex-col justify-start md:justify-center'>
                                    <ul >
                                        <li>
                                            <a href='/' className='text-xl text-[#e0b0ff] hover:text-[#d08ffb]'>
                                                hello@eveworkshop.com
                                            </a>
                                        </li>

                                        <li>
                                            <a href='/' className='text-xl text-[#e0b0ff] hover:text-[#d08ffb]'>
                                                +2349035401231
                                            </a>
                                        </li>
                                    </ul>
                                    
                                </div>
                        </div>
                    </div>
                </div>
                
            
                
                

            
                <hr />
                <div className='flex justify-center  mt-4'>
                    <p className='text-l text-white font-bold'>2023 <span className='text-[#e0b0ff]'>eve</span><span className='text-black'>WORKSHOP</span>.  All right reserved.</p>
                </div>
            </div>
    </footer>
  )
}

export default Footer