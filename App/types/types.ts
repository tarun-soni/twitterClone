import { ColorSchemeName } from 'react-native'

export type NavigationPropTypes = { colorScheme: ColorSchemeName }

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
  image?: string | null | undefined
  numberOfComments?: number
  numberOfRetweets?: number
  numberOfLikes?: number
  likes: {
    items: LikeUser[] | []
  }
}
type LikeUser = {
  createdAt: string
  id: string
  tweetID: string
  updatedAt: string
  userID: string
}
export type HomeStackParamsList = {
  HOME_SCREEN: undefined
  NEW_TWEET_SCREEN: undefined
  PROFILE_SCREEN: {
    title: string
  }
}

export type SearchStackParamsList = {
  SEARCH_SCREEN: undefined
}

export type RootStackParamList = {
  Root: undefined
  NewTweet: undefined
  Fleet: undefined
  NotFound: undefined
  SHOW_TWEET: undefined
}

export interface RootRootParams
  extends HomeStackParamsList,
    SearchStackParamsList,
    RootStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootRootParams {}
  }
}
export type SagaResponse = {
  error?: any | null
  success?: boolean | null
  data?: any | null
}
