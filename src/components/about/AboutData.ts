import { images } from "@/utils/images";
import { FaPlane, FaLock, FaUserShield, FaHeadset } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

export const aboutData = {
  bannerImage: images.aboutBanner,
  sections: [
    {
      title: "Bringing Visions to Reality Worldwide",
      description:
        "Visa Tea is a dependable global partner for our clients, offering knowledgeable assistance at every stage of the process, from choosing the appropriate visa category to successfully submitting your application.",
    },
    {
      title: "Visa Tea Process Overview",
      description:
        "We provide comprehensive help with visa applications, which includes document preparation, interview coaching, and legal documentation from immigration lawyers. Our expert team ensures your visa application stands out, improving your chances of approval.",
    },
  ],
  whyChooseUs: {
    title: "Why Choose Us?",
    points: [
      "High Success Rate: Over 93% visa approval for the USA and Canada.",
      "End-to-End Support: Comprehensive assistance from application to visa approval.",
      "Personalized Guidance: Tailored advice to align with your educational goals.",
    ],
    promotion: "GET A FREE CONSULTATION IF YOU SIGN UP THIS MONTH!",
  },
  services: [
    {
      icon: FaPlane,
      title: "Easy Travel",
      description:
        "Streamline your travel plans with our quick and efficient visa solutions.",
      color: "text-blue-500",
    },
    {
      icon: FaLock,
      title: "Secure Processing",
      description:
        "Your personal information is handled with the highest level of security.",
      color: "text-red-500",
    },
    {
      icon: FaUserShield,
      title: "Expert Guidance",
      description:
        "Our experts provide personalized guidance to ensure your visa application is successful.",
      color: "text-green-500",
    },
    {
      icon: MdOutlineAttachMoney,
      title: "Affordable Rates",
      description:
        "We offer competitive pricing without compromising on quality.",
      color: "text-orange-500",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description:
        "Our support team is available round the clock to assist you with any queries.",
      color: "text-purple-500",
    },
  ],
};
