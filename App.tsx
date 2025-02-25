/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import WeatherScreen from './src/presentation/screens/WeatherScreen';
import CityScreen from './src/presentation/screens/CityScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppProvider} from './src/presentation/AppContext.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'WeatherScreen'}>
          <Stack.Screen name="WeatherScreen" component={WeatherScreen} options={{headerShown: false}}/>
          <Stack.Screen name="CityScreen" component={CityScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
