import React from 'react';
import { MarineWeatherData } from '../services/weatherAPI';
import { Port } from './Map';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  port: Port | null;
  weather: MarineWeatherData | null;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, port, weather }) => {
  const renderWeatherData = () => {
    if (!weather) {
      return <p className="no-data">No weather data available.</p>;
    }

    return (
      <ul className="weather-list">
        {weather.description && (
          <li className="weather-item">
            <span className="weather-label">Conditions:</span>
            <span className="weather-value">{weather.description}</span>
          </li>
        )}
        <li className="weather-item">
          <span className="weather-label">Temperature:</span>
          <span className="weather-value">{weather.temperature} °C</span>
        </li>
        <li className="weather-item">
          <span className="weather-label">Wind:</span>
          <span className="weather-value">{weather.windSpeed} km/h ({weather.windDirection}°)</span>
        </li>
        <li className="weather-item">
          <span className="weather-label">Pressure:</span>
          <span className="weather-value">{weather.pressure} hPa</span>
        </li>
        {weather.humidity !== null && (
          <li className="weather-item">
            <span className="weather-label">Humidity:</span>
            <span className="weather-value">{weather.humidity}%</span>
          </li>
        )}
        {weather.visibility !== null && (
          <li className="weather-item">
            <span className="weather-label">Visibility:</span>
            <span className="weather-value">{weather.visibility} km</span>
          </li>
        )}
      </ul>
    );
  };

  return (
    <>
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 999,
            cursor: 'pointer'
          }}
          onClick={onClose}
        />
      )}
      <div className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h2 className="sidebar-title">{port?.name || 'Select a port'}</h2>
          {renderWeatherData()}
        </div>
      </div>
    </>
  );
};

export default Sidebar; 