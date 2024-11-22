import React, { useState } from 'react';
import { FaBuilding, FaHome, FaIndustry } from 'react-icons/fa'; // Icons for services
import Content from '../assets/Content.png'; // Replace with your actual image path

const MainServices = () => {
  // State to track the selected service
  const [selectedService, setSelectedService] = useState('Commercial');

  // Service content based on selection
  const servicesContent = {
    Commercial: {
      title: 'Commercial Construction',
      description1:
        'We specialize in building state-of-the-art commercial spaces tailored to your business needs. From office buildings to retail spaces, our team delivers unmatched quality and precision.',
      description2:
        'Our expertise ensures timely delivery and compliance with industry standards, creating spaces that stand out in functionality and aesthetics.',
    },
    Residential: {
      title: 'Residential Construction',
      description1:
        'Transforming dreams into reality, we construct beautiful and durable homes that cater to your lifestyle. From single-family homes to luxury villas, our attention to detail is unparalleled.',
      description2:
        'Our commitment is to craft spaces where families create memories, with innovative designs and sustainable building practices.',
    },
    Industrial: {
      title: 'Industrial Construction',
      description1:
        'We offer comprehensive industrial construction services, ensuring robust facilities that support your production and operational needs. From warehouses to manufacturing plants, we’ve got you covered.',
      description2:
        'Our team excels in designing and constructing functional, efficient, and safe industrial facilities that meet regulatory standards.',
    },
  };

  const currentService = servicesContent[selectedService];

  return (
    <div className="py-12 px-4 md:px-16 bg-white">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Main Services</h2>
        <p className="text-gray-600">
          Explore our expert construction services tailored to your needs.
        </p>
      </div>

      {/* Service Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <button
          onClick={() => setSelectedService('Commercial')}
          className={`flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:shadow-md focus:ring-2 ${
            selectedService === 'Commercial' ? 'bg-sunny text-black' : ''
          }`}
        >
          <FaBuilding className="mr-2 text-lg" /> Commercial
        </button>
        <button
          onClick={() => setSelectedService('Residential')}
          className={`flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:shadow-md focus:ring-2 ${
            selectedService === 'Residential' ? 'bg-sunny text-black' : ''
          }`}
        >
          <FaHome className="mr-2 text-lg" /> Residential
        </button>
        <button
          onClick={() => setSelectedService('Industrial')}
          className={`flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:shadow-md focus:ring-2 ${
            selectedService === 'Industrial' ? 'bg-sunny text-black' : ''
          }`}
        >
          <FaIndustry className="mr-2 text-lg" /> Industrial
        </button>
      </div>

      {/* Selected Service Content */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image */}
        <div className="md:w-1/2">
          <img src={Content} alt="Service Content" className="rounded-lg shadow-lg" />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold">{currentService.title}</h3>
          <p className="text-gray-600">{currentService.description1}</p>
          <p className="text-gray-600">{currentService.description2}</p>
          
        </div>
      </div>
    </div>
  );
};

export default MainServices;
