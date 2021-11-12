/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function (key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.log('error Reading value')
  }
}
