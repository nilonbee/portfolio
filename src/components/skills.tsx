import React from "react";
import { motion } from "framer-motion";
import SingleSkill from "./skill";
import { Skill } from "../../typings";

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col xl:flex-row relative 
      xl:px-10 min-h-screen text-center xl:space-y-0 md:text-left max-w-7xl px-10 
      justify-center mb-20 mx-auto items-center"
    >
      <h3 className="text-2xl absolute top-24 uppercase tracking-[20px] text-gray-500 ">
        Skills
      </h3>

      <h3 className="absolute top-[160px] uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="absolute top-[240px] grid grid-cols-4 gap-5">
        {skills.slice(0, skills?.length / 2).map((skill) => (
          <SingleSkill directionLeft={false} skill={skill} key={skill?._id} />
        ))}

        {skills.slice(skills?.length / 2, skills?.length).map((skill) => (
          <SingleSkill directionLeft={true} skill={skill} key={skill?._id} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
