import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  home_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const TestScreen = () => {
  return (
    <View style={styles.home_container}>
      <Text></Text>
    </View>
  )
}

export default TestScreen
