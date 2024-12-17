import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with an actual image URL
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Tom Cruise
        </h2>
        <p className="text-gray-600 mb-4">Founder & Chairman</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-gray-500">
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
