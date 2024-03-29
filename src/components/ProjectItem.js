import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

function ProjectItem({ project }) {
  return (
    <div className="w-full pb-8 overflow-hidden mx-auto hover:shadow-lg duration-300 rounded-sm drop-shadow-sm">
      <img
        className="w-full h-[180px] mx-auto"
        src={project.imageUrl}
        alt=""
      ></img>
      <h1 className="text-xl font-samibold mt-2">{project.name}</h1>
      <div className="flex justify-center flex-wrap my-3 mx-10">
        {project.technologies.map((item, i) => {
          return (
            <div
              key={i}
              className="text-xs font-semibold text-white 
              bg-[#020024] h-4 px-2 rounded-full m-2"
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <VscGithubAlt className="mx-2 cursor-pointer"></VscGithubAlt>
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="mx-2 cursor-pointer"></FiExternalLink>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
