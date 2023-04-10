import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ video, name, tech, link }) => {
  return (
    <div className="bg-[#03203C] w-[300px] text-[#CAD5E2] flex flex-col justify-center  items-center my-4 rounded-md md:w-[340px]">
      <video
        className="my-3 rounded-md md:w-[300px]"
        width="250px"
        height="200px"
        autoPlay
        muted
        loop
        controls
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="flex flex-col justify-center items-center px-4 text-center">
        <p className="mb-2 text-[#d9dcdc] font-semibold">Name : {name}</p>
        <p className="mb-3 text-[#d9dcdc] font-semibold">TechStack : {tech}</p>
        <Link to={link} target={"_blank"}>
          <button className="bg-[#5DA3FA] py-2 px-4 rounded-md text-[#242B2E] font-semibold mb-3">
            Live link
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
