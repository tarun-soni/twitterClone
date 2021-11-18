import { useNavigation } from '@react-navigation/core'
import { ArrowDown2 } from 'iconsax-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Tweet as GeneratedTweetType } from '../../../API'
import ProfilePicture from '../ProfilePicture'
import Footer from './Footer'
import styles from './tweet.styles'

type TweetProps = {
  tweet: GeneratedTweetType
}

const Tweet = ({ tweet }: TweetProps) => {
  const navigation = useNavigation()

  const onTweetPress = () => {
    navigation.navigate('SHOW_TWEET')
  }

  return (
    <View style={styles.tweet_wrapper}>
      <ProfilePicture image={tweet.user?.image || ''} size={40} isSVG />

      <View style={styles.container}>
        {/* header */}
        <View style={styles.tweetHeaderContainer}>
          <View style={styles.tweetHeaderNames}>
            <Text style={styles.name}>{tweet.user?.name}</Text>
            <Text style={styles.username}>@{tweet.user?.username}</Text>
            {/* <Text style={styles.createdAt}>{Date.now()}</Text> */}
          </View>
          <ArrowDown2 color={'red'} size="20" />
        </View>

        <View>
          <TouchableOpacity onPress={onTweetPress}>
            <Text style={styles.content}>{tweet.content}</Text>
            {tweet.image && (
              <Image style={styles.image} source={{ uri: tweet.image }} />
            )}
          </TouchableOpacity>
        </View>
        {/* Footer */}
        <Footer tweet={tweet} />
      </View>
    </View>
  )
}

export default Tweet
