import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yellow-200 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="font-bold text-xl">build care</div>
            </div>
            <p className="text-gray-700 max-w-md">
            At our company, we transform ideas into reality. Whether you're planning a residential dream home, a commercial hub, or a cutting-edge industrial facility, our expertise ensures your vision comes to life.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            {/* <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Info@Example.com</span>
            </div> */}
            <div className="flex items-center space-x-2 ">
              <Phone className="w-5 h-5" />
              <div className='flex flex-col'>

              <span >+91 877 023 8118</span>
              <span >+91 748 924 8186</span>
              </div>
                
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Indra Nagar, Awadpura, Kampoo Lashkar, Gwalior (M.P.)-474001</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                {/* <li><a href="#" className="hover:text-gray-600">About Us</a></li>
                <li><a href="#" className="hover:text-gray-600">Gallery</a></li> */}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {/* <li><a href="#" className="hover:text-gray-600">Services</a></li>
                <li><a href="#" className="hover:text-gray-600">Blog</a></li>
                <li><a href="#" className="hover:text-gray-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-600">Service Request</a></li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-8">
          <a href="#" className="p-2 bg-black text-white rounded-full hover:bg-gray-800">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-black text-white rounded-full hover:bg-gray-800">
            <Facebook className="w-5 h-5" />
          </a>
       
         
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;