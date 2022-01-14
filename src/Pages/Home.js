import React from "react";
import VideoTitle from "../Components/VideoTitle";
import Carousel from "../Components/Carousel";
// import gears from "../Assets/Images/gears.png";

const Home = () => {
  // run this code on rendering thats what useeffect does
  return (
    <main>
      <section className="relative overflow-y-hidden">
        <VideoTitle />
      </section>
      <section className="py-24">
        <h1 className="mx-6 md:text-8xl text-6xl font-bold text-purple-900 text-center">
          About Me
        </h1>
        <div className="py-12 md:grid grid-cols-2">
          <div className="mx-6 mb-6 md:text-right text-center text-5xl font-bold">
            <h1>Curious</h1>
            <h1>Innovative</h1>
            <h1 className="">Determined</h1>
          </div>
          <div className="mx-6 md:text-3xl text-xl">
            <p>
              Hi there! I’m Michael He, an Mechanical EIT who graduated from
              University of Alberta.
              <br />
              <br />
              I’m continually learning and always excited to apply my knowledge
              to find innovative solutions to real world issues. My dream is to
              utilize my mechanical engineering and software development skills
              to create applications that can solves engineering problems.
              <br />
              <br />I also enjoy web development as a hobby.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-gray-900 to-purple-900 text-white">
        <h1 className="mx-6 pt-24 md:text-8xl text-6xl font-bold text-white text-center">
          Education
        </h1>
        <div className="text-purple-400">
          <h1 className="mx-6 pt-6 md:text-5xl text-3xl font-bold text-center">
            Graduated from the University of Alberta in 2020
          </h1>
          <h1 className="mx-6 md:text-4xl text-2xl font-bold text-center">
            Degree in Mechanical Engineering
          </h1>
        </div>
        <div className="my-6">
          {/* <img className="w-3/5 mx-auto" src={gears} alt="" /> */}
        </div>
        <p className="md:w-3/5 md:mx-auto mx-6 lg:text-3xl md:text-2xl text-xl md:text-justify">
          I enrolled in University of Alberta in 2012. During the first three
          years, I studied Honours Neuroscience in the Faculty of Science.
          <br />
          <br />I decided that engineering is something that I am passionate
          about; therefore, on my third year I decided to switch Majors. I had
          two areas in engineering that I was drawn towards, which are
          Mechanical engineering and Computer software engineering. In the end I
          decided to enroll in Mechanical engineering, because I can learn how
          to program on my own time. I did exactly that, I went to class during
          the day for mechanical engineering and when I got home, I spent time
          learning how to program.
        </p>
      </section>
      <section className="py-24">
        <h1 className="mx-6 md:text-8xl text-6xl font-bold text-purple-900 text-center">
          Skills
        </h1>
        <div className="py-12">
          <Carousel />
        </div>
      </section>
    </main>
  );
};
export default Home;
