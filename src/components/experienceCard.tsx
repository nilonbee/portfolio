import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className="flex flex-col space-x-10 rounded-1 items-center flex-shrink-0 w-[200px] md:w-[300px] xl:w-[600px] snap-center
     bg-[#292929] p-10 transition-opacity hover:opacity-100 opacity-40 curser-pointer overflow-hidden duration-200 mb-10 "
    >
      {/* <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="h-24 w-24 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="article-img"
      /> */}
      <div className="px-0 md:px-10">
        {/* <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="text-bold text-2xl mt-1">{experience?.company}</p> */}
        <div className="flex space-x-2 my-2">
          {/* {experience.technologies?.map((tech) => (
            <img
              className="h-10 w-10 rounded-full"
              key={tech._id}
              src={urlFor(tech.image).url()}
              alt="altimg"
            />
          ))}{" "} */}
        </div>
      </div>
      <p className="upperase py-5 text-gray-300">
        {/* {`Started Work ~ ${experience?.dateStarted}`}{" "} */}
        {/* {experience?.isCurrentlyWorkingHere
          ? "Untill Now"
          : `Ended Work ~ ${experience?.dateEnded}`} */}
      </p>
      <ul className="list-disc space-y-4 ml-5 text-lg h-80">
        {/* {experience?.points?.map((point, key) => {
          console.log("points", point);
          return <li key={key}>{point}</li>;
        })} */}
      </ul>
    </article>
  );
};

export default ExperienceCard;
