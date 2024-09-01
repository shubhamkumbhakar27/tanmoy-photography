"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Heading from "./heading";

const testimonials = [
  {
    id: 1,
    name: "Tanmoy & Suchismita",
    image: require("../../../public/images/portfolio/3.jpg"),
    text: "We couldn't be happier with our wedding photos! The photographer captured every special moment beautifully, from the intimate exchanges to the grand celebrations. Their artistic eye and professionalism made us feel completely at ease throughout the day. The resulting album tells the story of our wedding day perfectly, and we'll treasure these memories forever. Highly recommend for any couple looking for stunning, heartfelt photography.",
  },
  {
    id: 2,
    name: "Tanmoy & Suchismita",
    image: require("../../../public/images/portfolio/4.jpg"),
    text: "Choosing this photography service for our wedding was one of the best decisions we made. The attention to detail was impeccable, and they had an amazing ability to capture candid moments that truly reflected the joy and love of our special day. The photographer's creativity and use of natural light resulted in breathtaking images that far exceeded our expectations. We're so grateful for the beautiful memories they've given us.",
  },
  // Add more testimonials as needed
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeTestimonial = useCallback(
    (newIndex: any) => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          typeof newIndex === "function" ? newIndex(currentIndex) : newIndex
        );
        setIsAnimating(false);
      }, 500); // Match this with the CSS transition time
    },
    [currentIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial((prevIndex: any) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [changeTestimonial]);

  const goToPrevious = () => {
    changeTestimonial((prevIndex: any) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    changeTestimonial((prevIndex: any) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        <Heading title="What Our Clients Say" />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center">
            <button
              onClick={goToPrevious}
              className="absolute left-0 z-10 bg-transparent rounded-full p-2 shadow-sm hover:shadow-lg transition-colors"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div
              className={`flex-1 flex flex-col md:flex-row items-center transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <div className="relative w-74 h-[60vh] mx-auto overflow-hidden rounded-sm shadow-lg">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 md:pl-12">
                <blockquote className="text-sm italic mb-4 text-gray-500 text-justify">
                  {testimonials[currentIndex].text}
                </blockquote>
                <p className="font-semibold text-right text-gray-600">
                  - {testimonials[currentIndex].name}
                </p>
              </div>
            </div>
            <button
              onClick={goToNext}
              className="absolute right-0 z-10 bg-transparent rounded-full p-2 shadow-sm hover:shadow-lg transition-colors"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
