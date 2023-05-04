import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = () => {
  // { pageInfo }: Props
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly mb-20 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 ">
        ABOUT
      </h3>
      {/* <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src={urlFor(pageInfo?.profilePic).url()}
        alt="image"
      /> */}
      <div className="space-y-10 px-10 md:px-10">
        <h4 className="font-semibold text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        {/* <p className="text-sm">{pageInfo?.backgroundInformation}</p> */}
      </div>
    </motion.div>
  );
};

export default About;
