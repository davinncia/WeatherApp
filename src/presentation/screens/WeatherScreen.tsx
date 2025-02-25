import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WeatherApiService} from '../../data/api/WeatherApiService.ts';
import {WeatherRepository} from '../../data/repositories/WeatherRepository.ts';
import {GetBerlinTemperatureUseCase} from '../../domain/usecases/GetBerlinTemperatureUseCase.ts';
import {WeatherUI} from '../model/WeatherUI.ts';
import {AppButton} from '../AppButton.tsx';
import WeatherIcon from '../WeatherIcon.tsx';
import {useAppContext} from '../AppContext.tsx';

const WeatherScreen: React.FC = ({navigation}) => {
  const [weather, setWeather] = useState<WeatherUI>({temperature: '0', weatherCode: 1});

  const fetchWeather = async () => {
    const apiService = new WeatherApiService();
    const repository = new WeatherRepository(apiService);
    const useCase = new GetBerlinTemperatureUseCase(repository);

    const data = await useCase.execute();
    setWeather(data);
    console.log('responded');
  };

  const {cityName} = useAppContext();

  return (
    <View
      style={[
        styles.mainContainer,
      ]}>
      <View style={styles.topContainer}>
        <Text style={styles.highlight}>{cityName}</Text>
        <Text style={[styles.sectionTitle]}>{weather.temperature}°c</Text>
        <WeatherIcon code={weather.weatherCode} padding={20}/>
        <AppButton title="Get Weather" onPress={() => navigation.navigate('CityScreen')}/>
      </View>
      <View style={styles.bottomContainer}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  bottomContainer: {
    flex: 3, backgroundColor: 'lightskyblue',
  },
  topContainer: {
    flex: 2,
    backgroundColor: 'lightseagreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  highlight: {
    fontWeight: '700',
    color: 'white',
  },
});

export default WeatherScreen;
