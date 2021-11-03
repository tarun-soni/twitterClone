import { ArrowDown2 } from 'iconsax-react-native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TweetType } from '../../../types'
import { COLORS } from '../../constants/theme'
import ProfilePicture from '../ProfilePicture'
import styles from './styles'

type TweetProps = {
  tweet: TweetType
}

const Tweet = ({ tweet }: TweetProps) => (
  <View style={styles.tweet_wrapper}>
    <ProfilePicture image={tweet.user.image} size={40} />

    <View style={styles.container}>
      {/* header */}
      <View style={styles.tweetHeaderContainer}>
        <View style={styles.tweetHeaderNames}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username}</Text>
          <Text style={styles.createdAt}>{Date.now()}</Text>
        </View>
        <ArrowDown2 color={'red'} size="10" />
      </View>

      <View>
        <Text style={styles.content}>{tweet.content}</Text>
        <Image style={styles.image} source={{ uri: tweet.image }} />
      </View>
      {/* Footer */}
      {/* <Footer tweet={tweet} /> */}
    </View>
  </View>
)

export default Tweet
