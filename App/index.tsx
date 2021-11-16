/* eslint-disable no-console */
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
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  getAuthenticatedUser,
  getUserData,
  saveUserToDB,
} from './services/userServices'
import { GetUserQuery } from '../API'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})
const App = () => {
  const colorScheme = useColorScheme()

  useEffect(() => {
    async function run() {
      const userInfo = await getAuthenticatedUser()
      console.log('userInfo :>> ', userInfo)

      if (userInfo) {
        // Check if user already exists in database
        // TODO: type userData and remove any
        const userData: any = await getUserData(userInfo.attributes.sub)
        console.log(`userData`, userData)

        const user: GetUserQuery = userData.data

        if (!user.getUser) {
          const _user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage(),
          }
          await saveUserToDB(_user)
        } else {
          console.log('User already exists')
          await AsyncStorage.setItem('@current_user', JSON.stringify(userData))
        }
      }
      // if not, create new user in database
    }
    run()
  }, [])
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  )
}

export default withAuthenticator(App)
// export default App
