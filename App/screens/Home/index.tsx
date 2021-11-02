import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../components/ProfilePicture'
import { HOME_SCREEN } from '../../constants/screens'

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
    <HomeStack.Navigator initialRouteName={HOME_SCREEN}>
      <HomeStack.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerTitle: () => <Text>twitter logo </Text>,
          headerRight: () => <Text>right</Text>,
          headerLeft: () => <ProfilePicture size={20} />,
        }}
      />
    </HomeStack.Navigator>
  )
}

export default Home
