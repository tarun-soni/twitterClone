/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import ProfilePicture from '../../components/ProfilePicture'
import Tweet from '../../components/Tweet'
import { COLORS } from '../../constants/theme'
import tweets from '../../data/tweets'
import styles from './home.styles'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NewTweetScreen from '../NewTweetScreen'
import NewTweetButton from '../../components/NewTweetButton'
import { HomeStackParamsList } from '../../types/types'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import getAsyncStorageData from '../../utils/getAsyncStorageData'

function HomeScreen() {
  return (
    <View style={styles.home_container}>
      <FlatList
        data={tweets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Tweet tweet={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
      <NewTweetButton />
    </View>
  )
}

const Home = () => {
  type UserType = {
    username: string
    image: string
  }
  const HomeStack = createStackNavigator<HomeStackParamsList>()
  const [currentUser, setCurrentUser] = useState<UserType>({
    username: '',
    image: '',
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true)
        const user: any = await getAsyncStorageData('@current_user')
        if (user.data) {
          const { image, username } = user.data.getUser
          setCurrentUser({
            username,
            image,
          })
        }
        setLoading(false)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchUser()
  }, [])
  return (
    <HomeStack.Navigator initialRouteName={'HOME_SCREEN'}>
      <HomeStack.Screen
        name={'HOME_SCREEN'}
        component={HomeScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <EvilIcon name="sc-twitter" size={32} color={COLORS.light.tint} />
          ),
          headerRight: () => (
            <View style={styles.header_btn_container}>
              <MaterialCommunityIcons
                name={'star-four-points-outline'}
                size={24}
                color={COLORS.light.tint}
              />
            </View>
          ),
          headerLeft: () => {
            return (
              <View style={styles.header_btn_container}>
                {loading ? (
                  <ActivityIndicator />
                ) : (
                  <ProfilePicture size={30} isSVG image={currentUser.image} />
                )}
              </View>
            )
          },
        }}
      />

      <HomeStack.Screen
        name={'NEW_TWEET_SCREEN'}
        component={NewTweetScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  )
}

export default Home
