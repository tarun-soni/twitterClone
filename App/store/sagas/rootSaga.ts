import { all } from 'redux-saga/effects'
import tweetSaga from './tweetSaga'
import usersSaga from './userSaga'

function* rootSaga() {
  yield all([usersSaga(), tweetSaga()])
}

export default rootSaga
