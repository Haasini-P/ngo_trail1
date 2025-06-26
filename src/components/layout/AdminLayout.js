import React from 'react';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
};
export default AdminLayout;