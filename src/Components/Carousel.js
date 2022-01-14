import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "../Hooks/useWindowDimensions";
const Carousel = () => {
  const { width } = useWindowDimensions();
  const [height, setHeight] = useState(600);
  const [slides, setSlides] = useState([
    {
      title: "SolidWorks",
      picture: "car",
      text: "Web scraping is a technique that involves retrieves data from websites. If you need data gathered from across the web, feel free to contact us.",
      active: true,
    },
    {
      title: "AutoCAD",
      picture: "city",
      text: "Are you tired of repetitive tasks? We specialize in writing Python scripts that uses automation to save you time, so you can focus on what's most important",
      active: false,
    },
    {
      title: "Python",
      picture: "python",
      text: "We are skilled in managing, organizing, and analyzing large quantities of data. We can write scripts to manage your data.",
      active: false,
    },
    {
      title: "JavaScript",
      picture: "laptop",
      text: "Let us know if you need custom software developed to suit your business needs. We can develop a variety of web base applications.",
      active: false,
    },
  ]);
  const changeSlide = (title) => {
    slides.map((slide) => {
      if (slide.title === title) {
        slide.active = true;
      } else {
        slide.active = false;
      }
      return slide;
    });
    setSlides([...slides]);
  };
  useEffect(() => {
    if (width > 1350) {
      setHeight(800);
    } else {
      setHeight(600);
    }
  }, [width]);
  return (
    <div>
      <div
        className="relative overflow-hidden mx-24 border-radius"
        style={{ height: `${height}px` }}
      >
        <div className="absolute px-12 top-1/2 text-4xl transform -translate-y-1/2">
          {slides.map(({ title, active }) => {
            return (
              <h1
                key={title}
                className={`py-3 cursor-pointer font-bold text-white transform hover:text-purple-600 hover:scale-110 transtion-all duration-500  ${
                  active ? "text-purple-300 scale-110 py-8" : ""
                }`}
                onClick={() => changeSlide(title)}
              >
                {title}
              </h1>
            );
          })}
        </div>
        {slides.map(({ picture, text, active }) => {
          return (
            <div key={text}>
              <div
                className={`absolute to-back w-full h-full bg-gray-200 border-radius bg-center bg-no-repeat bg-cover transform transition-all duration-500 ${picture} ${
                  active ? "opacity-100 " : "opacity-0 translate-x-1/2"
                }`}
              ></div>
              <div className="absolute w-full h-full bg-black to-back opacity-20"></div>
              <div
                className={`absolute w-1/2 left-3/4 top-1/2 text-3xl text-white transition-all duration-500 transform  -translate-y-1/2 ${
                  active ? "opacity-100 -translate-x-3/4" : "opacity-0"
                }`}
              >
                <p>{text}</p>
              </div>
            </div>
          );
        })}
        <div>
          {/* <div className="absolute to-back edmonton w-full h-full bg-gray-200 border-radius bg-center bg-no-repeat bg-cover"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
