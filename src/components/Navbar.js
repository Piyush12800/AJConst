import React from 'react';
import Logo_1 from '../assets/Logo_1.png';
import { FaPhone } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-sunny">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <img src={Logo_1} alt="Logo" className="w-32 md:w-40" />

        {/* Call Us */}
        <div className="flex items-center space-x-3">
          <div className="bg-black p-2 rounded-full">
            <FaPhone className="text-sunny w-6 h-6" />
          </div>
          <div>
            <p className="text-black font-semibold text-sm">Call Us</p>
            <p className="text-black text-sm">+91 8770238118</p>
            <p className="text-black text-sm">+91 7489248186</p>
          </div>
        </div>
      </div>

     
      
    </div>
  );
};

export default Navbar;
