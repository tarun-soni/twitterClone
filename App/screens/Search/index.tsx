import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import { SearchStackParamsList } from '../../types/types'

function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  )
}

const Search = () => {
  const SearchStack = createStackNavigator<SearchStackParamsList>()
  return (
    <SearchStack.Navigator initialRouteName={'SEARCH_SCREEN'}>
      <SearchStack.Screen name={'SEARCH_SCREEN'} component={SearchScreen} />
    </SearchStack.Navigator>
  )
}

export default Search
