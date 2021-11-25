import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'

const styles = StyleSheet.create({
  profile_header_container: {
    backgroundColor: COLORS.white,
    paddingTop: StatusBar.currentHeight,
    height: 180,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 25,
  },
})

export default styles
