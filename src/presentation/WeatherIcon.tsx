import React from 'react';
import { View } from 'react-native';
import CloudIcon from '../assets/icons/cloud.svg';
import SunIcon from '../assets/icons/sun.svg';
import CloudyIcon from '../assets/icons/sun_cloudy.svg';
import RainIcon from '../assets/icons/rainy.svg';
import SnowIcon from '../assets/icons/snow.svg';
import ThunderstormIcon from '../assets/icons/thunderstorm.svg';
import FogIcon from '../assets/icons/fog.svg';

const WeatherIcon: React.FC<{ code: number; padding?: number }> = ({ code, padding = 0 }) => {
  // Map weather codes to icons
  const getIcon = () => {
    if (code === 0) return <SunIcon width={50} height={50} />;
    if ([1, 2, 3].includes(code)) return <CloudyIcon width={50} height={50} />;
    if ([45, 48].includes(code)) return <FogIcon width={50} height={50} />;
    if ([51, 53, 55].includes(code)) return <RainIcon width={50} height={50} />;
    if ([56, 57].includes(code)) return <RainIcon width={50} height={50} />;
    if ([61, 63, 65].includes(code)) return <RainIcon width={50} height={50} />;
    if ([66, 67].includes(code)) return <RainIcon width={50} height={50} />;
    if ([71, 73, 75, 77].includes(code)) return <SnowIcon width={50} height={50} />;
    if ([80, 81, 82].includes(code)) return <RainIcon width={50} height={50} />;
    if ([85, 86].includes(code)) return <SnowIcon width={50} height={50} />;
    if (code === 95) return <ThunderstormIcon width={50} height={50} />;
    if ([96, 99].includes(code)) return <ThunderstormIcon width={50} height={50} />;
    return <CloudIcon width={50} height={50} />; // Default icon
  };

  return <View style={{ padding }}>{getIcon()}</View>;
};

export default WeatherIcon;
