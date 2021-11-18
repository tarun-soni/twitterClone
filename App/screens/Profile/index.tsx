import React from 'react'
import { View, Text, Image } from 'react-native'
import { IMAGES } from '../../constants/theme'
import styles from './Profile.styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MyTweetsTab from './MyTweetsTab'
import LikedTweets from './LikedTweetsTab'

const Tab = createMaterialTopTabNavigator()
const Profile = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: IMAGES.demo_profile_uri }}
            style={styles.coverImage}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Title</Text>
          <Text>BY:</Text>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, textTransform: 'capitalize' },
          tabBarItemStyle: { width: 100, height: 42 },
          tabBarIndicatorStyle: {
            backgroundColor: 'red',
            width: 50,
            marginLeft: '10%',
            borderRadius: 10,
          },
          // tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen
          name="MyTweetsTab"
          component={MyTweetsTab}
          options={{
            title: 'Tweets',
          }}
        />
        <Tab.Screen
          name="LikedTweets"
          component={LikedTweets}
          options={{
            title: 'Liked Tweets',
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default Profile
