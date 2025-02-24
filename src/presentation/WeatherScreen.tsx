import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {WeatherApiService} from "../data/api/WeatherApiService.ts";
import {WeatherRepository} from "../data/repositories/WeatherRepository.ts";
import {GetBerlinTemperatureUseCase} from "../domain/usecases/GetBerlinTemperatureUseCase.ts";
import {WeatherUI} from "./model/WeatherUI.ts";
import {AppButton} from "./AppButton.tsx";
const WeatherScreen: React.FC = () => {
  const [weather, setWeather] = useState<WeatherUI>({temperature: '0'});

  const fetchWeather = async () => {
    const apiService = new WeatherApiService();
    const repository = new WeatherRepository(apiService);
    const useCase = new GetBerlinTemperatureUseCase(repository);

    const data = await useCase.execute();
    setWeather(data);
    console.log('responded');
  };

  return (
    <View
      style={[
        styles.container,
        {flexDirection: 'column'},
      ]}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'lightseagreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.highlight}>Berlin</Text>
        <Text style={[styles.sectionTitle, {paddingBottom: 10}]}>{weather.temperature}°c</Text>
        <AppButton title="Get Weather" onPress={fetchWeather} />
      </View>
      <View style={{flex: 3, backgroundColor: 'lightskyblue'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
