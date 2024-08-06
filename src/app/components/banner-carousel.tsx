import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const bannerImages = [
  "https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/409777094_3648411985412698_4508842612122428200_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WMh_9ZFl6soQ7kNvgGZQi05&_nc_ht=scontent.fblr1-7.fna&oh=00_AYAb1Jwi8EC-le3RrkecbDi5nHUQTX9Me_Xv8w9EG6dDww&oe=66B8400A",
  "https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/409839319_3648412342079329_3095707532013388999_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nm9Ydg_e-YoQ7kNvgEpTcK9&_nc_ht=scontent.fblr1-7.fna&oh=00_AYC2gTH_ClrzZpCwnoeXEbI93e8Tbe9L1Zc2V42Ljyc4OA&oe=66B88FA7",
  "https://scontent.fblr1-10.fna.fbcdn.net/v/t39.30808-6/409842719_3648413028745927_687697329008511584_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J-NdPPQN2GUQ7kNvgFS3d7z&_nc_ht=scontent.fblr1-10.fna&oh=00_AYDjDZU61SZPkEnt3nWx_nEGOAsh1x2sDZkwaUldVojiww&oe=66B883E3",
  "https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/409817546_3648412765412620_8161193638096753166_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BgkNSPEkm98Q7kNvgGh8Voz&_nc_ht=scontent.fblr1-7.fna&oh=00_AYDQl2j1bHBAzrEzoNQRtBXpPrU9FmtRj7IdFTXi7lcaRg&oe=66B86D9F",
];

const BannerCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Slider {...settings}>
        {bannerImages.map((image, index) => (
          <div key={index} className="relative h-screen">
            <AnimatePresence>
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt={`Banner image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Welcome to Our Website
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8">
                  Discover amazing experiences with us
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
