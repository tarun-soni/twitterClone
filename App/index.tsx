import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import config from '../src/aws-exports'

// aws
import Amplify from '@aws-amplify/core'
//@ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'
import getRandomImage from './utils/getRandomImage'
import {
  getAuthenticatedUser,
  getUserData,
  saveUserToDB,
} from './services/userServices'
import { User } from '../API'
import { Provider, useDispatch } from 'react-redux'
import { store } from './store'
import consola from 'consola'
import { setCurrentUserRequest } from './store/actions/userActions'
import { get } from 'lodash'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})

const AppWrapper = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function run() {
      const userInfo = await getAuthenticatedUser()

      if (userInfo) {
        // Check if user already exists in database
        const userData: any = await getUserData(userInfo.attributes.sub)
        const user: User = get(userData, 'data.getUser', {})

        if (!user) {
          // if not, create new user in database
          const _user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage(),
          }
          await saveUserToDB(_user)
        } else {
          consola.info('User already exists in database')
          dispatch(setCurrentUserRequest(user))
        }
      }
    }
    run()
  }, [dispatch])
  return null
}

const AppWrapped = withAuthenticator(AppWrapper)

const App = () => {
  const colorScheme = useColorScheme()
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar />
        <AppWrapped />
        <Navigation colorScheme={colorScheme} />
      </Provider>
    </SafeAreaProvider>
  )
}

export default withAuthenticator(App)
