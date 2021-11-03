import React from 'react'
import { Image } from 'react-native'
import { COLORS } from '../constants/theme'

type ProfilePictureProps = {
  size?: number
  image?: string
}

const ProfilePicture = ({ image, size = 50 }: ProfilePictureProps) => (
  <Image
    source={{ uri: image || 'https://i.imgur.com/IoJeHIw.png' }}
    style={{
      width: size,
      height: size,
      borderWidth: 1.25,
      borderColor: COLORS.lightgrey,
      borderRadius: size,
    }}
  />
)
export default ProfilePicture
