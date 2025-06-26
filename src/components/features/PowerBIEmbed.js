import React from 'react';

const PowerBIEmbed = ({ embedUrl }) => {
  if (!embedUrl) {
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
        <p className="font-bold">Configuration Needed</p>
        <p>Power BI embed URL is not provided.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Impact Dashboard</h2>
      <div className="w-full aspect-video">
        <iframe
          title="Power BI Report"
          width="100%"
          height="100%"
          src={embedUrl}
          frameBorder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
};

// Example usage:
// <PowerBIEmbed embedUrl="https://app.powerbi.com/view?r=eyJrIjoi...YOUR_EMBED_URL_HERE..." />
export default PowerBIEmbed;