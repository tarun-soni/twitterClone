import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

const Home = () => {
  const HomeStack = createNativeStackNavigator()
  return (
    <HomeStack.Navigator initialRouteName={'HOME'}>
      <HomeStack.Screen name="HOME" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

export default Home
