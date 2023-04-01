import React from "react";
import NavBar from "./NavBar";
import SkillCard from "./SkillCard";
import HTML from "../assets/logoImg/html5-logo-31820.png";
import CSS from '../assets/logoImg/css3.png';
import JavaScript from '../assets/logoImg/javascript-39404.png';
import ReactJS from '../assets/logoImg/1174949_js_react js_logo_react_react native_icon.png';
import Redux from '../assets/logoImg/redux-icon.svg';
import Reactrouter from '../assets/logoImg/react-router.svg';
import SASS from '../assets/logoImg/sass-1.svg';
import tailwind from '../assets/logoImg/tailwind-css-icon.svg';
import mongoDB from '../assets/logoImg/1012822_code_development_logo_mongodb_programming_icon.png';
import express from '../assets/logoImg/expressjs-ar21.svg';

const Skills = () => {
  const htmlcolor = '#F16529';

  return (
    <div className="bg-[#f9f2f9] h-[100vh]">
      <NavBar />
      <div className="flex flex-col items-center m-10 md:grid md:grid-rows-2 md:grid-flow-col md:gap-4  md:items-stretch content-center">
        <SkillCard image={HTML} bgColor={htmlcolor}/>
        <SkillCard image={CSS} />
        <SkillCard image={JavaScript} />
        <SkillCard image={ReactJS} />
        <SkillCard image={Redux} />
        <SkillCard image={Reactrouter} />
        <SkillCard image={SASS} />
        <SkillCard image={tailwind} />
        <SkillCard image={mongoDB} />
        <SkillCard image={express} />
      </div>
    </div>
  );
};

export default Skills;
