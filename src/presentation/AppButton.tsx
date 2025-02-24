import React from 'react';
import {Text, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const AppButton: React.FC<AppButtonProps> = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16, // Rounded corners
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF', // White borders
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export { AppButton };
