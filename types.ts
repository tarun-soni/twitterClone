import { ColorSchemeName } from 'react-native'

export type NavigationPropTypes = { colorScheme: ColorSchemeName }

export type RootStackParamList = {
  Root: undefined
  NewTweet: undefined
  Fleet: undefined
  NotFound: undefined
}
export type HomeStackParamsList = {
  HOME_SCREEN: undefined
  NEW_TWEET_SCREEN: undefined
}

export type SearchStackParamsList = {
  SEARCH_SCREEN: undefined
}
export type UserType = {
  id: string
  name: string
  username: string
  image?: string
}

export type TweetType = {
  id: string
  createdAt: string
  user: UserType
  content: string
  image?: string
  numberOfComments?: number
  numberOfRetweets?: number
  numberOfLikes?: number
}
