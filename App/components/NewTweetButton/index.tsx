import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './NewTweetButton.styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/core'

const NewTweetButton = () => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('NEW_TWEET_SCREEN')
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={'feather'} size={30} color="white" />
    </TouchableOpacity>
  )
}

export default NewTweetButton
