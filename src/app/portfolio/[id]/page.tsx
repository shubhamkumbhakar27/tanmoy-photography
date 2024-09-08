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
  require("../../../../public/images/wedding/37.jpg"),
  require("../../../../public/images/wedding/38.jpg"),
  require("../../../../public/images/wedding/39.jpg"),
  require("../../../../public/images/wedding/40.jpg"),
  require("../../../../public/images/wedding/41.jpg"),
  require("../../../../public/images/wedding/42.jpg"),
  require("../../../../public/images/wedding/43.jpg"),
  require("../../../../public/images/wedding/44.jpg"),
  require("../../../../public/images/wedding/45.jpg"),
  require("../../../../public/images/wedding/46.jpg"),
  require("../../../../public/images/wedding/47.jpg"),
  require("../../../../public/images/wedding/48.jpg"),
  require("../../../../public/images/wedding/49.jpg"),
  require("../../../../public/images/wedding/50.jpg"),
  require("../../../../public/images/wedding/51.jpg"),
  require("../../../../public/images/wedding/52.jpg"),
  require("../../../../public/images/wedding/53.jpg"),
  require("../../../../public/images/wedding/54.jpg"),
  require("../../../../public/images/wedding/55.jpg"),
  require("../../../../public/images/wedding/56.jpg"),
  require("../../../../public/images/wedding/57.jpg"),
  require("../../../../public/images/wedding/58.jpg"),
  require("../../../../public/images/wedding/59.jpg"),
  require("../../../../public/images/wedding/60.jpg"),
  require("../../../../public/images/wedding/61.jpg"),
  require("../../../../public/images/wedding/62.jpg"),
  require("../../../../public/images/wedding/63.jpg"),
  require("../../../../public/images/wedding/64.jpg"),
  require("../../../../public/images/wedding/65.jpg"),
  require("../../../../public/images/wedding/66.jpg"),
  require("../../../../public/images/wedding/67.jpg"),
  require("../../../../public/images/wedding/68.jpg"),
  require("../../../../public/images/wedding/69.jpg"),
  require("../../../../public/images/wedding/70.jpg"),
  require("../../../../public/images/wedding/71.jpg"),
  require("../../../../public/images/wedding/72.jpg"),
  require("../../../../public/images/wedding/73.jpg"),
];

const PRE_WEDDING = [
  require("../../../../public/images/pre-wedding/1.jpg"),
  require("../../../../public/images/pre-wedding/2.jpg"),
  require("../../../../public/images/pre-wedding/3.jpg"),
  require("../../../../public/images/pre-wedding/4.jpg"),
  require("../../../../public/images/pre-wedding/5.jpg"),
  require("../../../../public/images/pre-wedding/6.jpg"),
  require("../../../../public/images/pre-wedding/7.jpg"),
  require("../../../../public/images/pre-wedding/8.jpg"),
  require("../../../../public/images/pre-wedding/9.jpg"),
  require("../../../../public/images/pre-wedding/10.jpg"),
  require("../../../../public/images/pre-wedding/11.jpg"),
  require("../../../../public/images/pre-wedding/12.jpg"),
  require("../../../../public/images/pre-wedding/13.jpg"),
  require("../../../../public/images/pre-wedding/14.jpg"),
  require("../../../../public/images/pre-wedding/15.jpg"),
  require("../../../../public/images/pre-wedding/16.jpg"),
  require("../../../../public/images/pre-wedding/17.jpg"),
  require("../../../../public/images/pre-wedding/18.jpg"),
  require("../../../../public/images/pre-wedding/19.jpg"),
  require("../../../../public/images/pre-wedding/20.jpg"),
  require("../../../../public/images/pre-wedding/21.jpg"),
  require("../../../../public/images/pre-wedding/22.jpg"),
  require("../../../../public/images/pre-wedding/23.jpg"),
  require("../../../../public/images/pre-wedding/24.jpg"),
  require("../../../../public/images/pre-wedding/25.jpg"),
  require("../../../../public/images/pre-wedding/26.jpg"),
];

const EDITORIAL = [
  require("../../../../public/images/signature/editorial.jpg"),
];

const BABY_SHOOT = [
  require("../../../../public/images/baby-shoot/1.jpg"),
  require("../../../../public/images/baby-shoot/2.jpg"),
  require("../../../../public/images/baby-shoot/3.jpg"),
  require("../../../../public/images/baby-shoot/4.jpg"),
  require("../../../../public/images/baby-shoot/5.jpg"),
  require("../../../../public/images/baby-shoot/6.jpg"),
  require("../../../../public/images/baby-shoot/7.jpg"),
  require("../../../../public/images/baby-shoot/12.jpg"),
  require("../../../../public/images/baby-shoot/8.jpg"),
  require("../../../../public/images/baby-shoot/9.jpg"),
  require("../../../../public/images/baby-shoot/10.jpg"),
  require("../../../../public/images/baby-shoot/11.jpg"),
];
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
              "h-[70vh] grid-cols-1 lg:grid-cols-1":
                PORTFOLIO_MAP.get(params.id)?.images.length < 4,
            },
            {
              "h-[400vh]": PORTFOLIO_MAP.get(params.id)?.images.length > 15,
            },
            {
              "h-[800vh]": PORTFOLIO_MAP.get(params.id)?.images.length > 30,
            },
            {
              "h-[1200vh]": PORTFOLIO_MAP.get(params.id)?.images.length > 45,
            },
            {
              "h-[1400vh]": PORTFOLIO_MAP.get(params.id)?.images.length > 60,
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
