import React from "react";
import NavBar from "./NavBar";
import linkedIn from "../assets/meanuImg/linkedin-logo-png-1846.png";
import gitHub from "../assets/meanuImg/github-mark.svg";
import instagram from "../assets/meanuImg/instagram.png";
import email from "../assets/meanuImg/gmail.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-[#CAD5E2] h-[100vh]">
      <NavBar />
      <div>
        <p className="text-center text-3xl font-semibold my-5 text-[#120E43]">You connect with me.</p>
        <div className="flex justify-evenly">
          <Link
            to="https://linkedin.com/in/the-ashishkumar"
            target={"_blank"}
            rel="noreferrer"
          >
            <img className="w-[50px]" src={linkedIn} alt="LinkedIn" />
          </Link>

          <Link to="https://github.com/ashish25H" target={"_blank"}>
            <img className="w-[50px]" src={gitHub} alt="GitHub" />
          </Link>

          <Link
            to="https://www.instagram.com/kumarashish391/"
            target={"_blank"}
          >
            <img className="w-[50px]" src={instagram} alt="Instagram" />
          </Link>

          <Link to="">
            <img className="w-[50px]" src={email} alt="email" title="se.ashish200@gmail.com"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
