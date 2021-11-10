import React from 'react'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { NavigationPropTypes, RootStackParamList } from '../../types'
import BottomTabNavigator from './BottomTabNavigator'
import { createStackNavigator } from '@react-navigation/stack'
import ShowTweet from '../screens/ShowTweet'

const Navigation: React.FC<NavigationPropTypes> = ({ colorScheme }) => {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="SHOW_TWEET" component={ShowTweet} />
    </Stack.Navigator>
  )
}

export default Navigation
