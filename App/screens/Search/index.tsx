import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'

function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  )
}

const Search = () => {
  const SearchStack = createNativeStackNavigator()
  return (
    <SearchStack.Navigator initialRouteName={'Search'}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  )
}

export default Search
