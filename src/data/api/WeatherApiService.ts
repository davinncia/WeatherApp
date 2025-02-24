import axios from 'axios';
import {WeatherResponseAPI} from '../models/WeatherResponseAPI.ts';

const API_BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export class WeatherApiService {
  async getWeather(): Promise<WeatherResponseAPI> {
    console.log('Fetch request...');
    const response = await axios.get(`${API_BASE_URL}`, {
      params: {
        latitude: '52.52',
        longitude: '13.40',
        current_weather: true,
      },
    });
    console.log('Response: ', response);

    return response.data;
  }
}
