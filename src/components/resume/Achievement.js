import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div style={{ width: "60%" }}>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React: Design Patterns"
            subTitle=" LinkedIn Learning"
            result="Success"
            des="The React: Design Patterns course on LinkedIn Learning likely provides a structured and hands-on approach to learning these patterns. It might include video lectures, practical coding exercises, and examples that demonstrate how to apply these patterns effectively to real-world React projects."
          />

          <ResumeCard
            title="Node (Basic)"
            subTitle="Hacker Rank"
            result="Success"
            des="I am pleased to announce that I have received the HackerRank Node.js Basic certification."
          />
          <ResumeCard
            title="React (Basic)"
            subTitle="Hacker Rank"
            result="Success"
            des="I am pleased to announce that I have received the HackerRank React Basic certification."
          />
          <ResumeCard
            title="The Complete 2023 Web Development Bootcamp"
            subTitle="Udemy"
            result="Success"
            des="I completed 'The Complete 2023 Web Development Bootcamp,' and I must say it's an outstanding and up-to-date course that covers a wide range of web development technologies and practices. This bootcamp offers comprehensive, hands-on training in web development, making it suitable for both beginners and intermediate learners."
          />

        </div>

      </div>
      <div>
        {/* <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2> */}
      </div>
      {/* <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Achievement;
