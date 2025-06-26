import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  { name: 'Alice Johnson', role: 'Donor', text: 'This NGO is transparent and effective. I can see the direct impact of my contributions.' },
  { name: 'Mark Chen', role: 'Volunteer', text: 'Volunteering here has been a life-changing experience. The community is incredible.' },
  { name: 'Sarah Williams', role: 'Beneficiary', text: 'The support I received helped my family get back on our feet. I am forever grateful.' },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  
  // Optional: Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What People Are Saying</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full p-4">
                  <p className="text-gray-600 text-lg italic mb-4">"{testimonial.text}"</p>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;