import { User } from '../../../API'
import { userActionTypes } from '../ActionTypes/userTypes'
// tpyes.

export interface SetUserSuccessPayload {
  currentUser: User
}
export interface SetUserFailurePayload {
  error: string
}
export type SetCurrentUserRequestReturn = {
  type: typeof userActionTypes.SET_CURRENT_USER_REQUEST
  payload: User
}
export type SetCurrentUserSuccessReturn = {
  type: typeof userActionTypes.SET_CURRENT_USER_SUCCESS
  payload: SetUserSuccessPayload
}

export type SetCurrentUserFailureReturn = {
  type: typeof userActionTypes.SET_CURRENT_USER_FAILURE
  payload: SetUserFailurePayload
}
//----------------------------------------------------------------

// functions

export const setCurrentUserRequest = (
  payload: User,
): SetCurrentUserRequestReturn => ({
  type: userActionTypes.SET_CURRENT_USER_REQUEST,
  payload,
})

export const setCurrentUserSuccess = (
  payload: SetUserSuccessPayload,
): SetCurrentUserSuccessReturn => ({
  type: userActionTypes.SET_CURRENT_USER_SUCCESS,
  payload,
})

export const setCurrentUserFailure = (
  payload: SetUserFailurePayload,
): SetCurrentUserFailureReturn => ({
  type: userActionTypes.SET_CURRENT_USER_FAILURE,
  payload,
})
