/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View
      style={[
        styles.container,
        {flexDirection: 'column'},
      ]}>
      <View
        style={{flex: 2, backgroundColor: 'rgba(255, 140, 0, 0.2)', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.highlight}>London</Text>
        <Text style={styles.sectionTitle}>50°c</Text>
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
