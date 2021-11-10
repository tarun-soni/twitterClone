import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Amplify from 'aws-amplify'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import config from '../src/aws-exports'
//@ts-ignore
// import { withAuthenticator } from 'aws-amplify-react-native'

Amplify.configure(config)
const App = () => {
  const colorScheme = useColorScheme()
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  )
}

// export default withAuthenticator(App)
export default App
