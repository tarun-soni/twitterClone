import { Tweet } from '../../../API'
import { tweetActionTypes } from '../ActionTypes/tweetTypes'
// tpyes.

export interface fetchTweetsSuccessPayload {
  tweets: Tweet[]
}
export interface fetchTweetsFailurePayload {
  error: string
}
export type fetchTweetsRequestReturn = {
  type: typeof tweetActionTypes.FETCH_TWEET_REQUEST
}

export type fetchTweetsSuccessReturn = {
  type: typeof tweetActionTypes.FETCH_TWEET_SUCCESS
  payload: fetchTweetsSuccessPayload
}

export type fetchTweetsFailureReturn = {
  type: typeof tweetActionTypes.FETCH_TWEET_FAILURE
  payload: fetchTweetsFailurePayload
}
//----------------------------------------------------------------

// functions

export const fetchTweetsRequest = (): fetchTweetsRequestReturn => ({
  type: tweetActionTypes.FETCH_TWEET_REQUEST,
})

export const fetchTweetsSuccess = (
  payload: fetchTweetsSuccessPayload,
): fetchTweetsSuccessReturn => ({
  type: tweetActionTypes.FETCH_TWEET_SUCCESS,
  payload,
})

export const fetchTweetsFailure = (
  payload: fetchTweetsFailurePayload,
): fetchTweetsFailureReturn => ({
  type: tweetActionTypes.FETCH_TWEET_FAILURE,
  payload,
})
