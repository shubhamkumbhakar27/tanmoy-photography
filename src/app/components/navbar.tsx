"use client";
import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import Link from "next/link";
export default function Navbar() {
  const smoothScroll = (e: any, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white/50 p-4 fixed w-full h-24 flex justify-between z-30">
      <div className="container mx-auto flex justify-between items-center border">
        <Link href="/" className="text-white font-bold text-xl">
          <div className="relative h-32 w-32">
            <Image
              src={require("../../../public/images/logo.png")}
              alt="Tanmoy Photography"
              fill
            />
          </div>
        </Link>
        <div className="space-x-4 md:space-x-8 pr-4">
          <Link
            href="#portfolio"
            className="text-sm md:text-md text-gray-500 hover:text-gray-700"
            onClick={(e) => smoothScroll(e, "portfolio")}
          >
            PORTFOLIO
          </Link>
          <Link
            href="#contact-us"
            className="text-sm md:text-md text-gray-500 hover:text-gray-700"
            onClick={(e) => smoothScroll(e, "contact-us")}
          >
            REACH OUT
          </Link>
        </div>
      </div>
    </div>
  );
}
