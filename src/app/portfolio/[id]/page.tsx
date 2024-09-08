"use client";
import Footer from "@/app/components/footer";
import Heading from "@/app/components/heading";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import clsx from "clsx";
const WEDDING = [
  {
    id: 1,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/2.jpg"),
  },
  {
    id: 2,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/3.jpg"),
  },
  {
    id: 3,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/4.jpg"),
  },
  {
    id: 4,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/5.jpg"),
  },
];

const PRE_WEDDING = [
  {
    id: 1,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/1.jpg"),
  },
  {
    id: 2,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/2.jpg"),
  },
  {
    id: 3,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/3.jpg"),
  },
  {
    id: 4,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/4.jpg"),
  },
  {
    id: 5,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/5.jpg"),
  },
  {
    id: 6,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/6.jpg"),
  },
  {
    id: 7,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/7.jpg"),
  },
  {
    id: 8,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/8.jpg"),
  },
  {
    id: 9,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/9.jpg"),
  },
  {
    id: 10,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/10.png"),
  },
  {
    id: 11,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/11.jpg"),
  },
  {
    id: 12,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/12.jpg"),
  },
  {
    id: 13,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/13.jpg"),
  },
  {
    id: 14,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/14.jpg"),
  },
  {
    id: 15,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/15.jpg"),
  },
  {
    id: 16,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/16.jpg"),
  },
  {
    id: 17,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/17.jpg"),
  },
  {
    id: 18,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/18.jpg"),
  },
  {
    id: 19,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/19.jpg"),
  },
  {
    id: 20,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/pre-wedding/20.jpg"),
  },
];

const EDITORIAL = [
  {
    id: 1,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/2.jpg"),
  },
];

const BABY_SHOOT = [
  {
    id: 1,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/2.jpg"),
  },
];
const FASHION = [
  {
    id: 1,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/2.jpg"),
  },
];

const MATERNITY_SHOOT = [
  {
    id: 1,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/2.jpg"),
  },
];
const ENGAGEMENT = [
  {
    id: 1,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/2.jpg"),
  },
];

const PRODUCT_SHOOT = [
  {
    id: 1,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/2.jpg"),
  },
];

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
                    src={image.image_src}
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
                src={
                  PORTFOLIO_MAP.get(params.id)?.images[selectedImageIndex]
                    .image_src
                }
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
