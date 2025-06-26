import React, { useState } from 'react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', skills: '', availability: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit form data to a backend
    console.log('Volunteer Form Submitted:', formData);
    alert('Thank you for volunteering!');
    setFormData({ name: '', email: '', skills: '', availability: '' });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Become a Volunteer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="skills" className="block text-gray-700 font-semibold mb-2">Skills (e.g., teaching, web dev, first aid)</label>
          <textarea name="skills" value={formData.skills} onChange={handleChange} rows="3" className="w-full px-4 py-2 border rounded-md"></textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="availability" className="block text-gray-700 font-semibold mb-2">Availability</label>
          <select name="availability" value={formData.availability} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md bg-white">
            <option value="">Select availability</option>
            <option value="weekends">Weekends</option>
            <option value="weekdays">Weekdays</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600">
          Sign Me Up!
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;