"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-gray-400 bg-[#0D0214] body-font font-medium"
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={containerVariants}
        >
          <motion.h1
            className="title-font sm:text-4xl text-3xl md:text-4xl mb-4 font-medium text-white"
            variants={childVariants}
          >
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten For everyone!
          </motion.h1>
          <motion.p className="mb-8 leading-relaxed text-lg" variants={childVariants}>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </motion.p>
          <motion.div className="flex justify-center" variants={childVariants}>
            {/* <motion.button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Button
            </motion.button> */}
            {/* <motion.button
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Button
            </motion.button> */}
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Image
            className="object-cover object-center rounded hero"
            alt="hero"
            src="/images/bg.png"
            width={720}
            height={600}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
