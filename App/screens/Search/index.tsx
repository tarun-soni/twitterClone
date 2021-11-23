import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SearchStackParamsList } from '../../types/types'
import Auth from '@aws-amplify/auth'
import consola from 'consola'

function SearchScreen() {
  const signOutHandler = () => {
    try {
      Auth.signOut()
    } catch (error) {
      consola.warn('error in signout 👉', error)
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
      <TouchableOpacity onPress={signOutHandler}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
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
