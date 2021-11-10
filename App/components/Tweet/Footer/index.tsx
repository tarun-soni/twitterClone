import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TweetType } from '../../../types/types'
import styles from './footer.styles'
import AntIcon from 'react-native-vector-icons/AntDesign'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'

type FooterProps = {
  tweet: TweetType
}

const Footer = ({ tweet }: FooterProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const onLikePress = () => {
    setIsLiked(!isLiked)
  }
  return (
    <View style={styles.footer_conatiner}>
      <View style={styles.iconContainer}>
        <FeatherIcon name={'message-circle'} size={18} color={'grey'} />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcon name={'retweet'} size={28} color={'grey'} />
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onLikePress}>
          <AntIcon
            name={!isLiked ? 'hearto' : 'heart'}
            size={18}
            color={!isLiked ? 'grey' : 'red'}
          />
        </TouchableOpacity>
        <Text style={styles.number}>0</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcon name="share-google" size={24} color={'grey'} />
      </View>
    </View>
  )
}

export default Footer
