import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import {
  companyInfo,
  legalLinks,
  studentVisaServices1,
  studentVisaServices2,
} from "./footerData";

const FooterSection: React.FC<{
  section: { title: string; links: { href: string; text: string }[] };
}> = ({ section }) => (
  <div>
    <p className="font-medium text-gray-900">{section.title}</p>
    <ul className="mt-6 space-y-4 text-sm text-gray-500">
      {section.links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="transition hover:opacity-75">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

              <div>
                <h2 className="text-2xl font-medium text-gray-900">
                  Request More Information
                </h2>
                <p className="mt-4 max-w-lg text-gray-500">
                  Get detailed information about our visa services, including
                  application processes, requirements, and more.
                </p>
              </div>

              {/* Contact Section */}
              <section className="mt-8 text-start">
                <h3 className="text-xl font-medium text-gray-900">
                  Contact Us:
                </h3>
                <p className="flex items-center text-gray-500 mb-4">
                  <FaMapMarkerAlt className="mr-2 text-red-500" />
                  House no GA-36, Shahjadpur, Gulshan, Dhaka, Bangladesh 1212
                </p>
                <p className="flex items-center text-gray-500 mb-4">
                  <FaMapMarkerAlt className="mr-2 text-red-500" />
                  Sunnyvale, California USA 94086
                </p>
                <p className="flex items-center text-gray-500 mb-4">
                  <FaPhoneAlt className="mr-2 text-blue-500" />
                  CALL:{" "}
                  <a href="tel:09613821515" className="text-blue-500 underline">
                    01798-148695
                  </a>
                </p>
                <p className="flex items-center text-gray-500 mb-4">
                  <FaGlobe className="mr-2 text-green-500" />
                  Email Us:{" "}
                  <a
                    href="mailto:visatea.team@gmail.com"
                    className="text-blue-500 underline"
                  >
                    visatea.team@gmail.com
                  </a>
                </p>
              </section>

              <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>
                <div className="rounded-md border p-2 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="you@example.com"
                    className="w-full outline-none border-none focus:border-none sm:text-sm"
                  />
                  <button className="mt-1 w-full rounded bg-sky-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="hidden text-teal-600 lg:block">
              <Image
                src="/header/logo.png"
                alt="Logo"
                width={150}
                height={90}
                className="inset-0 lg:h-[80px] lg:w-[150px] object-cover"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <FooterSection section={studentVisaServices1} />
              <FooterSection section={studentVisaServices2} />
              <FooterSection section={companyInfo} />
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <ul className="flex flex-wrap gap-4 text-xs text-gray-500">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:opacity-75"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs text-gray-500">
                &copy; 2024. Visa Tea. All rights reserved.
              </p>

              {/* Social Icons Section */}
              <div className="mt-4 flex space-x-4">
                <Link
                  href="https://www.facebook.com"
                  className="hover:text-gray-600"
                >
                  <FaFacebook size={20} className="text-blue-600" />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  className="hover:text-gray-600"
                >
                  <FaInstagram size={20} className="text-pink-600" />
                </Link>
                <Link
                  href="https://www.twitter.com"
                  className="hover:text-gray-600"
                >
                  <FaTwitter size={20} className="text-blue-400" />
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  className="hover:text-gray-600"
                >
                  <FaLinkedin size={20} className="text-blue-700" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
