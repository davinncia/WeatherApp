import React from 'react';
import { View } from 'react-native';
import CloudIcon from '../assets/icons/cloud.svg';

const WeatherIcon: React.FC<{ padding?: number }> = ({ padding = 0 }) => {
  return (
    <View style={{ padding }}>
      <CloudIcon width={50} height={50} />
    </View>
  );
};

export default WeatherIcon;