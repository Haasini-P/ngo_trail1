import React from 'react';
import AdminLayout from '../components/layout/AdminLayout';

const Widget = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
    <div className="text-blue-500 text-4xl">{icon}</div>
  </div>
);

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Widget title="Total Donations" value="$1,250,000" />
        <Widget title="New Volunteers" value="85" />
        <Widget title="Upcoming Events" value="4" />
        <Widget title="Beneficiaries Served" value="12,345" />
      </div>
      {/* You can add more components here like charts, tables, etc. */}
    </AdminLayout>
  );
};

export default AdminDashboard;