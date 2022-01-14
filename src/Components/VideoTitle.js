import React from "react";
import background from "../Assets/Videos/background.mp4";
import { useWindowDimensions } from "../Hooks/useWindowDimensions";
import "./VideoTitle.css";
const VideoTitle = () => {
  const { width } = useWindowDimensions();
  if (width >= 768) {
    return (
      <div className="relative h-screen" style={{ maxHeight: "1200px" }}>
        <video className="videosize" autoPlay loop muted>
          <source src={background} type="video/mp4" />
        </video>
        <div className="absolute w-full bottom-1/4 md:left-0 left-1/2 px-5 text-center transform md:translate-x-0 -translate-x-1/2">
          <h1 className="md:text-8xl text-6xl text-white">Michael He</h1>
          <div className="md:pt-5 pt-2 md:text-3xl text-xl text-white">
            <h1>Mechanical Engineer</h1>
            <h1>Web Developer</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative" style={{ maxHeight: "1200px" }}>
        <div className="to-back absolute bg-gray-800 w-full h-1/2"></div>
        {/* <div className="to-back absolute harvest-gold top-1/2 w-full h-1/2"></div> */}
        <div
          className="background h-screen bg-no-repeat bg-center bg-cover"
          style={{ maxHeight: "1200px" }}
        ></div>
        <div className="absolute w-full bottom-1/4 md:left-0 left-1/2 px-5 text-center transform md:translate-x-0 -translate-x-1/2">
          <h1 className="md:text-9xl text-6xl text-white">Michael He</h1>
          <div className="md:pt-5 pt-2 md:text-4xl text-2xl text-white">
            <h1>Mechanical Engineer</h1>
            <h1>Web Developer</h1>
          </div>
        </div>
      </div>
    );
  }
};

export default VideoTitle;
