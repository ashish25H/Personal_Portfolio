import React from "react";
import NavBar from "./NavBar";
import linkedIn from "../assets/meanuImg/linkedin-logo-png-1846.png";
import gitHub from "../assets/meanuImg/github-mark.svg";
import instagram from "../assets/meanuImg/instagram.png";
import email from "../assets/meanuImg/gmail.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="sm:bg-[#CAD5E2] h-[100vh]">
      <NavBar />
      <div className="bg-[#1ABC9C] md:h-[100vh] p-10">
        <div >
          <p className="sm:text-center text-3xl font-semibold my-10 text-[#120E43] md:text-center md:text-5xl md:mt-0">
            You connect with me.
          </p>
          <div className="sm:flex justify-evenly md:flex">
            <Link
              to="https://linkedin.com/in/the-ashishkumar"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="sm:w-[50px] md:w-[80px]"
                src={linkedIn}
                alt="LinkedIn"
              />
            </Link>

            <Link to="https://github.com/ashish25H" target={"_blank"}>
              <img className="sm:w-[50px] md:w-[80px]" src={gitHub} alt="GitHub" />
            </Link>

            <Link
              to="https://www.instagram.com/kumarashish391/"
              target={"_blank"}
            >
              <img
                className="sm:w-[50px] md:w-[80px]"
                src={instagram}
                alt="Instagram"
              />
            </Link>

            <Link to="">
              <img
                className="sm:w-[50px] md:w-[80px]"
                src={email}
                alt="email"
                title="se.ashish200@gmail.com"
              />
            </Link>
          </div>
        </div>

        <div className="text-center text-4xl font-semibold my-14">or</div>

        <form className="sm:flex flex-col bg-[#03203C] m-2 p-6 rounded-md md:flex md:mx-auto md:w-[50%]">
          <input
            className="mb-3 p-2 rounded-md outline-none"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            className="mb-3 p-2 rounded-md outline-none"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="mb-3 p-2 rounded-md outline-none"
            type="tel"
            name="phoneNumber"
            placeholder="Phone number(Optional)"
          />
          <textarea
            className="mb-3 p-2 rounded-md outline-none"
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Any suggestions for improvement"
          ></textarea>
          <input
            className="bg-[#5DA3FA] w-fit mx-auto py-2 px-4 rounded-md text-[#242B2E] font-semibold"
            type="submit"
            name="submit"
            text="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
