import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">About Us</h3>
            <p className="text-gray-400">Our mission is to bring help and hope to those in need through community-driven initiatives.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">About</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Projects</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Info</h3>
            <p className="text-gray-400">123 Charity Lane, Hope City</p>
            <p className="text-gray-400">Email: contact@ngo.org</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Newsletter</h3>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-l-md text-gray-800" />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md">Subscribe</button>
            </form>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400"><FaFacebook size={24}/></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter size={24}/></a>
              <a href="#" className="hover:text-blue-400"><FaInstagram size={24}/></a>
              <a href="#" className="hover:text-blue-400"><FaLinkedin size={24}/></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 pt-8 mt-8 border-t border-gray-700">
          © {new Date().getFullYear()} NGO Connect. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;