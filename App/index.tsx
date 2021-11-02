import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'

const App = () => {
  const colorScheme = useColorScheme()
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  )
}

export default App
