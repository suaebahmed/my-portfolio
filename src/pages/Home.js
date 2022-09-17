import React from 'react'
import { FaFilePdf } from 'react-icons/fa';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import ProjectItem from '../components/ProjectItem';
// import Contract from '../components/Contract';
// import ButtonPrimary from '../components/Button-primary';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      {/* container or hero section */}
      <div className='w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Sueab Ahmed</h1>
          <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Full-Stack Developer.</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full stack web developer specializing in data structure and algorithms. Currently, I'm focused on building responsive full-stack web applications.</p>
          <div>
              <button className='bg-[rgb(10,25,49)] text-white hover:shadow-xl border-full rounded px-3 py-[6px] flex justify-center'>
                Resume
                <span className='ml-2 mt-1'>
                  <FaFilePdf/>
                </span>
              </button>
          </div>
        </div>
      </div>
      {/* end hero section */}
      <About></About>
      <Skills></Skills>
      {/* --- work section --- */}
      <div className='text-center my-4'>
        <h1 className='text-4xl font-semibold'>My works</h1>
        <p className='text-gray-400 mt-3'>These are project when I have lizure time.</p>
        <div className='w-full grid justify-center grid-cols-1 sm:grid-cols-3 my-10 gap-4'>
          <ProjectItem/>
          <ProjectItem/>
          <ProjectItem/>
          <ProjectItem/>
        </div>
      </div>
      {/* end -- works section */}
      {/* <Contract></Contract> */}
      <Footer></Footer>
    </>
  )
}

export default Home;
