import { useState } from 'react';
import Map, { Port } from './components/Map';
import Sidebar from './components/Sidebar';
import { MarineWeatherData } from './services/weatherAPI';

const ports: Port[] = [
  { id: '1', name: 'Marseille', lat: 43.2965, lon: 5.3698 },
  { id: '2', name: 'Barcelona', lat: 41.3851, lon: 2.1734 },
  { id: '3', name: 'Genoa', lat: 44.4056, lon: 8.9463 },
  { id: '4', name: 'Naples', lat: 40.8518, lon: 14.2681 },
  { id: '5', name: 'Athens', lat: 37.9838, lon: 23.7275 },
  { id: '6', name: 'Istanbul', lat: 41.0082, lon: 28.9784 },
  { id: '7', name: 'Alexandria', lat: 31.2001, lon: 29.9187 },
  { id: '8', name: 'Tunis', lat: 36.8065, lon: 10.1815 },
];

function App() {
  const [selectedPort, setSelectedPort] = useState<Port | null>(null);
  const [weather, setWeather] = useState<MarineWeatherData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSelectPort = (port: Port, weatherData: MarineWeatherData | null) => {
    setSelectedPort(port);
    setWeather(weatherData);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Marine Weather Intelligence</h1>
      </header>
      <main className="main">
        <div className="map-container">
          <Map ports={ports} onSelectPort={handleSelectPort} />
          <Sidebar
            open={sidebarOpen}
            onClose={handleCloseSidebar}
            port={selectedPort}
            weather={weather}
          />
        </div>
      </main>
    </div>
  );
}

export default App; 