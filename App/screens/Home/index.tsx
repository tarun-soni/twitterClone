/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import ProfilePicture from '../../components/ProfilePicture'
import { COLORS } from '../../constants/theme'
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
import Feed from '../../components/Feed'
import { CreateUserInput } from '../../../API'
import consola from 'consola'
function HomeScreen() {
  return (
    <View style={styles.home_container}>
      <Feed />
      <NewTweetButton />
    </View>
  )
}

const Home = () => {
  const DEFAULT_PROFILE_URL = 'https://i.imgur.com/dfEcVgu.jpeg'

  const HomeStack = createStackNavigator<HomeStackParamsList>()
  const [currentUser, setCurrentUser] = useState<CreateUserInput>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true)
        // TODO: type this async storage user obj
        // TODO: get from store
        const user: any = await getAsyncStorageData('@current_user')

        consola.info('user 👉', user)
        if (user.data) {
          const { image, username, email, name } = user.data.getUser
          setCurrentUser({
            username,
            name,
            image,
            email,
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
                  <ProfilePicture
                    size={30}
                    isSVG
                    image={currentUser?.image || DEFAULT_PROFILE_URL}
                  />
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
