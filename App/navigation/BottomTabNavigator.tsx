import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Home2 as HomeIcon,
  Notification,
  SearchNormal,
  Send2,
} from 'iconsax-react-native'

import { COLORS } from '../constants/theme'
import { BottomRoutes } from './routes/bottomTabRoutes'

type BottomTabParams = {
  HOME_TAB: undefined
  SEARCH_TAB: undefined
  NOTIFCATION_TAB: undefined
  MESSAGE_TAB: undefined
}

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator<BottomTabParams>()
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'HOME_TAB':
              return <HomeIcon color={color} variant="Bulk" size={20} />
            case 'SEARCH_TAB':
              return <SearchNormal color={color} variant="Bulk" size={20} />
            case 'NOTIFCATION_TAB':
              return <Notification color={color} variant="Bulk" size={20} />
            case 'MESSAGE_TAB':
              return <Send2 color={color} variant="Bulk" size={20} />
            default:
              return null
          }
        },
        tabBarActiveTintColor: COLORS.light.tint,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <>
        {BottomRoutes.map((_: any) => (
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
