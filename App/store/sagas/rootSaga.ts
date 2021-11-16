import { all } from 'redux-saga/effects'
import usersSaga from './userSaga'

function* rootSaga() {
  yield all([usersSaga()])
}

export default rootSaga
