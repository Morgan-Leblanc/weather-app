import { useState } from 'react';
import Map, { Port } from './components/Map';
import Sidebar from './components/Sidebar';
import { MarineWeatherData } from './services/weatherAPI';

const ports: Port[] = [
  { id: '1', name: 'Marseille', lat: 43.2965, lon: 5.3698 },
  { id: '2', name: 'Barcelona', lat: 41.3851, lon: 2.1734 },
  { id: '3', name: 'Genoa', lat: 44.4056, lon: 8.9463 },
  { id: '4', name: 'Naples', lat: 40.8518, lon: 14.2681 },
  { id: '5', name: 'Athens (Piraeus)', lat: 37.9400, lon: 23.6530 },
  { id: '6', name: 'Istanbul', lat: 41.0082, lon: 28.9784 },
  { id: '7', name: 'Alexandria', lat: 31.2001, lon: 29.9187 },
  { id: '8', name: 'Tunis (La Goulette)', lat: 36.8188, lon: 10.3058 },
  { id: '9', name: 'Valencia', lat: 39.4667, lon: -0.3750 },
  { id: '10', name: 'Algiers', lat: 36.7528, lon: 3.0422 },
  { id: '11', name: 'Palermo', lat: 38.1157, lon: 13.3615 },
  { id: '12', name: 'Cagliari', lat: 39.2238, lon: 9.1217 },
  { id: '13', name: 'Limassol', lat: 34.7071, lon: 33.0226 },
  { id: '14', name: 'Split', lat: 43.5081, lon: 16.4402 },
  { id: '15', name: 'Dubrovnik', lat: 42.6507, lon: 18.0944 },
  { id: '16', name: 'Heraklion (Crete)', lat: 35.3400, lon: 25.1346 },
  { id: '17', name: 'Haifa', lat: 32.7940, lon: 34.9896 },
  { id: '18', name: 'Beirut', lat: 33.8938, lon: 35.5018 },
  { id: '19', name: 'Sète', lat: 43.4034, lon: 3.6928 },
  { id: '20', name: 'Malta (Valletta)', lat: 35.8997, lon: 14.5146 },
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