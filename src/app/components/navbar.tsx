import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div className="h-24 bg-white/50 flex justify-between items-center px-32 fixed w-full z-20">
      <div className="h-24 flex items-center">
        <Image
          src="https://static.vecteezy.com/system/resources/thumbnails/027/971/388/small_2x/3d-render-round-warm-orange-fire-flame-icon-realistic-hot-sparks-light-gas-logo-design-for-emoticon-energy-power-ui-png.png"
          alt="Picture of the author"
          width={70}
          height={70}
        />
      </div>

      <div className="w-3/5 items-center flex justify-end gap-24 px-12">
        <div>
          <a href="/portfolio">
            <p className="text-lg text-gray-500 font-bold">PORTFOLIO</p>
          </a>
        </div>
        <div>
          <a href="/contact-us">
            <p className="text-lg text-gray-500 font-bold">REACH OUT</p>
          </a>
        </div>
      </div>
    </div>
  );
}
