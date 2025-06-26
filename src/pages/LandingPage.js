import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import TestimonialsSlider from '../components/features/TestimonialsSlider';
import ProjectGallery from '../components/features/ProjectGallery';

const HeroSection = () => (
  <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center py-20 px-4">
    <h1 className="text-5xl font-bold mb-4">Empowering Change, One Act at a Time</h1>
    <p className="text-xl mb-8">Join our community of donors, volunteers, and advocates dedicated to making a difference.</p>
    <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
      Get Involved
    </button>
  </div>
);

const MissionStatement = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        To connect passionate individuals with meaningful opportunities, creating a sustainable network of support for communities in need. We believe in transparency, impact, and collaboration.
      </p>
    </div>
  </section>
);


const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MissionStatement />
        <ProjectGallery />
        <TestimonialsSlider />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;