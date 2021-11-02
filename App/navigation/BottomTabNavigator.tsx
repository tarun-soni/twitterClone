import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Home as HomeIcon,
  Notification,
  SearchNormal,
} from 'iconsax-react-native'
import { HOME_TAB, NOTIFCATION_TAB, SEARCH_TAB } from '../constants/screens'
import { COLORS } from '../constants/theme'
import { BottomRoutes } from './routes/bottomTabRoutes'

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator()
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case HOME_TAB:
              return <HomeIcon color={color} variant="Bulk" size={20} />
            case SEARCH_TAB:
              return <SearchNormal color={color} variant="Bulk" size={20} />
            case NOTIFCATION_TAB:
              return <Notification color={color} variant="Bulk" size={20} />
            default:
              return null
          }
        },
        tabBarActiveTintColor: COLORS.light.tint,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <>
        {console.log('BottomRoutes :>> ', BottomRoutes)}
        {BottomRoutes.map(_ => (
          <BottomTab.Screen
            key={_.name}
            name={_.name}
            component={_.component}
            options={_.options}
          />
        ))}
      </>
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
