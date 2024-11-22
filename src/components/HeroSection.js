import React from 'react';
import Hero from '../assets/Hero.png'; // Background image
import { MdConstruction } from "react-icons/md";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white top-[-22px]"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-6 px-4 mx-auto">
        {/* Top Text */}
        <div className="inline-block bg-black text-sunny font-medium px-6 py-2 rounded-full text-sm">
          <MdConstruction className="inline-block text-sunny text-2xl mx-2 border rounded-full border-spacing-1" />
          We Provide Construction Services for Your Needs
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold">
          We Are Professional <br /> Quality Services
        </h1>

        {/* Button */}
        <button className="bg-sunny text-black font-semibold py-2 px-6 rounded shadow-md hover:bg-yellow-400 transition">
          Our Services
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
