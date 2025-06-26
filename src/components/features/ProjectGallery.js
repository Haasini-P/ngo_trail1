import React from 'react';

const projects = [
  { title: 'Clean Water Initiative', image: 'https://via.placeholder.com/400x300?text=Water+Project', description: 'Bringing safe drinking water to remote villages.' },
  { title: 'Education for All', image: 'https://via.placeholder.com/400x300?text=Education', description: 'Providing books and school supplies to underprivileged children.' },
  { title: 'Disaster Relief', image: 'https://via.placeholder.com/400x300?text=Disaster+Relief', description: 'Emergency support for communities affected by natural disasters.' },
  { title: 'Healthcare Access', image: 'https://via.placeholder.com/400x300?text=Healthcare', description: 'Mobile clinics offering free medical check-ups.' },
];

const ProjectCard = ({ title, image, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ProjectGallery = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;