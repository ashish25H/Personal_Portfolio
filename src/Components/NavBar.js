import React from "react";
import { Link, Outlet } from "react-router-dom";
import burger from "../assets/meanuImg/hamburger.png";
import cross from "../assets/meanuImg/cross.png";

const NavBar = () => {
  //   const burgerIcon = document.getElementById("burgerIcon");
  //   const crossIcon = document.getElementById("crossIcon");
  //   const meanuList2 = document.getElementById("meanuList2");

  const showMeanu = () => {
    const burgerIcon = document.getElementById("burgerIcon");
    const crossIcon = document.getElementById("crossIcon");
    const meanuList2 = document.getElementById("meanuList2");
    burgerIcon.classList.add("sm:hidden");
    crossIcon.classList.remove("sm:hidden");
    crossIcon.classList.add("sm:block");
    meanuList2.classList.remove("sm:hidden");
    meanuList2.classList.add("sm:block");
  };

  const showMeanu2 = () => {
    const burgerIcon = document.getElementById("burgerIcon");
    const crossIcon = document.getElementById("crossIcon");
    const meanuList2 = document.getElementById("meanuList2");
    crossIcon.classList.remove("sm:block");
    crossIcon.classList.add("sm:hidden");
    burgerIcon.classList.remove("sm:hidden");
    burgerIcon.classList.add("sm:block");
    meanuList2.classList.remove("sm:block");
    meanuList2.classList.add("sm:hidden");
  };

  return (
    <>
      <nav className="sm:flex justify-between items-center bg-[#2C3E50] p-3 text-[#fff] md:flex md:items-center md:p-6">
        <div className="sm:font-semibold text-xl font-mono">Ashish</div>
        <div>
          <ul
            className="sm:hidden mt-10 text-[#fff] md:flex md:mt-0"
            id="meanuList"
          >
            <li className="md:mx-4 md:hover:text-[#1ABC9C] md:font-semibold">
              <Link to="/">Profile</Link>
            </li>
            <li className="md:mx-4 md:hover:text-[#1ABC9C] md:font-semibold">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="md:mx-4 md:hover:text-[#1ABC9C] md:font-semibold">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="md:mx-4 md:hover:text-[#1ABC9C] md:font-semibold">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>

          <div>
            <img
              src={burger}
              alt="burger img"
              className="md:hidden xl:hidden 2xl:hidden"
              id="burgerIcon"
              onClick={showMeanu}
            />
            <img
              src={cross}
              alt="cross img"
              className="sm:hidden  md:hidden "
              id="crossIcon"
              onClick={showMeanu2}
            />
          </div>
        </div>
      </nav>

      <div>
        <ul className="sm:hidden text-center md:hidden " id="meanuList2">
          <li className="m-1 font-semibold text-md md:m-0 lg:m-0">
            <Link to="/">Profile</Link>
          </li>
          <li className="m-1 font-semibold text-md md:m-0 lg:m-0">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="m-1 font-semibold text-md md:m-0 lg:m-0">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default NavBar;
