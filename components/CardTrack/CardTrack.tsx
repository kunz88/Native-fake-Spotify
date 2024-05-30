import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FavoritesSongs } from '@/model/savedTrackTypes'

type CardTrackProps = {
    name:string
}


const CardTrack = ({name}:CardTrackProps) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default CardTrack

const styles = StyleSheet.create({})