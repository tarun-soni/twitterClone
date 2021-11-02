import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home as HomeIcon, SearchNormal } from 'iconsax-react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { HOME_SCREEN, SEARCH_SCREEN } from '../constants/screens'
import { COLORS } from '../constants/theme'
import useColorScheme from '../hooks/useColorScheme'
import Home from '../screens/Home'
import Search from '../screens/Search'

const styles = StyleSheet.create({
  tabStyle: {
    fontSize: 14,
  },
})

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator()
  const colorScheme = useColorScheme()
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case HOME_SCREEN:
              return <HomeIcon color={color} variant="TwoTone" size={20} />
            case SEARCH_SCREEN:
              return <SearchNormal color={color} variant="TwoTone" size={20} />
            default:
              return null
          }
        },
        tabBarActiveTintColor: COLORS.light.tint,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <BottomTab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          tabBarActiveTintColor:
            colorScheme === 'light' ? COLORS.light.tint : COLORS.dark.tint,
          title: 'Home',
          tabBarLabelStyle: [styles.tabStyle],
        }}
      />
      <BottomTab.Screen
        name={SEARCH_SCREEN}
        component={Search}
        options={{
          title: 'Search',
          tabBarActiveTintColor:
            colorScheme === 'light' ? COLORS.light.tint : COLORS.dark.tint,
          tabBarLabelStyle: [styles.tabStyle],
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
