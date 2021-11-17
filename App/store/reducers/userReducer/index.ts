import { User } from '../../../../API'
import {
  SetCurrentUserFailureReturn,
  SetCurrentUserRequestReturn,
  SetCurrentUserSuccessReturn,
} from '../../actions/userActions'
import { userActionTypes } from '../../ActionTypes/userTypes'

interface UserInitState {
  loading: boolean
  currentUser: User | null
  error: string | null
}

export type UserActions =
  | SetCurrentUserRequestReturn
  | SetCurrentUserSuccessReturn
  | SetCurrentUserFailureReturn

const initialState: UserInitState = {
  loading: false,
  currentUser: null,
  error: null,
}

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case userActionTypes.SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.currentUser,
        error: null,
      }
    case userActionTypes.SET_CURRENT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.error,
      }
    default:
      return state
  }
}
