import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { SearchStackParamsList } from '../../../types'
import { SEARCH_SCREEN } from '../../constants/screens'

function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  )
}

const Search = () => {
  const SearchStack = createNativeStackNavigator<SearchStackParamsList>()
  return (
    <SearchStack.Navigator initialRouteName={SEARCH_SCREEN}>
      <SearchStack.Screen name={SEARCH_SCREEN} component={SearchScreen} />
    </SearchStack.Navigator>
  )
}

export default Search
