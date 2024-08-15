"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

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
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center w-full my-8">
        <div className="flex-grow border-t border-gray-300"></div>
        <h2 className="mx-4 text-2xl font-semibold text-center text-gray-600">
          About Tanmoy Photography
        </h2>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col md:flex-row items-center"
      >
        <motion.div
          variants={imageVariants}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <div className="relative h-80 overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://scontent.fblr1-10.fna.fbcdn.net/v/t1.6435-9/84300361_177131030272730_5097741931102863360_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=zT7UmwRu54UQ7kNvgH83cxk&_nc_ht=scontent.fblr1-10.fna&oh=00_AYDCDEYsXYTyuPtbvv_Uhz3CevjXoEK_LK16SsjVVfPR2w&oe=66DA147B"
              alt="About Us image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
        <motion.div variants={textVariants} className="w-full md:w-1/2 md:pl-8">
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
