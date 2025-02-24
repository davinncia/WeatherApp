export interface WeatherResponseAPI {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather_units: {
      time: string; // ISO 8601 format
      interval: string; // Unit of time interval (e.g., seconds)
      temperature: string; // Unit of temperature (e.g., °C)
      windspeed: string; // Unit of wind speed (e.g., km/h)
      winddirection: string; // Unit of wind direction (e.g., °)
      is_day: string; // Empty string or boolean-like value
      weathercode: string; // Description of weather code (e.g., WMO code)
    };
    current_weather: {
      time: string; // ISO 8601 format
      interval: number; // Time interval in seconds
      temperature: number; // Current temperature
      windspeed: number; // Current wind speed
      winddirection: number; // Current wind direction in degrees
      is_day: number; // 1 for day, 0 for night
      weathercode: number; // Weather code (e.g., WMO code)
    };
  }
