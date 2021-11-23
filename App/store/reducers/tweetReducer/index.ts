import { Tweet } from '../../../../API'
import {
  fetchTweetsRequestReturn,
  fetchTweetsSuccessReturn,
  fetchTweetsFailureReturn,
} from '../../actions/tweetActions'
import { tweetActionTypes } from '../../ActionTypes/tweetTypes'

interface TweetsInitialState {
  loading: boolean
  tweets: Tweet[] | []
  error: string | null
}
const initialState: TweetsInitialState = {
  loading: false,
  tweets: [],
  error: null,
}
export type TweetActions =
  | fetchTweetsFailureReturn
  | fetchTweetsRequestReturn
  | fetchTweetsSuccessReturn

export default (state = initialState, action: TweetActions) => {
  switch (action.type) {
    case tweetActionTypes.FETCH_TWEET_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case tweetActionTypes.FETCH_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        tweets: action.payload.tweets,
        error: null,
      }
    case tweetActionTypes.FETCH_TWEET_FAILURE:
      return {
        ...state,
        loading: false,
        tweets: [],
        error: action.payload.error,
      }
    default:
      return state
  }
}
