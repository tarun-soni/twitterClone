import createSagaMiddleware from '@redux-saga/core'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import tweetReducer from './reducers/tweetReducer'
import userReducer from './reducers/userReducer'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  posts: tweetReducer,
  users: userReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(rootSaga)

export { store }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default rootReducer
