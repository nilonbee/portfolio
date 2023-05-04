import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  skill: Skill;
  directionLeft: boolean;
};

const SingleSkill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex curser-pointer">
      <motion.img
        initial={
          directionLeft ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }
        }
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="border border-gray-500 object-cover xl:w-24 xl:h-24 filter md:h-20 md:w-20
         group-hover:grayscale transition duration-300 ease-in-out w-16 h-16 rounded-full "
        src={urlFor(skill?.image).url()}
        alt="imgex"
      />
      <div
        className="absolute group-hover:opacity-80 
      transition duration-300 ease-in-out group-hover:bg-white 
      h-16 w-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full  opacity-0 z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleSkill;
