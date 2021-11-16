import { User } from '../../../../API'
import {
  FetchUsersFailure,
  FetchUserRequest,
  FetchUsersSuccess,
} from '../../actions/userActions'
import { userTypes } from '../../ActionTypes/userTypes'

interface UserInitState {
  pending: boolean
  currentUser: User | null
  error: string | null
}

export type UserActions =
  | FetchUserRequest
  | FetchUsersSuccess
  | FetchUsersFailure

const initialState: UserInitState = {
  pending: false,
  currentUser: null,
  error: null,
}

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case userTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        currentUser: action.payload.currentUser,
        error: null,
      }
    case userTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        currentUser: null,
        error: action.payload.error,
      }
    default:
      return state
  }
}
