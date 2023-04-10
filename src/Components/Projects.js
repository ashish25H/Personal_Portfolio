import React from "react";
import NavBar from "./NavBar";
import proj1 from "../assets/videos/2023-01-22 20-01-04_Trim.mp4";
import musicApp from "../assets/videos/2023-01-25 20-00-31_Trim.mp4";
import movieApp from "../assets/videos/2023-03-21 20-55-21_Trim.mp4";
import flexDisplay from "../assets/videos/2023-02-04 10-41-20_Trim.mp4";
import wallClock from "../assets/videos/2023-01-27 12-05-28_Trim.mp4";
import landingPage from "../assets/videos/2023-01-15 20-06-03_Trim.mp4";
import rock_paper from "../assets/videos/rock_paper_scissors.mp4";
import shoppingCart from "../assets/videos/shoppingCart.mp4";
import cssvariables from "../assets/videos/2023-01-27 18-18-31_Trim.mp4";
import keyCode from "../assets/videos/keyCodeApp.mp4";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const getProj1 = () => {};

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:bg-[#1ABC9C] md:p-4 md:grid grid-flow-rows grid-cols-3 gap-10 justify-self-stretch justify-items-center items-stretch">
        <ProjectCard
          video={shoppingCart}
          name="Shopping Cart App"
          tech="HTML,Tailwind CSS,JavaScript,React,React Router,Redux Toolkit"
          link="https://frolicking-semolina-db220d.netlify.app/"
        />
        <ProjectCard
          video={rock_paper}
          name="Rock Paper Scissors Game"
          tech="HTML,Tailwind CSS,JavaScript,React"
          link="https://musical-kashata-d3acf1.netlify.app/"
        />
        <ProjectCard
          video={proj1}
          name="Circle"
          tech="HTML,CSS,JavaScript"
          link="https://classy-kringle-c34145.netlify.app/"
        />
        <ProjectCard
          video={musicApp}
          name="Music App"
          tech="HTML,CSS,JavaScript"
          link="https://sensational-lollipop-75de81.netlify.app/"
        />
        <ProjectCard
          video={movieApp}
          name="Movie App"
          tech="HTML,Tailwnid CSS,JavaScript,React"
          link="https://curious-kringle-c9a096.netlify.app/"
        />
        <ProjectCard
          video={flexDisplay}
          name="Flex Panels"
          tech="HTML,CSS,JavaScript"
          link="https://ashish25h.github.io/Flex_Panels_Project/"
        />
        <ProjectCard
          video={wallClock}
          name="Clock"
          tech="HTML,CSS,JavaScript"
          link="https://ashish25h.github.io/JavaScript_Clock_Project/"
        />
        <ProjectCard
          video={landingPage}
          name="Fylo Landing Page"
          tech="HTML,CSS,JavaScript"
          link="https://ashish25h.github.io/HTML_CSS_Practice_Project_DarkTheamLandingPage/"
        />
        <ProjectCard
          video={cssvariables}
          name="Change CSS Variables"
          tech="HTML,CSS,JavaScript"
          link="https://astounding-hummingbird-1c31e5.netlify.app/"
        />

        <ProjectCard
          video={keyCode}
          name="KeyCode App"
          tech="HTML,CSS,JavaScript"
          link="https://ashish25h.github.io/key_Code_Project/"
        />
      </div>
    </>
  );
};

export default Project;
