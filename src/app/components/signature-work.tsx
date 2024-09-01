"use client";
import React, { useState } from "react";
import Image from "next/image";
import Heading from "./heading";

const signatures = [
  {
    name: "Wedding",
    image: require("../../../public/images/signature/wedding.jpg"),
  },
  {
    name: "Pre-Wedding",
    image: require("../../../public/images/signature/pre-wedding.jpg"),
  },
  {
    name: "Editorial",
    image: require("../../../public/images/signature/editorial.jpg"),
  },
];

const SignatureWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Categories
        </h2>
        <Heading title="Our Signature Work" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {signatures.map((category, index) => (
          <div key={index} className="relative">
            <div className="">
              <span className="text-5xl font-thin text-gray-300 opacity-100">
                0{index + 1}{" "}
              </span>
              <span className="text-2xl font-bold text-gray-400">
                {category.name}
              </span>
            </div>
            <div className="relative aspect-3/4 w-full h-[70vh]">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignatureWork;
