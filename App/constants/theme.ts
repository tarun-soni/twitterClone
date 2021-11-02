import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const tintColorLight = '#4D9FEC'
const tintColorDark = '#fff'
export const COLORS = {
  light: {
    text: '#000',
    bg: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    bg: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
}

export const SCREEN = {
  // app dimensions
  width,
  height,
}
