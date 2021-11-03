import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProfilePicture from '../../components/ProfilePicture'
import Tweet from '../../components/Tweet'
import { HOME_SCREEN } from '../../constants/screens'
import tweets from '../../data/tweets'
import styles from './home.styles'

function HomeScreen() {
  return (
    <View style={styles.home_container}>
      <FlatList
        data={tweets}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
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

{
  /* <FlatList
        data={tweets}
        renderItem={({item}) => <Tweet tweet={item}/>}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={fetchTweets}
        ListHeaderComponent={UserFleetsList}
      /> */
}
