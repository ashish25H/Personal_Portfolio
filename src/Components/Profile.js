import React from "react";
import avatar from "../assets/meanuImg/avataaars.svg";

const Profile = () => {
  return (
    <div className="bg-[#1ABC9C] sm:flex flex-col items-center justify-center h-[93vh] md:flex md:h-[90vh]">
      <div className="sm:flex flex-col items-center justify-center m-5 md:text-center">
        <p className="text-[#fff] text-3xl font-bold mb-2 md:text-5xl md:mb-3">Hey! ASHISH Here</p>
        <p className="text-[#fff] text-xl font-semibold text-center md:text-2xl">Frontend Developer - UI/UX Developer - Web Designer - Full Stack Developer</p>
      </div>

      <div>
        <img src={avatar} alt="avatar img" className="w-[100%] md:w-[400px]" />
      </div>
    </div>
  );
};

export default Profile;
// h-[92vh]