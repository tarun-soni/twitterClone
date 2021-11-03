import { StyleSheet } from 'react-native'
import { COLORS } from '../../../constants/theme'

const styles = StyleSheet.create({
  footer_conatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  number: {
    color: COLORS.gray,
    marginLeft: 5,
    textAlign: 'center',
  },
})

export default styles
