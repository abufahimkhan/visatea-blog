"use client";
import { images } from "@/utils/images";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const FlagsIcon = () => {
  const countries = [
    { name: "USA", flag: images.usaFlag },
    { name: "Canada", flag: images.canadaFlag },
    { name: "Australia", flag: images.australiaFlag },
    { name: "UK", flag: images.ukFlag },
    // { name: 'Denmark', flag: images.denmarkFlag },
    { name: "Finland", flag: images.finlandFlag },
    { name: "Sweden", flag: images.swedenFlag },
    // { name: 'Germany', flag: images.germanyFlag },
    // { name: 'Norway', flag: images.norwayFlag },
    // { name: 'Japan', flag: images.japanFlag },
    // { name: 'Malaysia', flag: images.malaysiaFlag },
    // { name: 'Vietnam', flag: images.vietnamFlag },
    // { name: 'Dubai', flag: images.dubaiFlag },
  ];

  // Animation variants for the marquee effect
  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"], // Slide the entire row from 0% to -100%
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Adjust the speed of the animation
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="mt-8">
      <div className="flex flex-row items-center gap-2">
        <FaGlobe className="text-blue-700" title="Global" size={20} />
        <h3 className="text-xl font-bold text-gray-500">
          Processing Countries
        </h3>
      </div>
      <div className="overflow-hidden mt-4 bg-slate-100">
        <motion.div
          className="flex"
          variants={marqueeVariants}
          animate="animate"
        >
          {/* First set of flags */}
          {countries.map((country) => (
            <div key={country.name} className="flex flex-col items-center mx-4">
              <Image
                src={country.flag}
                alt={`${country.name} Flag`}
                width={80} // Set a fixed width
                height={60} // Set a fixed height
                className="object-contain" // Maintain aspect ratio
              />
              <span className="mt-1 text-sm text-gray-700">{country.name}</span>
            </div>
          ))}

          {/* Duplicate the set of flags for continuous scrolling */}
          {countries.map((country) => (
            <div key={country.name} className="flex flex-col items-center mx-4">
              <Image
                src={country.flag}
                alt={`${country.name} Flag`}
                width={80} // Set a fixed width
                height={50} // Set a fixed height
                className="object-contain" // Maintain aspect ratio
              />
              <span className="mt-1 text-sm text-gray-700">{country.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FlagsIcon;
