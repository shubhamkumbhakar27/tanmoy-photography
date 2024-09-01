"use client";
import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
import Image from "next/image";

const images = [
  require("../../../public/images/home/1_11zon.jpg"),
  require("../../../public/images/home/2_11zon.jpg"),
  require("../../../public/images/home/3_11zon.jpg"),
  require("../../../public/images/home/4_11zon.jpg"),
  require("../../../public/images/home/5_11zon.jpg"),
  require("../../../public/images/home/6_11zon.jpg"),
  require("../../../public/images/home/7_11zon.jpg"),
  require("../../../public/images/home/8_11zon.jpg"),
  require("../../../public/images/home/9_11zon.jpg"),
  require("../../../public/images/home/10_11zon.jpg"),
  require("../../../public/images/home/11_11zon.jpg"),
  require("../../../public/images/home/12_11zon.jpg"),
  require("../../../public/images/home/13_11zon.jpg"),
  require("../../../public/images/home/14_11zon.jpg"),
  require("../../../public/images/home/15_11zon.jpg"),
  require("../../../public/images/home/16_11zon.jpg"),
];

export const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main className="container mx-auto px-4 md:p-0" id="home">
        <div className="h-40" />
        <div className="relative h-[70vh] overflow-hidden">
          {images.map((image: string, index: number) => (
            <Image
              key={index}
              src={image}
              alt={`image ${index + 1}`}
              fill
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
