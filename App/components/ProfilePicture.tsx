/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Image, View } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { COLORS } from '../constants/theme'

type ProfilePictureProps = {
  size?: number
  image?: string
  isSVG?: boolean
}
const DEFAULT_IMAGE_1 = 'https://i.imgur.com/dfEcVgu.jpeg'
const DEFAULT_IMAGE_2 = 'https://i.imgur.com/IoJeHIw.png'

const ProfilePicture = ({
  image,
  size = 50,
  isSVG = false,
}: ProfilePictureProps) => {
  if (isSVG) {
    return (
      <View>
        <SvgUri
          width={size}
          height={size}
          uri="https://avatars.dicebear.com/api/micah/eg3f11e.svg"
        />
      </View>
    )
  }

  return (
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
}

export default ProfilePicture
