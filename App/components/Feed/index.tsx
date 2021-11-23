import React, { useCallback, useEffect, useState } from 'react'
import {
  View,
  FlatList,
  RefreshControl,
  Text,
  ActivityIndicator,
} from 'react-native'
import { wait } from '../../utils/wait'
import Tweet from '../Tweet'
import styles from './Feed.styles'
import { fetchTweetsRequest } from '../../store/actions/tweetActions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { COLORS } from '../../constants/theme'

const Feed = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const dispatch = useDispatch()

  const onRefresh = useCallback(() => {
    setIsRefreshing(true)
    dispatch(fetchTweetsRequest())
    wait(1000).then(() => setIsRefreshing(false))
  }, [dispatch])

  const { loading, tweets, error } = useSelector(
    (state: RootState) => state.tweets,
  )

  useEffect(() => {
    dispatch(fetchTweetsRequest())
  }, [dispatch])

  if (error) {
    return <Text>Tweets failed to load, Swipe down to refresh</Text>
  }

  return (
    <View style={{ width: '100%' }}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.twitterBlue} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tweets}
          extraData={isRefreshing}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => {
            return <Tweet tweet={item} />
          }}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  )
}

export default Feed
