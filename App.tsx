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
import WeatherScreen from './src/presentation/screens/WeatherScreen';
import CityScreen from './src/presentation/screens/CityScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'WeatherScreen'}>
        <Stack.Screen name="WeatherScreen" component={WeatherScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CityScreen" component={CityScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
