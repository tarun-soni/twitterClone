import { StyleSheet } from 'react-native'
import { COLORS, SCREEN } from '../../constants/theme'

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    width: '100%',
  },
  image: {
    borderWidth: 0.5,
    height: SCREEN.height * 0.3,
    width: SCREEN.width * 0.75,
  },
  img_actionsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  inputsContainer: {
    marginHorizontal: 10,
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  new_tweet_container: {
    alignItems: 'flex-start',
    backgroundColor: COLORS.white,
    flex: 1,
  },
  pickImage: {
    color: COLORS.light.tint,
    fontSize: 18,
    marginVertical: 10,
  },
  tweetInput: {
    fontSize: 20,
    height: 100,
    maxHeight: 300,
  },
})

export default styles
