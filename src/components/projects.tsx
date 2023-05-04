import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="cursor-pointer transition-opacity duration-200 flex 
      flex-col h-screen overflow-hidden relative text-left md:flex-row 
      max-w-full px-10 justify-evenly mx-auto items-center hover:opacity-100 opacity-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-tracking-gray-500 scrollbar-thumb-[#F7AB0A]">
        {projects.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-x-5 items-center justify-center p-20 md:p-44 h-center"
            key={index}
          >
            <motion.img
              className="h-32 w-32 rounded-full opacity-0.5 hover:opacity-1"
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt="imgex"
            />
            <div className="space-y-10 px-0 md:px-10 max-6xl">
              <h4 className="text-4xl font-semibold text-center ">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {index + 1} of {projects?.length}
                </span>
                {": "}
                {project?.title}
              </h4>
              <div className="flex flex-row space-x-2 justify-center">
                {project?.technologies.map((tech) => (
                  <img
                    key={tech._id}
                    className="h-12 w-12 rounded-full"
                    src={urlFor(tech.image).url()}
                    alt="imgss"
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project?.summery}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
