import { Appearance, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'
const colorScheme = Appearance.getColorScheme()

const styles = StyleSheet.create({
  header_btn_container: {
    marginHorizontal: 16,
  },
  home_container: {
    alignItems: 'center',
    backgroundColor: colorScheme === 'dark' ? COLORS.dark.bg : COLORS.light.bg,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  seperator: {
    backgroundColor: COLORS.gray,
    borderWidth: 0.2,
    justifyContent: 'center',
  },
  tweet_button: {
    backgroundColor: COLORS.twitterBlue,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
})
export default styles
