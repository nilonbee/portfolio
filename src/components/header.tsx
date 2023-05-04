import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Social } from "../../typings";

type Props = {
  socials: Social[];
};

const Header = () => {
  // { socials }: Props
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        {/* {socials.map((item, key) => (
          <SocialIcon
            key={key}
            url={item.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))} */}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-300 curser-pointer"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
