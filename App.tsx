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
import WeatherScreen from './src/presentation/WeatherScreen';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <WeatherScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
