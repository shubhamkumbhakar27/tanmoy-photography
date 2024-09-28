"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  require("../../../public/images/home/1.jpg"),
  require("../../../public/images/home/2.jpg"),
  require("../../../public/images/home/3.jpg"),
  require("../../../public/images/home/4.jpg"),
  require("../../../public/images/home/5.jpg"),
  require("../../../public/images/home/6.jpg"),
  require("../../../public/images/home/7.jpg"),
  require("../../../public/images/home/8.jpg"),
  require("../../../public/images/home/9.jpg"),
  require("../../../public/images/home/10.jpg"),
  require("../../../public/images/home/11.jpg"),
  require("../../../public/images/home/12.jpg"),
  require("../../../public/images/home/13.jpg"),
  require("../../../public/images/home/14.jpg"),
  require("../../../public/images/home/15.jpg"),
  require("../../../public/images/home/16.jpg"),
  require("../../../public/images/home/17.jpg"),
];

export const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(Math.random() * images.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main className="container mx-auto px-4 md:p-0" id="home">
        <div className="h-32" />
        <div className="relative min-h-[40vh] md:min-h-[75vh] overflow-hidden">
          {images.map((image: string, index: number) => (
            <Image
              key={index}
              src={image}
              alt={`image ${index + 1}`}
              fill
              objectFit="contain"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
