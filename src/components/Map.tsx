import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getMarineWeather, MarineWeatherData } from '../services/weatherAPI';

const createPortIcon = (color: string = '#1e40af') => {
  const svg = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="${color}" opacity="0.9"/>
      <circle cx="16" cy="16" r="12" fill="white" opacity="0.95"/>
      <path d="M16 8C18.5 8 20.5 10 20.5 12.5C20.5 14 19.5 15.5 18 16.5L18 22C18 23 17 24 16 24C15 24 14 23 14 22L14 16.5C12.5 15.5 11.5 14 11.5 12.5C11.5 10 13.5 8 16 8Z" fill="${color}"/>
      <circle cx="16" cy="12" r="1.5" fill="white"/>
      <path d="M14 20L18 20" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;
  
  return new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(svg),
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
};

const portIcon = createPortIcon('#1e40af');

export interface Port {
  id: string;
  name: string;
  lat: number;
  lon: number;
}

interface MapProps {
  ports: Port[];
  onSelectPort: (port: Port, weather: MarineWeatherData | null) => void;
}

const Map: React.FC<MapProps> = ({ ports, onSelectPort }) => {
  const handleMarkerClick = async (port: Port) => {
    const weather = await getMarineWeather(port.lat, port.lon);
    onSelectPort(port, weather);
  };

  const renderPopup = (portName: string) => (
    <div style={{ 
      textAlign: 'center', 
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#1e3a8a',
      padding: '4px 0'
    }}>
      {portName}
    </div>
  );

  return (
    <MapContainer 
      center={[38, 15]} 
      zoom={5} 
      className="map"
      zoomControl={true}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      boxZoom={false}
      keyboard={false}
      dragging={true}
      touchZoom={true}
      minZoom={3}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
        maxZoom={18}
        tileSize={256}
        zoomOffset={0}
      />
      {ports.map((port) => (
        <Marker
          key={port.id}
          position={[port.lat, port.lon]}
          icon={portIcon}
          eventHandlers={{
            click: () => handleMarkerClick(port),
          }}
        >
          <Popup>
            {renderPopup(port.name)}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map; 