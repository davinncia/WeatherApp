import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useAppContext} from '../AppContext.tsx';


const cities = [
  'New York',
  'London',
  'Paris',
  'Tokyo',
  'Sydney',
  'Dubai',
  'Singapore',
  'Rome',
  'Barcelona',
  'Istanbul',
  'Los Angeles',
  'Moscow',
  'Beijing',
  'Mumbai',
  'Cape Town',
];

export default function City({navigation}: { navigation: any }) {
  const {setCityName} = useAppContext();

  const handleItemPress = (item: string) => {
    setCityName(item);
    navigation.goBack();
  };

  const renderItem = ({item}: { item: string }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemContainer}>
      <Text style={styles.cityName}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightseagreen',
  },
  listContent: {
    padding: 16,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cityName: {
    fontSize: 18,
    color: 'white',
  },
});
