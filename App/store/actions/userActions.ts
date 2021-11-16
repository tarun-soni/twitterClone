import { User } from '../../../API'
import { userTypes } from '../ActionTypes/userTypes'

export interface FetchUserRequest {
  type: typeof userTypes.FETCH_USER_REQUEST
}
export interface FetchUserFailurePayload {
  error: string
}
export interface FetchUserSuccessPayload {
  currentUser: User
}

export type FetchUsersSuccess = {
  type: typeof userTypes.FETCH_USER_SUCCESS
  payload: FetchUserSuccessPayload
}
export type FetchUsersFailure = {
  type: typeof userTypes.FETCH_USER_FAILURE
  payload: FetchUserFailurePayload
}

// user actions
export const fetchUserRequest = (): FetchUserRequest => ({
  type: userTypes.FETCH_USER_REQUEST,
})

export const fetchUsersSuccess = (
  payload: FetchUserSuccessPayload,
): FetchUsersSuccess => ({
  type: userTypes.FETCH_USER_SUCCESS,
  payload,
})

export const fetchUsersFailure = (
  payload: FetchUserFailurePayload,
): FetchUsersFailure => ({
  type: userTypes.FETCH_USER_FAILURE,
  payload,
})
