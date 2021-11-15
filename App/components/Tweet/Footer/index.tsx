import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TweetType } from '../../../types/types'
import styles from './footer.styles'
import AntIcon from 'react-native-vector-icons/AntDesign'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { graphqlOperation } from '@aws-amplify/api-graphql'
import API from '@aws-amplify/api'
import { createLike, deleteLike } from '../../../../graphql/mutations'
import Auth from '@aws-amplify/auth'

type FooterProps = {
  tweet: TweetType
}

const Footer = ({ tweet }: FooterProps) => {
  const [user, setUser] = useState<any>()
  const [myLike, setMyLike] = useState<any>(null)
  const [likesCount, setLikesCount] = useState(tweet?.likes?.items?.length || 0)

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser()
      setUser(currentUser)
    }
    fetchUser()
  }, [])

  useEffect(() => {
    if (
      user &&
      tweet.likes.items.some((e: any) => e.userID === user.attributes.sub)
    ) {
      setMyLike(true)
    }
  }, [tweet, user])

  const submitLike = async () => {
    const like = {
      userID: user?.attributes?.sub,
      tweetID: tweet.id,
    }

    try {
      // TODO: type res
      const res: any = await API.graphql(
        graphqlOperation(createLike, { input: like }),
      )
      setMyLike(res.data.createLike)

      setLikesCount(likesCount + 1)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  const removeLike = async () => {
    try {
      await API.graphql(
        graphqlOperation(deleteLike, { input: { id: myLike.id } }),
      )
      setLikesCount(likesCount - 1)
      setMyLike(null)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  const onLike = async () => {
    if (!user) {
      return
    }

    if (!myLike) {
      await submitLike()
    } else {
      await removeLike()
    }
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
        <TouchableOpacity onPress={onLike}>
          <AntIcon
            name={!myLike ? 'hearto' : 'heart'}
            size={18}
            color={!myLike ? 'grey' : 'red'}
          />
        </TouchableOpacity>
        <Text style={styles.number}>{likesCount}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcon name="share-google" size={24} color={'grey'} />
      </View>
    </View>
  )
}

export default Footer
