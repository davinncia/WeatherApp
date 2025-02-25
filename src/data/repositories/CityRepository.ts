import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const CITY_KEY = 'city_name';

export class CityRepository {

  saveCityName(cityName: string) {
    storage.set(CITY_KEY, cityName);
  }

  getCityName() {
    return storage.getString(CITY_KEY) || null;
  }

  clearCityName() {
    storage.delete(CITY_KEY);
  }
}
