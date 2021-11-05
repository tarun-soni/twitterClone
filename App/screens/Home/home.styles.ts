import { Appearance, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'
const colorScheme = Appearance.getColorScheme()

const styles = StyleSheet.create({
  home_container: {
    alignItems: 'center',
    backgroundColor: colorScheme === 'dark' ? COLORS.dark.bg : COLORS.light.bg,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
})
export default styles
