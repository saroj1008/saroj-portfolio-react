import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { logo } from "../../assets/index"

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["React Developer", "Full Stack Developer.", "Software Engineer", "Frontend Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">  <img className="w-32" src={logo} alt="logo" /></h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Saroj Regmi</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">

          I'm a Fullstack JavaScript Developer with four years of experience. I use tools like React, React Native, Angular, and Node.js to bring ideas to life in the digital world. I focus on making things interactive and easy to use. Whether it's how things look or how they work behind the scenes, I've got it covered. I keep up with the latest trends to make sure what I create stands out and makes people happy.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner;