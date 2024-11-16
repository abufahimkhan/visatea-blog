"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { nanoid } from "nanoid";
import { ServiceData } from "./ServiceData";

const ServiceCard: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="services" className="py-8 bg-white sm:py-10 lg:py-12 overflow-hidden">
      <div className="px-4 w-full sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="lg:text-3xl text-lg font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 lg:text-lg text-sm text-gray-600 max-w-2xl mx-auto">
            Empowering your journey with our expert support and visa assistance.
          </p>
        </div>

        <div className="mt-10 max-w-[90vw]">
          <Slider {...settings}>
            {ServiceData.map((service) => (
              <div key={nanoid()} className="p-4">
                <div className="flex flex-col items-center h-44 bg-white rounded-lg border border-gray-300 p-6 duration-300 hover:shadow-md">
                  {/* Icon container with consistent size, color, and rounded shape */}
                  <div className={`p-2 rounded-full flex justify-center items-center ${service.bgColor}`}>
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
