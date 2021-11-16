import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ResponseGenerator } from '../../types/types'

import { fetchUsersFailure, fetchUsersSuccess } from '../actions/userActions'
import { userTypes } from '../ActionTypes/userTypes'

const getCurrentUser = () => {}

function* fetchUsersSaga() {
  try {
    const response: ResponseGenerator = yield call(getCurrentUser)

    yield put(
      fetchUsersSuccess({
        currentUser: response.data,
      }),
    )
  } catch (e) {
    yield put(
      fetchUsersFailure({
        // @ts-ignore
        error: e.message,
      }),
    )
  }
}

function* usersSaga() {
  yield all([takeLatest(userTypes.FETCH_USER_REQUEST, fetchUsersSaga)])
}

export default usersSaga
