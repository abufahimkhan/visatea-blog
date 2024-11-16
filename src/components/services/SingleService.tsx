import { nanoid } from "nanoid";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { MdAccessTime, MdSchool } from "react-icons/md";
import { images } from "../../utils/images";

const services = [
  {
    title: "Visa Types",
    description:
      "Assistance with various visa types, ensuring a smooth application process.",
    icon: <BiSupport className="text-blue-500" />,
  },
  {
    title: "High Success Rate",
    description: "Over 100% visa approval for worldwide applications.",
    icon: <AiFillStar className="text-yellow-500" />,
  },
  {
    title: "Comprehensive Support",
    description: "From application to accommodation assistance.",
    icon: <MdAccessTime className="text-blue-500" />,
  },
  {
    title: "Personalized Guidance",
    description: "Tailored advice for every visa type.",
    icon: <MdSchool className="text-green-500" />,
  },
  {
    title: "Job Placement Assistance",
    description: "Helping you find part-time job opportunities while studying.",
    icon: <FaPhoneAlt className="text-purple-500" />,
  },
  {
    title: "Scholarship Opportunities",
    description:
      "Information on scholarships available for international students.",
    icon: <GiGraduateCap className="text-red-500" />,
  },
  {
    title: "Pre-Departure Support",
    description: "Guidance on travel preparations and cultural orientation.",
    icon: <MdAccessTime className="text-teal-500" />,
  },
  {
    title: "Post-Departure Assistance",
    description: "Help with settling in and finding accommodation.",
    icon: <AiFillStar className="text-yellow-500" />,
  },
];

// This array now contains just the flags for the countries using the images from the imported images object.
const countryFlags = [
  { name: "USA", flag: images.usaFlag },
  { name: "Canada", flag: images.canadaFlag },
  { name: "Australia", flag: images.australiaFlag },
  { name: "UK", flag: images.ukFlag },
  { name: "Germany", flag: images.germanyFlag },
  { name: "Sweden", flag: images.swedenFlag },
  { name: "Finland", flag: images.finlandFlag },
  { name: "Denmark", flag: images.denmarkFlag },
  { name: "Malaysia", flag: images.malaysiaFlag },
  { name: "Vietnam", flag: images.vietnamFlag },
  { name: "Dubai", flag: images.dubaiFlag },
];

const SingleService = () => {
  return (
    <div className="p-5 max-w-full bg-white shadow-lg">
      {/* Header Section with Blurry Background */}
      <div className="relative min-w-full h-96 md:h-[450px] overflow-hidden">
        <Image
          src="/service/service.png"
          alt="Banner Image"
          layout="fill"
          objectFit="contain"
          className="absolute w-full h-full inset-0"
        />
      </div>

      <section className="mb-8 mt-8 text-center">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Secure Your Future with Our Student Visa Services
        </h2>
        <p className="text-gray-800 mb-4">
          MOI accepted, no service fee required!
        </p>
        <div className="flex justify-center items-center mb-4">
          <FaPhoneAlt className="text-blue-500 mr-2" />
          <span className="font-semibold text-black">
            CALL NOW: <span className="text-blue-600">01798-148695</span>
          </span>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {services.map((service) => (
          <div
            key={nanoid()}
            className="bg-gray-200 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Unlock Study Opportunities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-200 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-black mb-4">
              Discover Why Studying In The USA Offers Unparalleled
              Opportunities:
            </h3>
            <ul className="list-disc text-slate-600 list-inside space-y-2">
              <li className="flex items-center">
                <GiGraduateCap className="text-green-500 mr-2" />
                5-year multiple entry visa
              </li>
              <li className="flex items-center">
                <GiGraduateCap className="text-green-500 mr-2" />
                Prestigious and globally recognized universities
              </li>
              <li className="flex items-center">
                <GiGraduateCap className="text-green-500 mr-2" />
                Low/reasonable tuition fees
              </li>
              <li className="flex items-center">
                <GiGraduateCap className="text-green-500 mr-2" />
                Scholarship opportunities up to 80%
              </li>
              <li className="flex items-center">
                <GiGraduateCap className="text-green-500 mr-2" />
                Bring your spouse and kids
              </li>
              <li className="flex items-center">
                <GiGraduateCap className="text-green-500 mr-2" />
                Career advancement and networking
              </li>
              <li className="flex items-center">
                <GiGraduateCap className="text-green-500 mr-2" />
                OPT/Permanent residency after study
              </li>
            </ul>
          </div>

          <div className="bg-gray-200 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-black mb-4">
              Our Services:
            </h3>
            <ul className="list-disc text-slate-600 list-inside space-y-2">
              <li className="flex items-center">
                <BiSupport className="text-blue-500 mr-2" />
                Support in finding part-time job opportunities.
              </li>
              <li className="flex items-center">
                <BiSupport className="text-blue-500 mr-2" />
                Secure your I-20 in just 7 days.
              </li>
              <li className="flex items-center">
                <BiSupport className="text-blue-500 mr-2" />
                Assistance in finding suitable accommodation.
              </li>
              <li className="flex items-center">
                <BiSupport className="text-blue-500 mr-2" />
                Expert guidance on selecting the right course.
              </li>
              <li className="flex items-center">
                <BiSupport className="text-blue-500 mr-2" />
                Comprehensive support with the visa application (DS-160)
                process.
              </li>
              <li className="flex items-center">
                <BiSupport className="text-blue-500 mr-2" />
                Pre-departure session and post-departure facilities.
              </li>
              <li className="flex items-center">
                <BiSupport className="text-blue-500 mr-2" />
                Ticket booking assistance.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
