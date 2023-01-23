import React, { useEffect, useState } from 'react'
import { FaFilePdf } from 'react-icons/fa';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import ProjectItem from '../components/ProjectItem';
// import Contract from '../components/Contract';
// import ButtonPrimary from '../components/Button-primary';

function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    const getProjects = async() =>{
      try {
        var res = await fetch("/my-portfolio/projects-data.json");
        var data = await res.json();
        setProjects(data.projects);
      } catch (error) {
        console.log(error);
      }
    }
    getProjects();
  },[])

  return (
    <>
      <Navbar></Navbar>
      {/* container or hero section */}
      <div className='w-full h-screen' id='home'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-3xl font-bold text-[#ccd6f6]'>Sueab Ahmed</h1>
          <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>I'm a Competitive Programmer and Full-Stack Developer.</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full stack web developer specializing in data structure and algorithms. Currently, I'm focused on building responsive full-stack web applications.</p>
          <div>
            <a href="https://drive.google.com/file/d/15gOaKuJyg11xEp3NZjDNVP1_ef0QJ6IJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className='bg-[rgb(10,25,49)] text-white hover:shadow-xl border-full rounded px-3 py-[6px] flex justify-center'>
                  Resume
                  <span className='ml-2 mt-1'>
                    <FaFilePdf/>
                  </span>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* end hero section */}
      <About></About>
      <Skills></Skills>
      {/* --- work section --- */}
      <div className='text-center my-4' id='projects'>
        <h1 className='text-4xl font-semibold'>My works</h1>
        <p className='text-gray-400 mt-3'>These project are made when I have spare time.</p>
        <div className='w-full grid justify-center grid-cols-1 sm:grid-cols-3 my-10 gap-8'>
          {projects.map(item=>{
            return(
              <ProjectItem project={item} key={item.id}></ProjectItem>
            )
          })}
        </div>
      </div>
      {/* end -- works section */}
      {/* <Contract></Contract> */}
      <Footer></Footer>
    </>
  )
}

export default Home;
