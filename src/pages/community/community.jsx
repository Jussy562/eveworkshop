import React from 'react'

function Community() {
  return (
    <div className='w-full flex flex-col justify-center items-center py-12 md:py-24 px-6 md:px-12 home-workshop'>
        <div>
            <div className='flex flex-col  mb-6  justify-center items-center'>
                <div className='w-1/2'>
                    <h3 className='text-black text-2xl md:text-3xl'>
                        We have a strong community where women leverage on available resources and support to
                        to colaborate and build solutions for the future.
                    </h3>
                    <p className='text-[#e0b0ff] font-bold text-xl md:text-2xl'>Join the community and start making impact!</p>
                </div>
            </div>
            <div className='flex flex-col  mb-6  justify-center items-center '>
                
                    <form className='w-2/3  p-10'>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Full Name</label>
                        <input type="text" id="name" class="bg-gray-50 border-none text-gray-900 text-sm rounded-lg focus:ring-[#e0b0ff] focus:border-[#e0b0ff] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#e0b0ff] dark:focus:border-[#e0b0ff]" required />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e0b0ff] focus:border-[#e0b0ff] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#e0b0ff] dark:focus:border-[#e0b0ff]" placeholder="name@gmail.com" required />
                    </div>
                    
                   
                    <button type="submit" class="text-white bg-[#e0b0ff] hover:bg-[#d08ffb]  focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>

            </div>
        </div>
    </div>
  )
}

export default Community