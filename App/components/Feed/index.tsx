import API, { graphqlOperation } from '@aws-amplify/api'
import React, { useCallback, useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { listTweets } from '../../../graphql/queries'
import { wait } from '../../utils/wait'
import Tweet from '../Tweet'
import styles from './Feed.styles'

const Feed = () => {
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setIsRefreshing(true)
    wait(1000).then(() => setIsRefreshing(false))
  }, [])
  useEffect(() => {
    async function fetchTweets() {
      try {
        setLoading(true)
        const tweetsData: any = await API.graphql(graphqlOperation(listTweets))
        setTweets(tweetsData.data.listTweets.items)

        setLoading(false)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error)
      }
    }
    fetchTweets()
  }, [])

  return (
    <View style={{ width: '100%' }}>
      {loading ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tweets}
          extraData={isRefreshing}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <Tweet tweet={item} />}
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
