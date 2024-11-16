"use client";
import Image from "next/image";
import { useState } from "react";
import Auth from "./Auth";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Requirements & Destinations", href: "/destination" },
  { label: "Service", href: "/service" },
  { label: "About Us", href: "/about" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-2">
      {" "}
      {/* Sticky header with shadow */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {" "}
          {/* Increased height */}
          <div className="flex items-center gap-4 ">
            <a href="/" className="block">
              <Image
                src="/header/logo.png"
                alt="Logo"
                width={150}
                height={90}
                className="object-contain"
              />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      className="text-gray-600 text-md font-medium transition hover:text-sky-600"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center">
              <div className="sm:flex hidden sm:gap-4 bg-sky-500 rounded-full">
                <Auth />
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              className="rounded p-2 text-gray-600 transition hover:text-gray-800"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-row justify-between p-4">
          <button className="text-gray-600" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-slate-500 text-md font-bold p-4">MENU</h2>
        <nav aria-label="Mobile" className="px-4">
          <ul className="space-y-4 text-sm">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  className="text-sky-500 font-bold transition hover:text-gray-600"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
