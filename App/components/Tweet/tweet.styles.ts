import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  content: {
    lineHeight: 18,
    marginTop: 5,
  },
  createdAt: {
    color: COLORS.gray,
    marginRight: 5,
  },
  image: {
    borderRadius: 15,
    height: 200,
    marginVertical: 10,
    overflow: 'hidden',
    resizeMode: 'cover',
    width: '100%',
  },
  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  tweetHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tweetHeaderNames: {
    flexDirection: 'row',
  },
  tweet_wrapper: {
    // borderWidth: 2,
    // borderBottomWidth: 0.5,
    flexDirection: 'row',
    padding: 15,
    width: '100%',
  },
  username: {
    color: COLORS.gray,
    marginRight: 5,
  },
})

export default styles
