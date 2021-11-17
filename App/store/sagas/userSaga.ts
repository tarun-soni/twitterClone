import { all, call, put, takeLatest } from 'redux-saga/effects'
import { SagaResponse } from '../../types/types'
import {
  setCurrentUserFailure,
  setCurrentUserSuccess,
} from '../actions/userActions'
import { userActionTypes } from '../ActionTypes/userTypes'
import { isEmpty } from 'lodash'
import consola from 'consola'

function setCurrentUser(data: any) {
  consola.info('data userObject 👉', data)

  if (isEmpty(data)) {
    return {
      success: false,
      error: 'NOT FOUND',
      data: null,
    }
  }
  return {
    success: true,
    data: data,
    error: false,
  }
}
function* setUserSaga(action: any) {
  try {
    const response: SagaResponse = yield call(setCurrentUser, action.payload)
    if (!response.success) {
      setCurrentUserFailure({
        error: response.error,
      })
    }
    yield put(setCurrentUserSuccess({ currentUser: response.data }))
  } catch (e: any) {
    yield put(setCurrentUserFailure({ error: e.message }))
  }
}

function* usersSaga() {
  yield all([takeLatest(userActionTypes.SET_CURRENT_USER_REQUEST, setUserSaga)])
}

export default usersSaga
