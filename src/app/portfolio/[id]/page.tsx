import Footer from "@/app/components/footer";
import Heading from "@/app/components/heading";
import Navbar from "@/app/components/navbar";
import Image from "next/image";

const WEDDING = [
  {
    id: 1,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/2.jpg"),
  },
  {
    id: 2,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/3.jpg"),
  },
  {
    id: 3,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/4.jpg"),
  },
  {
    id: 4,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/5.jpg"),
  },
];

const PRE_WEDDING = [
  {
    id: 1,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/2.jpg"),
  },
  {
    id: 2,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/3.jpg"),
  },
  {
    id: 3,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/4.jpg"),
  },
  {
    id: 4,
    title: "Tanmoy & Suchismita",
    image_src: require("../../../../public/images/portfolio/5.jpg"),
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

const Films = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Navbar selectedLabel="Portfolio" />
      <div className="h-40" />
      <div className="container mx-auto px-4">
        <section>
          <Heading title={PORTFOLIO_MAP.get(params.id)?.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {PORTFOLIO_MAP.get(params.id)?.images.map(
              (image: any, index: number) => (
                <div key={image.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-3/4 w-full h-[60vh]">
                    <Image
                      src={image.image_src}
                      alt={image.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                      <h3 className="text-white text-2xl font-semibold text-center mb-2">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>
      <div className="h-16" />
      <Footer />
    </>
  );
};

export default Films;
