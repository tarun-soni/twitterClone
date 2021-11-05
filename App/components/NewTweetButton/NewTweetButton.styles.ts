import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.light.tint,
    borderRadius: 50,
    bottom: 20,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    width: 60,
  },
})

export default styles
