/* eslint-disable no-console */
import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import config from '../src/aws-exports'
import { getUser } from '../graphql/queries'

// aws
import Amplify from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
import API from '@aws-amplify/api'
import { graphqlOperation } from '@aws-amplify/api-graphql'
//@ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'
import getRandomImage from './utils/getRandomImage'
import { createUser } from '../graphql/mutations'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})
const App = () => {
  const colorScheme = useColorScheme()

  const saveUserToDB = async (user: any) => {
    console.log('user in saveUserToDB', user)
    await API.graphql(graphqlOperation(createUser, { input: user }))
  }

  useEffect(() => {
    async function run() {
      // get current authenticated user

      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      })

      console.log('userInfo :>> ', userInfo)
      if (userInfo) {
        // Check if user already exists in database
        const userData = await API.graphql(
          graphqlOperation(getUser, {
            id: userInfo.attributes.sub,
          }),
        )

        console.log('userData', userData)

        if (!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage(),
          }
          await saveUserToDB(user)
        } else {
          console.log('User already exists')
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
