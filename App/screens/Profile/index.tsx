import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { COLORS } from '../../constants/theme'
import styles from './Profile.styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MyTweetsTab from './MyTweetsTab'
import LikedTweets from './LikedTweetsTab'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ProfilePicture from '../../components/ProfilePicture'

const Tab = createMaterialTopTabNavigator()
const Profile = () => {
  const { currentUser, loading } = useSelector((state: RootState) => state.user)
  return (
    <>
      <View style={styles.container}>
        <View>
          {loading || !currentUser?.image ? (
            <ActivityIndicator size="small" color={COLORS.twitterBlue} />
          ) : (
            <ProfilePicture size={70} isSVG image={currentUser?.image} />
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{currentUser?.name}</Text>
          <Text>{currentUser?.tweets?.items.length}</Text>
        </View>
      </View>

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
