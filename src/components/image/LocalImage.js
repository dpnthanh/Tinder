import React from 'react'

import {
  Image,
} from 'react-native'


const LocalImage = ({source, margin}) => {
  return (
    <Image
      source={source} resizeMode='cover'
      style={{
        flex:1,
        margin:margin,
        width: null,
        height: null}}
     />
  )
}

export default LocalImage