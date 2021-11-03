import { Appearance, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'
const colorScheme = Appearance.getColorScheme()

const styles = StyleSheet.create({
  home_container: {
    alignItems: 'center',
    // backgroundColor: colorScheme === 'dark' ? COLORS.dark.bg : COLORS.light.bg,
    backgroundColor: colorScheme === 'dark' ? '#111' : COLORS.light.bg,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
})
export default styles
