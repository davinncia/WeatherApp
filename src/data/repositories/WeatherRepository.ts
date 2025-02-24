import { WeatherApiService } from '../api/WeatherApiService';
import {WeatherResponseAPI} from '../models/WeatherResponseAPI.ts';

export class WeatherRepository {
  private apiService: WeatherApiService;

  constructor(apiService: WeatherApiService) {
    this.apiService = apiService;
  }

  async getWeather(): Promise<WeatherResponseAPI> {
    return this.apiService.getWeather();
  }
}
