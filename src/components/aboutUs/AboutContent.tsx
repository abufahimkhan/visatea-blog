import FlagsIcon from "./FlagsIcon";

const AboutContent = () => {
  return (
    <div className="bg-white p-2">
      <div className="max-w-xl">
        <h2 className="lg:text-2xl text-lg font-bold text-sky-500 md:text-3xl text-left">
          The Journey Of Visa-Tea
        </h2>
        <p className="text-gray-700 mt-4">
          {` At Visa-Tea, we specialize in making the visa process easy and accessible for everyone. Whether you're a student looking to study abroad or a traveler planning your next adventure, our team is here to provide personalized and reliable services.`}
        </p>
        <p className="text-gray-700 mt-4">
          We offer a full range of visa services, including student visas for
          those pursuing international education and visit visas for tourists
          and short-term stays. Our experienced team works closely with you to
          ensure a smooth, hassle-free process from start to finish, so you can
          focus on your plans while we handle the paperwork.
        </p>
        <p className="text-gray-700 mt-4">
          With years of expertise and a global network, Visa-Tea.com is your
          trusted partner for navigating the complexities of visa applications.
          Let us help you make your dreams of studying or traveling abroad a
          reality.
        </p>

        {/* Flag Icons */}
        <FlagsIcon />
      </div>
    </div>
  );
};

export default AboutContent;
