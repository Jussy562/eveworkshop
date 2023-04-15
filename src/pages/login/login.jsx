import React, {useState } from 'react'


function Login() {
  const [page, setPage] = useState(true);
  const handlePage = () => setPage(!page);
 
  return (
    <div className='flex flex-col-reverse md:flex-row py-12 md:py-24'>
        
      <div className='w-full md:w-1/2 flex justify-center items-center'>
        {
          page ? 
          <form className='w-2/3'>
          <div class="mb-6">
            <label for="first_name" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">First Name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
          </div>
          <div class="mb-6">
            <label for="last_name" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">First Name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className='flex flex-col md:flex-row md:justify-between'>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label for="remember" class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300">Applicant</label>
            </div>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label for="remember" class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300">Mentor</label>
            </div>
            <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label for="remember" class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300">Investor</label>
            </div>
          </div>
          <div className='mb-5'>
            <p>Already have an account? <span className='text-red-500 cursor-pointer' onClick={handlePage}>Login</span></p>
          </div>
          <button type="submit" class="text-white bg-[#e0b0ff] hover:bg-[#d08ffb]  focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
            : 

            <form className='w-2/3'>
             
              <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              
              <div className='mb-5'>
                <p>Don't have an account? <span className='text-red-500 cursor-pointer' onClick={handlePage}>Sign Up</span></p>
              </div>
              <button type="submit" class="text-white bg-[#e0b0ff] hover:bg-[#d08ffb]  focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        }
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0'>
        <div className='w-2/3'>
          <h3 className='text-black text-2xl md:text-4xl font-extrabold'><span className='text-[#e0b0ff]'>eve</span>WORKSHOP</h3>
        </div>
      </div>

    </div>
  )

 
}

export default Login