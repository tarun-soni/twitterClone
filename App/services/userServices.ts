import API from '@aws-amplify/api'
import { graphqlOperation } from '@aws-amplify/api-graphql'
import Auth from '@aws-amplify/auth'
import { createUser } from '../../graphql/mutations'
import { getUser } from '../../graphql/queries'
import consola from 'consola'

export const saveUserToDB = async (user: any) => {
  await API.graphql(graphqlOperation(createUser, { input: user }))
}

export const getAuthenticatedUser = async () => {
  const userInfo = await Auth.currentAuthenticatedUser({
    bypassCache: true,
  })

  return userInfo
}

export const getUserData = async (id: string) => {
  const userData = await API.graphql(
    graphqlOperation(getUser, {
      id,
    }),
  )

  return userData
}

export const signOutUser = async () => {
  try {
    await Auth.signOut({ global: true })
  } catch (error) {
    consola.warn('error in signout 👉', error)
  }
}
