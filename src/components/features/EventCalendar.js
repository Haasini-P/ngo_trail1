import React from 'react';

const events = [
  { date: 'OCT 25', title: 'Annual Charity Gala', time: '7:00 PM', location: 'Grand Ballroom' },
  { date: 'NOV 12', title: 'Community Tree Planting', time: '9:00 AM', location: 'City Park' },
  { date: 'NOV 22', title: 'Thanksgiving Food Drive', time: 'All Day', location: 'NGO Center' },
  { date: 'DEC 15', title: 'Holiday Toy Distribution', time: '10:00 AM', location: 'Community Hall' },
];

const EventCard = ({ date, title, time, location }) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="text-center mr-6">
      <div className="text-red-500 font-bold text-lg">{date.split(' ')[0]}</div>
      <div className="text-gray-800 font-bold text-2xl">{date.split(' ')[1]}</div>
    </div>
    <div>
      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
      <p className="text-gray-600">{time} @ {location}</p>
      <a href="#" className="text-blue-500 hover:underline text-sm font-semibold">Learn More & RSVP</a>
    </div>
  </div>
);

const EventCalendar = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
      <div className="space-y-6 max-w-2xl mx-auto">
        {events.map(event => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;