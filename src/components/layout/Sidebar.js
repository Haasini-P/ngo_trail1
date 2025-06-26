import React from 'react';
import { FaTachometerAlt, FaUsers, FaHandHoldingHeart, FaCalendarAlt } from 'react-icons/fa';

const Sidebar = () => {
  const links = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Donations', icon: <FaHandHoldingHeart /> },
    { name: 'Volunteers', icon: <FaUsers /> },
    { name: 'Events', icon: <FaCalendarAlt /> },
  ];
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav>
        {links.map(link => (
          <a key={link.name} href="#" className="flex items-center gap-4 py-3 px-4 rounded-md hover:bg-gray-700 transition">
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
export default Sidebar;