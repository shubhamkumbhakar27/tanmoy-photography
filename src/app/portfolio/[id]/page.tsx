"use client";
import Footer from "@/app/components/footer";
import Heading from "@/app/components/heading";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import clsx from "clsx";
const WEDDING = [
  require("../../../../public/images/wedding/1.jpg"),
  require("../../../../public/images/wedding/2.jpg"),
  require("../../../../public/images/wedding/3.jpg"),
  require("../../../../public/images/wedding/4.jpg"),
  require("../../../../public/images/wedding/5.jpg"),
  require("../../../../public/images/wedding/6.jpg"),
  require("../../../../public/images/wedding/7.jpg"),
  require("../../../../public/images/wedding/8.jpg"),
  require("../../../../public/images/wedding/9.jpg"),
  require("../../../../public/images/wedding/10.jpg"),
  require("../../../../public/images/wedding/11.jpg"),
  require("../../../../public/images/wedding/12.jpg"),
  require("../../../../public/images/wedding/13.jpg"),
  require("../../../../public/images/wedding/14.jpg"),
  require("../../../../public/images/wedding/15.jpg"),
  require("../../../../public/images/wedding/16.jpg"),
  require("../../../../public/images/wedding/17.jpg"),
  require("../../../../public/images/wedding/18.jpg"),
  require("../../../../public/images/wedding/19.jpg"),
  require("../../../../public/images/wedding/20.jpg"),
  require("../../../../public/images/wedding/21.jpg"),
  require("../../../../public/images/wedding/22.jpg"),
  require("../../../../public/images/wedding/23.jpg"),
  require("../../../../public/images/wedding/24.jpg"),
  require("../../../../public/images/wedding/25.jpg"),
  require("../../../../public/images/wedding/26.jpg"),
  require("../../../../public/images/wedding/27.jpg"),
  require("../../../../public/images/wedding/28.jpg"),
  require("../../../../public/images/wedding/29.jpg"),
  require("../../../../public/images/wedding/30.jpg"),
  require("../../../../public/images/wedding/31.jpg"),
  require("../../../../public/images/wedding/32.jpg"),
  require("../../../../public/images/wedding/33.jpg"),
  require("../../../../public/images/wedding/34.jpg"),
  require("../../../../public/images/wedding/35.jpg"),
  require("../../../../public/images/wedding/36.jpg"),
];

const PRE_WEDDING = [
  require("../../../../public/images/wedding/1.jpg"),
  require("../../../../public/images/wedding/2.jpg"),
  require("../../../../public/images/wedding/3.jpg"),
  require("../../../../public/images/wedding/4.jpg"),
  require("../../../../public/images/wedding/5.jpg"),
  require("../../../../public/images/wedding/6.jpg"),
  require("../../../../public/images/wedding/7.jpg"),
  require("../../../../public/images/wedding/8.jpg"),
  require("../../../../public/images/wedding/9.jpg"),
  require("../../../../public/images/wedding/10.jpg"),
];

const EDITORIAL = [
  require("../../../../public/images/wedding/1.jpg"),
  require("../../../../public/images/wedding/2.jpg"),
  require("../../../../public/images/wedding/3.jpg"),
];

const BABY_SHOOT = [require("../../../../public/images/wedding/1.jpg")];
const FASHION = [require("../../../../public/images/wedding/1.jpg")];

const MATERNITY_SHOOT = [require("../../../../public/images/wedding/1.jpg")];
const ENGAGEMENT = [require("../../../../public/images/wedding/1.jpg")];

const PRODUCT_SHOOT = [require("../../../../public/images/wedding/1.jpg")];

const PORTFOLIO_MAP = new Map();

PORTFOLIO_MAP.set("wedding", { heading: "Wedding", images: WEDDING });
PORTFOLIO_MAP.set("pre-wedding", {
  heading: "Pre-wedding",
  images: PRE_WEDDING,
});
PORTFOLIO_MAP.set("editorial", {
  heading: "Editorial",
  images: EDITORIAL,
});
PORTFOLIO_MAP.set("baby-shoot", {
  heading: "Baby Shoot",
  images: BABY_SHOOT,
});
PORTFOLIO_MAP.set("fashion", {
  heading: "Fashion",
  images: FASHION,
});
PORTFOLIO_MAP.set("meternity-shoot", {
  heading: "Maternity Shoot",
  images: MATERNITY_SHOOT,
});
PORTFOLIO_MAP.set("engagement", {
  heading: "Engagement",
  images: ENGAGEMENT,
});
PORTFOLIO_MAP.set("product-shoot", {
  heading: "Product Shoot",
  images: PRODUCT_SHOOT,
});

const Portfolio = ({ params }: { params: { id: string } }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const randomSizes = useMemo(() => {
    const n = PORTFOLIO_MAP.get(params.id)?.images.length || 0;
    return getRandomSizeArray(n);
  }, [params.id]);

  return (
    <>
      <Navbar selectedLabel="Portfolio" />
      <div className="h-40" />
      <div className="container mx-auto px-4" id="portfolio">
        <Heading title={PORTFOLIO_MAP.get(params.id)?.heading} />
        <div
          className={clsx(
            " grid h-[200vh] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
            {
              "h-[400vh]": PORTFOLIO_MAP.get(params.id)?.images.length > 15,
            }
          )}
        >
          {PORTFOLIO_MAP.get(params.id)?.images.map(
            (image: any, index: number) => {
              const size = randomSizes[index];
              return (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden shadow-lg cursor-pointer
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
            }
          )}
        </div>

        {selectedImageIndex >= 0 && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImageIndex(-1)}
          >
            <div className="max-w-4xl max-h-full p-4">
              <Image
                src={PORTFOLIO_MAP.get(params.id)?.images[selectedImageIndex]}
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
      <div className="h-16" />
      <Footer />
    </>
  );
};

function getRandomSizeArray(n: number) {
  const sizes = ["small", "medium", "large"];
  return Array.from(
    { length: n },
    () => sizes[Math.floor(Math.random() * sizes.length)]
  );
}

export default Portfolio;
