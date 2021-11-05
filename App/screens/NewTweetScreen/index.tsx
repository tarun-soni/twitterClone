import React, { useState } from 'react'
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native'
import styles from './NewTweetScreen.styles'
import ProfilePicture from '../../components/ProfilePicture'
import { IMAGES } from '../../constants/theme'

const NewTweetScreen = ({ navigation }: any) => {
  const [tweet, setTweet] = useState('')
  const [imageUrl, setImageUrl] = useState('https://i.imgur.com/dfEcVgu.jpeg')

  const onPostTweet = () => {}
  const pickImage = () => {
    setImageUrl('')
  }
  return (
    <SafeAreaView style={styles.new_tweet_container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture image={IMAGES.demo_profile_uri} />
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweet}
            onChangeText={value => setTweet(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder={"What's happening?"}
          />
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.pickImage}>Pick image</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NewTweetScreen
