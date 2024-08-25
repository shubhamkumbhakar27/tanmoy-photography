"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./heading";

const PORTFOLIO_IMAGES = [
  require("../../../public/images/varansi_bg.jpeg"),
  require("../../../public/images/portfolio/1.jpg"),
  require("../../../public/images/portfolio/2.jpg"),
  require("../../../public/images/portfolio/3.jpg"),
  require("../../../public/images/portfolio/4.jpg"),
  require("../../../public/images/portfolio/5.JPG"),
  require("../../../public/images/portfolio/1.jpg"),
  require("../../../public/images/portfolio/2.jpg"),
  require("../../../public/images/portfolio/3.jpg"),
  require("../../../public/images/varansi_bg.jpeg"),
  require("../../../public/images/portfolio/4.jpg"),
  require("../../../public/images/portfolio/5.JPG"),
];

const PhotographyPortfolio = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const getRandomSize = () => {
    const sizes = ["small", "medium", "large"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className="container mx-auto px-4 py-8" id="portfolio">
      <Heading title="Photography Portfolio" />
      <div className="h-[200vh] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PORTFOLIO_IMAGES.map((image, index) => {
          const size = getRandomSize();
          return (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer
                ${size === "small" ? "col-span-1 row-span-1" : ""}
                ${
                  size === "medium"
                    ? "col-span-1 row-span-2 sm:col-span-1 sm:row-span-1"
                    : ""
                }
                ${
                  size === "large"
                    ? "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2"
                    : ""
                }
              `}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image
                src={image}
                alt={`Portfolio image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          );
        })}
      </div>

      {selectedImageIndex >= 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImageIndex(-1)}
        >
          <div className="max-w-4xl max-h-full p-4">
            <Image
              src={PORTFOLIO_IMAGES[selectedImageIndex]}
              alt="Selected portfolio image"
              width={1200}
              height={800}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyPortfolio;
