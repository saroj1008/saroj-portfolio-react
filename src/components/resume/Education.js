import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div style={{ width: "60%" }}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Academic Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master in Software Development"
            subTitle="Maharishi International University Fairfield, IA (2022 - 2023)"
            result="3.91/4"
            des="MSD program is dedicated to offering a thorough training experience in full stack software development. Through a combination of academic instruction and hands-on projects, immerse in key technologies such as JavaScript, React, Angular, Nodejs and more... "
          />
          <ResumeCard
            title="BE in Civil Engineering"
            subTitle="East West Institue of Technology, VTU, Bangalore, India (2012 - 2016)"
            result="3.8/4.0"
            des="Major Subjects: Mathematics I-IV, Programming in C, Structural Analysis and Design, Environmental Engineering, Hydraulics and Water Resources Engineering, Geotechnical Engineering and more..."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Orchid Science College, Chitwan, Nepal (2010 - 2011)"
            result="3.5/4.0"
            des="Concentration in Science Subjects: Physics, Chemistry, Mathematics, Biology and more..."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Sky Tree Solution - (20** - 20**)"
            result="Nepal"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Associate Software Engineer"
            subTitle="Sky Tree Solution - (20** - 20**)"
            result="Nepal"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education;