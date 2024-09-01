"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import Heading from "./heading";

const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 40,
      },
    },
  };

  const textVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 40,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16" id="about-us">
      <Heading title="About Tanmoy Photography" />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col md:flex-row items-center"
      >
        <motion.div
          variants={imageVariants}
          className="w-full md:w-1/3 mb-8 md:mb-0 z-10"
        >
          <div className="relative h-80 overflow-hidden shadow-xl md:translate-x-12">
            <Image
              src={require("../../../public/images/profile.jpg")}
              alt="About Us image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="w-full md:w-2/3 p-4 md:p-8 md:pl-20 bg-gray-100 shadow-xl"
        >
          <p className="text-lg text-justify leading-relaxed text-gray-500">
            At Tanmoy Photography, we are a team of experienced and dedicated
            photographers with over a decade of expertise in capturing life’s
            most meaningful moments. We understand the importance of every
            occasion, whether it’s a personal milestone or a professional event,
            and approach each project with passion and precision. Our services
            encompass a wide range of photography specialties, including
            pre-wedding, candid wedding, post-wedding, and other wedding-related
            events. We also excel in kids photography, first rice ceremony
            shoots, and pre-maternity sessions, ensuring that every phase of
            life is beautifully documented.
          </p>
          <p className="text-lg text-justify leading-relaxed text-gray-500">
            Our mission is to create lasting memories that our clients will
            treasure for years to come. We take pride in delivering exceptional
            results that consistently exceed expectations. Based in Asansol
            Rupnarayanpur, we are available to travel globally, ready to bring
            your vision to life wherever you are.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
