import React from 'react'

function About() {
  return (
    <div className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
            </div>

            {/* sm:grid -> anything small above should be 2 coloumn */}
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Client, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I’m a full-stack developer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I’m focused on
                    building responsive full-stack web applications.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About;