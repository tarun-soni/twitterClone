/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Image } from 'react-native'
import { COLORS } from '../constants/theme'

type ProfilePictureProps = {
  size?: number
  image?: string
}
const DEFAULT_IMAGE_1 = 'https://i.imgur.com/dfEcVgu.jpeg'
const DEFAULT_IMAGE_2 = 'https://i.imgur.com/IoJeHIw.png'

const ProfilePicture = ({ image, size = 50 }: ProfilePictureProps) => (
  <Image
    source={{ uri: image || DEFAULT_IMAGE_2 }}
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
