import React, { useState } from 'react'
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native'
import styles from './NewTweetScreen.styles'
import ProfilePicture from '../../components/ProfilePicture'
import { COLORS, IMAGES } from '../../constants/theme'
import { createTweet } from '../../../graphql/mutations'
import API from '@aws-amplify/api'
import { graphqlOperation } from '@aws-amplify/api-graphql'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getAuthenticatedUser } from '../../services/userServices'

const NewTweetScreen = ({ navigation }: any) => {
  const [tweetInput, setTweetInput] = useState('')
  const { loading, currentUser } = useSelector((state: RootState) => state.user)
  const [imageUrl, setImageUrl] = useState<string | null>(
    IMAGES.TWEET_DEMO_URL_4,
  )

  const onPostTweet = async () => {
    try {
      const _currentUser = await getAuthenticatedUser()

      const newTweet = {
        content: tweetInput,
        image: imageUrl,
        userID: _currentUser.attributes.sub,
      }
      await API.graphql(
        graphqlOperation(createTweet, {
          input: newTweet,
        }),
      )

      navigation.goBack()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
    }
  }
  const pickImageHandler = () => {
    setImageUrl(null)
  }
  const removeImageHandler = () => {
    setImageUrl(null)
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
        {loading || !currentUser?.image ? (
          <ActivityIndicator size="small" color={COLORS.yellow} />
        ) : (
          <ProfilePicture isSVG image={currentUser?.image} />
        )}
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweetInput}
            onChangeText={value => setTweetInput(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder={"What's happening?"}
          />
          <View style={styles.img_actionsContainer}>
            <TouchableOpacity onPress={pickImageHandler}>
              <Text style={styles.pickImage}>Pick image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeImageHandler}>
              <Text style={styles.pickImage}>Remove image</Text>
            </TouchableOpacity>
          </View>

          {imageUrl && (
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="contain"
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NewTweetScreen
