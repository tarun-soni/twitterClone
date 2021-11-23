import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingTop: StatusBar.currentHeight,
    height: 180,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  coverImage: {
    height: '80%',
    resizeMode: 'contain',
    width: 80,
  },
  title: {
    fontWeight: '600',
    fontSize: 25,
  },
  infoContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 12,
    paddingBottom: 10,
    backgroundColor: COLORS.gray,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seperator: {
    borderWidth: 0.5,
  },
  tweets_container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
})

export default styles
