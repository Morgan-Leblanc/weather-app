# Marine Weather Intelligence

A real-time weather monitoring application for Mediterranean ports. Get live weather data including temperature, wind, pressure, humidity, and visibility for major ports across the Mediterranean Sea.

## Features

- **Interactive Map**: Explore Mediterranean ports with custom marine-themed markers
- **Real-time Weather**: Live weather data from OpenWeatherMap API
- **Detailed Information**: Temperature, wind speed/direction, pressure, humidity, visibility
- **Responsive Design**: Works on desktop and mobile devices
- **Clean Interface**: Modern marine-inspired design with smooth animations

## Tech Stack

- **React 18** with TypeScript
- **Leaflet** for interactive maps
- **OpenWeatherMap API** for weather data
- **CSS3** with custom marine theme
- **Create React App** for development and building

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd weather-mwi
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory:
```env
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

4. Start the development server
```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Usage

1. **View the Map**: The application loads with a map centered on the Mediterranean Sea
2. **Select a Port**: Click on any port marker to view detailed weather information
3. **View Weather Data**: A sidebar will open showing current weather conditions
4. **Close Sidebar**: Click outside the sidebar to close it

## Project Structure

```
src/
├── components/          # React components
│   ├── Map.tsx         # Interactive map component
│   └── Sidebar.tsx     # Weather information panel
├── services/           # API services
│   └── weatherAPI.ts   # OpenWeatherMap API integration
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles
```

## API Configuration

The application uses the OpenWeatherMap API to fetch weather data. Make sure to:

1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
2. Add your API key to the `.env` file
3. The API provides data for temperature, wind, pressure, humidity, and visibility

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
