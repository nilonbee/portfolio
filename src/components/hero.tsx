import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

import BackgroundCircles from "./backgroundCircles";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
   const [text, count] = useTypewriter({
    words: [
      "I'm Nilan",
      `${pageInfo?.role}`,
      "With React js and Next JS",
      "Building Awesome and more cleaner UI",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        // src="https://drive.google.com/file/d/1X5RY2HSAngezYTz8Am8Sc4FQNTrKGSpG/view?usp=share_link"
        src={urlFor(pageInfo?.heroImage).url()}
      />

      <div className="z-20">
        <h2 className="text-gray-500  pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1>
          <span className="text-2xl tracking-[5px] lg:text-6xl font-semibold px-2 text-blue-400">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
