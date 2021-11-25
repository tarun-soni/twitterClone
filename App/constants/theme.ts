import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const tintColorLight = '#4D9FEC'
const tintColorDark = '#fff'
export const COLORS = {
  twitterBlue: tintColorLight,
  black: '#111',
  white: '#fff',
  gray: '#66757F',
  yellow: '#fff200',
  lightgrey: 'lightgrey',
  darkgrey: '#212121',
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

export const SIZES = {
  iconSize: 20,
}

export const IMAGES = {
  demo_profile_uri: 'https://i.imgur.com/dfEcVgu.jpg',
  TWEET_DEMO_URL_1:
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.png',
  TWEET_DEMO_URL_2:
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  TWEET_DEMO_URL_3:
    'https://images.pexels.com/photos/515414/pexels-photo-515414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  TWEET_DEMO_URL_4:
    'https://images.pexels.com/photos/4326896/pexels-photo-4326896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
}
