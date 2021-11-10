import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Amplify, { Auth } from 'aws-amplify'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import config from '../src/aws-exports'
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'

Amplify.configure(config)
const App = () => {
  const colorScheme = useColorScheme()
  useEffect(() => {
    async function run() {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      })
      console.log('userInfo :>> ', userInfo)
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
