import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des=" A dynamic MERN stack bookstore website offering a seamless browsing and shopping experience for book enthusiasts with robust features and functionality."
          src={projectOne}
        />
        <ProjectsCard
          title="Personal Portfolio"
          des=" A sleek portfolio website built with React and styled with Tailwind CSS, showcasing creativity and skills through elegant design and responsiveness."
          src={projectTwo}
        />
        <ProjectsCard
          title="Restaurant Application"
          des="A React Native restaurant application, powered by a Node.js backend, offering menu browsing, note-taking, and rating features for enhanced dining."
          src={projectThree}
        />
        <ProjectsCard
          title="Music Application"
          des="A music application developed with React and backed by Node.js, featuring play, pause, next, song addition, and playlist management capabilities"
          src={projectFour}
        />
        <ProjectsCard
          title="Split wise Application"
          des="An Angular MEAN stack Splitwise application offering group management and various other features for streamlined expense tracking and sharing."
          src={projectFive}
          
        />
      </div>
    </section>
  );
}

export default Projects