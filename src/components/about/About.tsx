import Image from "next/image";
import { aboutData } from "./AboutData";
import { nanoid } from "nanoid";

const About = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* About Section */}
      <div className="sm:flex items-center max-w-screen-xl mx-auto mb-12">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image
              src={aboutData.bannerImage}
              alt="Background Image"
              layout="responsive"
              width={700}
              height={475}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About Us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              STUDY ABROAD<span className="text-indigo-600"> WITH EASE!</span>
            </h2>
            <p className="text-gray-700">
              {`Visa Tea is a renowned visa consulting company committed to
              assisting people and families in navigating the challenging world
              of international migration. We offer thorough, knowledgeable
              solutions to match your demands, regardless of the kind of
              immigration process you're pursuing.`}
            </p>
            <p className="text-gray-700 mt-4">
              {` By working with Visa Tea, you can be sure that every stage of your
              trip will be managed with the highest level of skill and
              attention.`}
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          VisaTea Profile
        </h2>
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Company Overview
          </h3>
          <p className="text-gray-700">
            {` VisaTea is a premier consultancy firm based in Bangladesh,
            specializing in comprehensive visa services and educational guidance
            for students and travelers alike. With an international office in
            Dhaka, we have established ourselves as a trusted leader in the
            fields of student visas, tourist visas, spouse visas, air ticket
            support, tour packages, and IT services.`}
          </p>
          <p className="text-gray-700 mt-4">
            {`Our business name, VisaTea, signifies our commitment to Technology,
            Education, and Air—essential elements in our holistic approach to
            client satisfaction.`}
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
        <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700">
            {` At VisaTea, our mission is to empower individuals by providing
            accessible pathways to education and travel opportunities. We aim to
            bridge the gap between aspiring students and global educational
            institutions, ensuring they have the resources and support needed to
            achieve their goals.`}
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700">
            {`   Our vision is to create a world where education and cultural
            diversity thrive without borders. Studying abroad can be a
            life-changing experience for young individuals, inspiring them
            through ambition, cultural exchange, and a competitive business
            environment.`}
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Services Offered
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.services.map((service) => (
            <div
              key={nanoid()}
              className="bg-white shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 rounded-lg p-6 text-center"
            >
              <service.icon
                className={`text-4xl ${service.color} mx-auto mb-4`}
              />
              <h2 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h2>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Success */}
      <section className="max-w-5xl mx-auto mb-12">
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Success
          </h3>
          <p className="text-gray-700">
            {`  Over the past three years, we have consistently grown and processed
            a significant number of student applications, achieving a success
            rate that reflects our dedication to excellence. Since our
            inception, we have successfully processed numerous student files,
            helping them achieve their dreams of studying abroad.`}
          </p>
        </div>
      </section>

      {/* Ownership and Commitment
      <section className="max-w-5xl mx-auto mb-12">
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Ownership and Commitment
          </h3>
          <p className="text-gray-700">
            VisaTea is co-owned by three dedicated partners: Fatema Tuz Johora,
            Jaky, and Shanto. Together, we share a commitment to mutual trust
            and collaborative decision-making, ensuring that every aspect of our
            operations reflects our values of excellence and integrity.
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default About;
