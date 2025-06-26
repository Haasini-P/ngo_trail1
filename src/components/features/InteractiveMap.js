import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Modal from '../common/Modal';
import MapMarkerForm from './MapMarkerForm';

const containerStyle = { width: '100%', height: '500px' };
const center = { lat: -3.745, lng: -38.523 }; // Example: Fortaleza, Brazil

const InteractiveMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY" // IMPORTANT: Replace with your key
  });

  const [markers, setMarkers] = useState([
    { lat: -3.745, lng: -38.523, description: 'Main NGO Center' },
  ]);
  const [showForm, setShowForm] = useState(false);

  const addMarker = (newMarker) => {
    setMarkers([...markers, { ...newMarker, lat: center.lat + 0.01, lng: center.lng + 0.01 }]); // simplified placement
    setShowForm(false);
  };

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Our Locations & Events</h2>
        <button onClick={() => setShowForm(true)} className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
          Add Marker
        </button>
      </div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} title={marker.description} />
        ))}
      </GoogleMap>
      <Modal isOpen={showForm} onClose={() => setShowForm(false)} title="Add a New Marker">
        <MapMarkerForm onSubmit={addMarker} />
      </Modal>
    </div>
  );
};

export default InteractiveMap;