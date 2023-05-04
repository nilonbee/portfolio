import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./experienceCard";
import { Experience } from "../../typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="cursor-pointer transition-opacity duration-200 flex flex-col h-screen overflow-hidden relative text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center hover:opacity-100 opacity-10"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-300 text-2xl">
        Experience
      </h3>
      <div className="absolute h-[90%] overflow-scroll top-[7%] w-screen flex flex-row justify-evenly space-x-5 overflow-x-scroll snap-center snap-mandatory px-24 py-12 scrollbar-thin scrollbar-tracking-gray-500 scrollbar-thumb-[#F7AB0A]">
        {experiences.map((experience, key) => (
          <ExperienceCard experience={experience} key={key} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
