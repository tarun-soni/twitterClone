import { all, call, put, takeLatest } from 'redux-saga/effects'
import { SagaResponse } from '../../types/types'

import { tweetActionTypes } from '../ActionTypes/tweetTypes'
import { listTweets } from '../../../graphql/queries'
import API, { graphqlOperation } from '@aws-amplify/api'
import { fetchTweetsFailure, fetchTweetsSuccess } from '../actions/tweetActions'

async function fetchTweetsApiCall() {
  try {
    const tweetsData: any = await API.graphql(graphqlOperation(listTweets))

    return {
      success: true,
      data: tweetsData.data.listTweets.items,
      error: null,
    }
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error: error,
    }
  }
}
function* fetchTweetsSaga() {
  try {
    const response: SagaResponse = yield call(fetchTweetsApiCall)
    if (!response.success) {
      fetchTweetsFailure({
        error: response.error,
      })
    }
    yield put(fetchTweetsSuccess({ tweets: response.data }))
  } catch (e: any) {
    yield put(fetchTweetsFailure({ error: e }))
  }
}

function* tweetSaga() {
  yield all([takeLatest(tweetActionTypes.FETCH_TWEET_REQUEST, fetchTweetsSaga)])
}

export default tweetSaga
