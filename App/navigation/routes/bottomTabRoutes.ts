import { Appearance, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'
import Home from '../../screens/Home'
import Search from '../../screens/Search'

const colorScheme = Appearance.getColorScheme()

const styles = StyleSheet.create({
  tabStyle: {
    fontSize: 14,
  },
})

export const BottomRoutes = [
  {
    name: 'HOME_TAB',
    component: Home,
    options: {
      title: 'Home',
      tabBarActiveTintColor:
        colorScheme === 'light' ? COLORS.light.tint : COLORS.dark.tint,
      tabBarLabelStyle: [styles.tabStyle],
    },
  },
  {
    name: 'SEARCH_TAB',
    component: Search,
    options: {
      title: 'Search',
      tabBarActiveTintColor:
        colorScheme === 'light' ? COLORS.light.tint : COLORS.dark.tint,
      tabBarLabelStyle: [styles.tabStyle],
    },
  },
  {
    name: 'NOTIFCATION_TAB',
    component: Search,
    options: {
      title: 'Notifications',
      tabBarActiveTintColor:
        colorScheme === 'light' ? COLORS.light.tint : COLORS.dark.tint,
      tabBarLabelStyle: [styles.tabStyle],
    },
  },
  {
    name: 'MESSAGE_TAB',
    component: Search,
    options: {
      title: 'Messages',
      tabBarActiveTintColor:
        colorScheme === 'light' ? COLORS.light.tint : COLORS.dark.tint,
      tabBarLabelStyle: [styles.tabStyle],
    },
  },
]
