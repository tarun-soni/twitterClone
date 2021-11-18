import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import styles from './Profile.styles'

const MyTweetsTab = () => {
  const { loading, currentUser } = useSelector((state: RootState) => state.user)
  return (
    <View style={[styles.tweets_container]}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <FlatList
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
            data={currentUser?.tweets?.items}
            ListHeaderComponent={() => <Text>hello</Text>}
            extraData={loading}
            renderItem={({ item }) => (
              <View>
                <Text>{item.content}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
            refreshControl={<RefreshControl refreshing={loading} />}
          />
        </View>
      )}
    </View>
  )
}

export default MyTweetsTab
