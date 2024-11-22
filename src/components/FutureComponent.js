import React from "react";
import BG from "../assets/BG.png"; // Background image
import Engineer from "../assets/Engineer.jpg"; // Engineer image

const FutureComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-10"
    >
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        {/* Left Section: Image */}
        <div className="w-1/2">
          <img
            src={Engineer}
            alt="Engineer"
            className="object-cover w-full h-full rounded-md shadow-lg"
          />
        </div>

        {/* Right Section: Text */}
        <div className="w-1/2 bg-yellow-200 bg-opacity-75 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Building Your Future
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            At our company, we transform ideas into reality. Whether you're planning a residential dream home, a commercial hub, or a cutting-edge industrial facility, our expertise ensures your vision comes to life.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With a commitment to innovation, quality, and sustainability, we deliver projects that stand the test of time. Let's shape the future together, one structure at a time.
          </p>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-2">
            <li>Customized construction solutions tailored to your needs</li>
            <li>Expert team of architects and engineers</li>
            <li>Innovative designs with sustainability at their core</li>
            <li>Commitment to delivering on time and within budget</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FutureComponent;
