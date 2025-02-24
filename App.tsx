/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {WeatherApiService} from "./src/data/api/WeatherApiService.ts";
import {WeatherRepository} from "./src/data/repositories/WeatherRepository.ts";
import {GetBerlinTemperatureUseCase} from "./src/domain/usecases/GetBerlinTemperatureUseCase.ts";
import {WeatherUI} from "./src/presentation/model/WeatherUI.ts";

function App(): React.JSX.Element {

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
        {flexDirection: 'column',},
      ]}>
      <View
        style={{flex: 2, backgroundColor: 'rgba(255, 140, 0, 0.2)', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.highlight}>Berlin</Text>
        <Text style={styles.sectionTitle}>{weather.temperature}°c</Text>
        <Button title="Get Weather" onPress={fetchWeather} />
      </View>
      <View style={{flex: 3, backgroundColor: 'rgba(0, 128, 0, 0.2)'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
