import React from "react";

function About() {
  return (
    <div className="w-full h-screen" id="about">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>

        {/* sm:grid -> anything small above should be 2 coloumn */}
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Suaeb, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-slate-600 ">
            <p className="mt-2">
              👋 Hi there! I’m a full-stack developer, an aspiring SDE and
              problem solving experiences. I have a passion for learning and
              sharing my knowledge with others. I love to work with a team and
              learn from each other.
            </p>
            <p className="mt-2">
              🌟 My goal is simple: to leverage technology to create impactful
              solutions and contribute meaningfully to the ever-evolving tech
              landscape. Whether it's building scalable applications or solving
              complex algorithms, I'm always eager to tackle new challenges
              head-on.
            </p>
            <p className="mt-2">
              🚀 My expertise spans various technologies, including JavaScript,
              TypeScript, React.js, and more. I believe in the power of
              continuous learning and collaboration, constantly seeking new
              challenges and opportunities to expand my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
