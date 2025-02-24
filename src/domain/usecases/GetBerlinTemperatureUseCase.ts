import { WeatherRepository } from '../../data/repositories/WeatherRepository';
import {WeatherUI} from '../../presentation/model/WeatherUI.ts';

export class GetBerlinTemperatureUseCase {
  private weatherRepository: WeatherRepository;

//TODO Error handling
  constructor(weatherRepository: WeatherRepository) {
    this.weatherRepository = weatherRepository;
  }

    async execute(): Promise<WeatherUI> {
      console.log('starting call');
      const weatherData = await this.weatherRepository.getWeather();
      console.log('ending call');
      console.log(weatherData);
      return {
        temperature: weatherData.current_weather.temperature.toString(),
        weatherCode: weatherData.current_weather.weatherCode
      };
    }

}
