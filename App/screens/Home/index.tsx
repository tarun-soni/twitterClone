import React from 'react'
import { View, FlatList } from 'react-native'
import ProfilePicture from '../../components/ProfilePicture'
import Tweet from '../../components/Tweet'
import { HOME_SCREEN, NEW_TWEET_SCREEN } from '../../constants/screens'
import { COLORS } from '../../constants/theme'
import tweets from '../../data/tweets'
import styles from './home.styles'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NewTweetScreen from '../NewTweetScreen'
import NewTweetButton from '../../components/NewTweetButton'
import { HomeStackParamsList } from '../../../types'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'

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
  const HomeStack = createStackNavigator<HomeStackParamsList>()
  return (
    <HomeStack.Navigator initialRouteName={HOME_SCREEN}>
      <HomeStack.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <EvilIcon name="sc-twitter" size={32} color={COLORS.light.tint} />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'star-four-points-outline'}
              size={24}
              color={COLORS.light.tint}
            />
          ),
          headerLeft: () => <ProfilePicture size={20} />,
        }}
      />

      <HomeStack.Screen
        name={NEW_TWEET_SCREEN}
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
