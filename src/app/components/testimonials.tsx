"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Heading from "./heading";

const reviews = [
  {
    id: 1,
    author: "Chandrima Chatterjee",
    content: `Valo bole tmr kaj k boro korar khomota nei. Tobe Jotota korcho Just Osadharon, sorir k sustho rekhe ro onek valo korte hbe. God bless you abundantly. Tmk vogoban ei khomota diyeche j sobar sundor muhurto guloke jotne dhore rakhar, abar dekhe sei muhurte fire jabar sujog koriye debar.  💝`,
    image: require("../../../public/images/home/1.jpg"),
  },
  {
    id: 2,
    author: "Partha Sarathi Maji",
    content: `Your work is so good that we both feel blessed. We'd like to work with you in the future.`,
    image: require("../../../public/images/home/3.jpg"),
  },
  {
    id: 3,
    author: "Anurab Roy",
    content: `Tanmoy was the best photographer I have ever hired. On time. Followed through on everything he said he would do. Would highly recommend him to family, friends and business associates`,
    image: require("../../../public/images/home/2.jpg"),
  },
  {
    id: 4,
    author: "Suman Paul",
    content: `Pre-Wedding" photos & video, "Wedding-reception" photos & video all done very well by Tanmoy Da. We got the wedding album today. All the photos are arranged very nicely and the quality of the all page is amazing. Looking at the album pages, it seems that there will be no problem for life time. All in all the work has been very nice. 👌❤\nOne more thing must be said, that is since the booking, has become a good friendship with Tanmoy Da, like a family member. I will contact you again if I need photography in the future. Many wishes from my family for your good work. Keep up the good work in the future. 😊👍`,
    image: require("../../../public/images/home/3.jpg"),
  },
  {
    id: 5,
    author: "Tiya Mondal",
    content: `bhir me khoye ye chehere kaid kar tu lata hai,  bite hue hai ye manjar jo hume dikhlata hai,  char kono k hi andar chupe jo jajwat hai,  dekhte hi dil kahe \n wah kya baat hai.. \n wah kya baat hai... \n 💖💖💖💖💖💖💖`,
    image: require("../../../public/images/home/1.jpg"),
  },
  {
    id: 6,
    author: "Oendrila Das",
    content: `u r really osm 😌 photography niye blte suru krle ses hbe na ❤ akta choto jinis k ki vabbe futiye tulte hy photographyr sahaje seta tmi khub vlo kore jno 😌 r o vlo jayega te jao ata e asa kori`,
    image: require("../../../public/images/home/2.jpg"),
  },
  {
    id: 7,
    author: "Mridul Chandra Paul",
    content: `Great work bro..\nYour every shot is very realistic. \nwe are beside you every time.\nGod bless you.\nwork hard & all the best for your aim.`,
    image: require("../../../public/images/home/3.jpg"),
  },
];

const FacebookReviewsCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentReview(
      (prevReview) => (prevReview - 1 + reviews.length) % reviews.length
    );
  };

  const goToNext = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  return (
    <section className="container w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .blink {
          animation: blink 0.3s ease-in-out;
        }
        .review-content {
          white-space: pre-line;
        }
      `}</style>
      <div className="p-4">
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            Testimonials
          </h2>
          <Heading title="Facebook Reviews" />
        </div>
        <div className="relative h-[60vh]">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentReview ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-gray-100 p-4 h-full flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 h-full border">
                  <div className="relative h-full flex flex-col justify-center items-center">
                    <Image
                      src={review.image}
                      alt={`${review.author}'s profile`}
                      className="transition-opacity duration-1000"
                      objectFit="cover"
                      fill
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-800 italic px-1 text-justify review-content max-h-[60%] overflow-scroll">{`"${review.content}"`}</p>
                  <div className="h-16" />
                  <p className="font-semibold text-gray-700 text-end">
                    {`- ${review.author}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={goToPrevious}
            className="text-white font-bold py-1 px-4 focus:outline-none focus:shadow-outline"
          >
            <ChevronLeft size={24} color="#2563eb" />
          </button>
          <button
            onClick={goToNext}
            className="text-white font-bold py-1 px-4 focus:outline-none focus:shadow-outline"
          >
            <ChevronRight size={24} color="#2563eb" />
          </button>
        </div>
      </div>
      <div className="flex justify-center pb-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mx-1 focus:outline-none ${
              index === currentReview ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentReview(index)}
          />
        ))}
      </div>
      <div className="flex justify-center pb-6">
        <a
          href="https://www.facebook.com/tanmoyphotography93/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center"
        >
          View All Reviews on Facebook
          <ExternalLink size={18} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default FacebookReviewsCarousel;
