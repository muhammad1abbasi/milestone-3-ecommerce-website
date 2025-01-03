import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='container mx-auto mt-5'>
        <div className='flex justify-evenly items-center space-x-44'>
            <div className='flex flex-col space-y-5'>
            <h1 className='text-4xl shadow font-bold '>Quality Makes</h1>
            <h1 className='text-4xl text-slate-600 shadow font-bold '>Your Personality</h1>
            
            <div className='flex flex-col space-y-5'>
            <div className='border border-gray-500 shadow rounded p-3'>
                <input type="text" placeholder='Enter Your Email' />
            </div>
            <button className='rounded border bg-red-600 py-6 px-12 text-white font-bold'>
                Get Ready For Shop 
            </button>
            </div>
            </div>
            <div>
                <Image src={"/heroperson.jpg"} alt='nul' width={400} height={400}/>

            </div>

        </div>
      
    </div>
  )
}

export default Hero
