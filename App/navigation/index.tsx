import React from 'react'

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { ColorSchemeName } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types'
import BottomTabNavigator from './BottomTabNavigator'

type NavigationPropTypes = { colorScheme: ColorSchemeName }

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
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}

export default Navigation
