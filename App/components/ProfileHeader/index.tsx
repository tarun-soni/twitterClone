import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { User } from '../../../API'
import { COLORS } from '../../constants/theme'
import ProfilePicture from '../ProfilePicture'
import styles from './ProfileHeader.styles'
import { signOutUser } from '../../services/userServices'

interface ProfileHeaderProps {
  currentUser: User | null
  loading: boolean
}
const ProfileHeader = ({ currentUser, loading }: ProfileHeaderProps) => {
  const signOutHandler = () => {
    signOutUser()
  }

  return (
    <View style={styles.profile_header_container}>
      <View>
        {loading || !currentUser?.image ? (
          <ActivityIndicator size="small" color={COLORS.twitterBlue} />
        ) : (
          <ProfilePicture size={70} isSVG image={currentUser?.image} />
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{currentUser?.name}</Text>
        <Text>{currentUser?.tweets?.items.length} tweets</Text>
      </View>

      <TouchableOpacity onPress={signOutHandler}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}
export default ProfileHeader
