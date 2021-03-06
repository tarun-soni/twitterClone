/* eslint-disable no-console */
import React from 'react'
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native'
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
import Feed from '../../components/Feed'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import Profile from '../Profile'
import { useNavigation } from '@react-navigation/core'

function HomeScreen() {
  return (
    <View style={styles.home_container}>
      <Feed />
      <NewTweetButton />
    </View>
  )
}

const Home = () => {
  const HomeStack = createStackNavigator<HomeStackParamsList>()
  const navigation = useNavigation()
  const { loading, currentUser, error } = useSelector(
    (state: RootState) => state.user,
  )

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
            if (error) {
              return <Text> Error </Text>
            }
            return (
              <View style={styles.header_btn_container}>
                {loading || !currentUser?.image ? (
                  <ActivityIndicator size="small" color={COLORS.twitterBlue} />
                ) : (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('PROFILE_SCREEN', {
                        title: currentUser.name,
                      })
                    }
                  >
                    <ProfilePicture
                      size={30}
                      isSVG
                      image={currentUser?.image}
                    />
                  </TouchableOpacity>
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
      <HomeStack.Screen
        name={'PROFILE_SCREEN'}
        component={Profile}
        // const currencyOptions = ({ route }) => ({
        //   title: route?.params?.title,
        // })
        options={({ route }) => ({
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
          title: route?.params?.title,
        })}
      />
    </HomeStack.Navigator>
  )
}

export default Home
