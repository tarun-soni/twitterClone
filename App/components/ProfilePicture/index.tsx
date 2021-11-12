/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Image, Text, View } from 'react-native'
import { SvgUri } from 'react-native-svg'
import styles from './ProfilePicture.styles'

type ProfilePictureProps = {
  size?: number
  image: string
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
      <View
        style={[
          styles.profilePicture,
          { width: size, height: size, borderRadius: size },
        ]}
      >
        <SvgUri uri={image} />
      </View>
    )
  }

  return (
    <View>
      {console.log('image :>> ', image)}
      <Image
        source={{ uri: image || DEFAULT_IMAGE_2 }}
        style={[
          styles.profilePicture,
          { width: size, height: size, borderRadius: size },
        ]}
      />
    </View>
  )
}

export default ProfilePicture
