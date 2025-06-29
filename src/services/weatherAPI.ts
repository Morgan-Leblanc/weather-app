export interface MarineWeatherData {
  temperature: number | null;
  windSpeed: number | null;
  windDirection: number | null;
  pressure: number | null;
  humidity?: number | null;
  visibility?: number | null;
  description?: string | null;
}

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;


export async function getMarineWeather(lat: number, lon: number): Promise<MarineWeatherData | null> {
  if (!OPENWEATHER_API_KEY) {
    return null;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    const response = await fetch(url);
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    
    return {
      temperature: data.main?.temp ?? null,
      windSpeed: data.wind?.speed ? Math.round(data.wind.speed * 3.6) : null,
      windDirection: data.wind?.deg ?? null,
      pressure: data.main?.pressure ?? null,
      humidity: data.main?.humidity ?? null,
      visibility: data.visibility ? Math.round(data.visibility / 1000) : null,
      description: data.weather?.[0]?.description ?? null,
    };
  } catch (error) {
    return null;
  }
} 