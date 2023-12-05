import React, { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import ProjectItem from "../components/ProjectItem";
// import Contract from '../components/Contract';
// import ButtonPrimary from '../components/Button-primary';

function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      try {
        var res = await fetch("/my-portfolio/projects-data.json");
        var data = await res.json();
        setProjects(data.projects);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-screen-lg mx-auto">
        {/* container or hero section */}
        <div className="w-full h-screen" id="home">
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-3xl font-bold text-[#ccd6f6]">
              Sueab Ahmed
            </h1>
            <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
              I'm a Competitive Programmer and Full-Stack Developer.
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              {" "}
              My expertise lies in the dynamic intersection of data structures,
              algorithms, and full-stack web development. Presently, my primary
              focus is on advancing in software development and honing my
              problem-solving skills
            </p>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              Driven by a passion for innovation and a commitment to excellence,
              I am actively working towards my future goal of contributing to a
              renowned company like Google or a FAANG company. Additionally, I
              harbor aspirations of venturing into entrepreneurship, leveraging
              my skills and experiences to make a meaningful impact.
            </p>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I am excited about the evolving landscape of technology and how it
              shapes the future. I look forward to the prospect of bringing my
              skills and aspirations to a dynamic team, contributing to both
              personal and collective success.
            </p>
            <div>
              <a
                href="https://drive.google.com/file/d/1JdB36R4yqGid3Md2pYyYA7SgD16uCF6-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[rgb(10,25,49)] text-white hover:shadow-xl border-full rounded px-3 py-[6px] flex justify-center">
                  Resume
                  <span className="ml-2 mt-1">
                    <FaFilePdf />
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
        <div className="text-center pt-[100px]" id="projects">
          <h1 className="text-4xl font-semibold">My works</h1>
          <p className="text-gray-400 mt-3">
            These project are made when I have spare time.
          </p>
          <div className="w-full grid justify-center grid-cols-1 sm:grid-cols-3 my-10 gap-4">
            {projects.map((item) => {
              return <ProjectItem project={item} key={item.id}></ProjectItem>;
            })}
          </div>
        </div>
        {/* end -- works section */}
        {/* <Contract></Contract> */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
