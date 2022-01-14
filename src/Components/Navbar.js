// imports
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import { useWindowDimensions } from "../Hooks/useWindowDimensions";
import { useWindowPositions } from "../Hooks/useWindowPositions";
import Burger from "../Components/Burger";
import { BsFillPersonFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
// navbar main
const Navbar = () => {
  const { width } = useWindowDimensions();
  const { scrollY } = useWindowPositions();
  const { setOpenNavMenu } = useGlobalContext();
  const [mobileMode, setMobileMode] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  useEffect(() => {
    if (width <= 768) {
      setMobileMode(true);
    } else {
      setOpenNavMenu(false);
      setMobileMode(false);
      setToggleMenu(false);
    }
  }, [mobileMode, width, setOpenNavMenu]);
  useEffect(() => {
    if (width < 640) {
      setShowIcons(true);
    } else {
      setShowIcons(false);
    }
  }, [setShowIcons, width]);
  return (
    <nav
      className="fixed w-full h-0 top-0 z-10 text-white"
      style={{ maxWidth: "1600px" }}
    >
      <div
        className={`relative py-4  text-xl transition-all duration-500 ${
          scrollY !== 0 && !mobileMode ? "text-lg mx-12 mt-4 rounded-full" : ""
        } ${scrollY !== 0 && !toggleMenu ? "bg-purple-800 rounded-none" : ""}`}
      >
        <h1 className="pl-3 font-bold tracking-widest md:text-xl text-2xl">
          MH
        </h1>
        <div
          className={`absolute py-4 top-0 right-0 flex text-right tracking-wide ${
            mobileMode ? "hidden" : ""
          }`}
        >
          <h1 className="px-8 cursor-pointer">About</h1>
          <h1 className="px-8 cursor-pointer">Education</h1>
          <h1 className="px-8 cursor-pointer">Skills</h1>
          <h1 className="px-8 cursor-pointer">Experiences</h1>
        </div>
        <div
          className="absolute top-0 right-0 z-20"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <div className={`py-4 px-4 ${!mobileMode ? "hidden" : ""}`}>
            <Burger />
          </div>
        </div>
        <div
          className={`absolute bg-gradient-to-b from-purple-800 to-purple-500 sm:w-2/5 w-1/4 h-screen top-0 right-0 transition duration-250 opacity-0 transform  ${
            toggleMenu ? "opacity-100 " : "translate-x-1/2"
          }`}
        >
          <div
            className={`relative w-full top-1/2 left-1/2 mx-auto md:text-3xl font-medium transform -translate-y-1/2 -translate-x-1/4 ${
              showIcons ? "hidden" : ""
            }`}
          >
            <div
              className={`my-4 transform transition duration-500 cursor-pointer ${
                toggleMenu ? "opacity-100" : "opacity-0 translate-x-12"
              }`}
            >
              <h1
                onClick={() => {
                  setToggleMenu(false);
                  setOpenNavMenu(false);
                }}
                className="transition-all delay-0 hover:text-white"
              >
                About
              </h1>
            </div>
            <div
              className={`my-4 transform transition duration-500 cursor-pointer delay-100 ${
                toggleMenu ? "opacity-100" : "opacity-0 translate-x-12"
              }`}
            >
              <h1
                onClick={() => {
                  setToggleMenu(false);
                  setOpenNavMenu(false);
                }}
                className="transition-all delay-0 hover:text-white"
              >
                Education
              </h1>
            </div>
            <div
              className={`my-4 transform transition duration-500 cursor-pointer delay-200 ${
                toggleMenu ? "opacity-100" : "opacity-0 translate-x-12"
              }`}
            >
              <h1
                onClick={() => {
                  setToggleMenu(false);
                  setOpenNavMenu(false);
                }}
                className="transition-all delay-0 hover:text-white"
              >
                Skills
              </h1>
            </div>
            <div
              className={`my-4 transform transition duration-500 cursor-pointer delay-300 ${
                toggleMenu ? "opacity-100" : "opacity-0 translate-x-12"
              }`}
            >
              <h1
                onClick={() => {
                  setToggleMenu(false);
                  setOpenNavMenu(false);
                }}
                className="transition-all delay-0 hover:text-white"
              >
                Experiences
              </h1>
            </div>
          </div>
          <div
            className={`absolute left-1/2 top-1/2 md:text-3xl font-medium text-4xl transform -translate-y-1/2 -translate-x-1/2 ${
              !showIcons ? "hidden" : ""
            }`}
          >
            <div
              className={`my-4 transform transition duration-500 cursor-pointer ${
                toggleMenu ? "opacity-100" : "opacity-0 translate-x-12"
              }`}
            >
              <h1
                onClick={() => {
                  setToggleMenu(false);
                  setOpenNavMenu(false);
                }}
                className="transition-all delay-0 hover:text-white"
              >
                <BsFillPersonFill />
              </h1>
            </div>
            <div
              className={`my-4 transform transition duration-500 cursor-pointer delay-100 ${
                toggleMenu ? "opacity-100" : "opacity-0 translate-x-12"
              }`}
            >
              <h1
                onClick={() => {
                  setToggleMenu(false);
                  setOpenNavMenu(false);
                }}
                className="transition-all delay-0 hover:text-white"
              >
                <MdSchool />
              </h1>
            </div>
            <div
              className={`my-4 transform transition duration-500 cursor-pointer delay-200 ${
                toggleMenu ? "opacity-100" : "opacity-0 translate-x-12"
              }`}
            >
              <h1
                onClick={() => {
                  setToggleMenu(false);
                  setOpenNavMenu(false);
                }}
                className="transition-all delay-0 hover:text-white"
              >
                <GiSkills />
              </h1>
            </div>
            <div
              className={`my-4 transform transition duration-500 cursor-pointer delay-300 ${
                toggleMenu ? "opacity-100" : "opacity-0 translate-x-12"
              }`}
            >
              <h1
                onClick={() => {
                  setToggleMenu(false);
                  setOpenNavMenu(false);
                }}
                className="transition-all delay-0 hover:text-white"
              >
                <MdWork />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
