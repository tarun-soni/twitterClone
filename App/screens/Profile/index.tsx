import React from 'react'
import { COLORS } from '../../constants/theme'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MyTweetsTab from './MyTweetsTab'
import LikedTweets from './LikedTweetsTab'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ProfileHeader from '../../components/ProfileHeader'

const Tab = createMaterialTopTabNavigator()

const Profile = () => {
  const { currentUser, loading } = useSelector((state: RootState) => state.user)
  return (
    <>
      <ProfileHeader currentUser={currentUser} loading={loading} />

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, textTransform: 'capitalize' },
          tabBarItemStyle: { width: 100, height: 42 },
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.twitterBlue,
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
