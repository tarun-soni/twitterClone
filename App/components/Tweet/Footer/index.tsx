import { Heart, Messages3 } from 'iconsax-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TweetType } from '../../../../types'
import styles from './footer.styles'

type TweetProps = {
  tweet: TweetType
}

const Footer = ({ tweet }: TweetProps) => {
  const onLikePress = () => {}
  return (
    <View style={styles.footer_conatiner}>
      <View style={styles.iconContainer}>
        <Messages3 size="20" color="gray" variant="TwoTone" />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.iconContainer}>
        {/* <EvilIcons name={'retweet'} size={28} color={'grey'} /> */}
        <Messages3 size="20" color="gray" variant="TwoTone" />
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onLikePress}>
          {/* <AntDesign
            name={!myLike ? 'hearto' : 'heart'}
            size={20}
            color={!myLike ? 'grey' : 'red'}
          /> */}

          <Heart size="20" color="gray" variant="TwoTone" />
        </TouchableOpacity>
        <Text style={styles.number}>0</Text>
      </View>
      <View style={styles.iconContainer}>
        {/* <EvilIcons name={'share-google'} size={28} color={'grey'} /> */}
        <Messages3 size="20" color="gray" variant="TwoTone" />
      </View>
    </View>
  )
}

export default Footer
