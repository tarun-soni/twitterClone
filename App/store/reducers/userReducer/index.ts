import { User } from '../../../../API'
import {
  SetCurrentUserFailureReturn,
  SetCurrentUserRequestReturn,
  SetCurrentUserSuccessReturn,
} from '../../actions/userActions'
import { userActionTypes } from '../../ActionTypes/userTypes'

interface UserInitState {
  pending: boolean
  currentUser: User | null
  error: string | null
}

export type UserActions =
  | SetCurrentUserRequestReturn
  | SetCurrentUserSuccessReturn
  | SetCurrentUserFailureReturn

const initialState: UserInitState = {
  pending: false,
  currentUser: null,
  error: null,
}

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case userActionTypes.SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        currentUser: action.payload.currentUser,
        error: null,
      }
    case userActionTypes.SET_CURRENT_USER_FAILURE:
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
