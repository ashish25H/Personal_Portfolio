import React from "react";
import avatar from "../assets/meanuImg/avataaars.svg";

const Profile = () => {
  return (
    <div className="bg-[#1ABC9C] sm:flex flex-col items-center justify-center h-[92vh]">
      <div className="sm:flex flex-col items-center justify-center m-5">
        <p className="sm:text-[#fff] text-3xl font-bold mb-2">Hey! ASHISH Here</p>
        <p className="sm:text-[#fff] text-xl font-semibold text-center">Frontend Developer - UI/UX Developer - Web Designer - Full Stack Developer</p>
      </div>

      <div>
        <img src={avatar} alt="avatar img" className="w-[100%]" />
      </div>
    </div>
  );
};

export default Profile;
// h-[92vh]