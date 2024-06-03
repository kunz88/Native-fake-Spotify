import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'


type CardTrackProps = {
    songName:string,
    authorName:string,
    imageUrl:string
}


const CardTrack = ({songName,imageUrl,authorName}:CardTrackProps) => {
  return (
    <Pressable className='flex-row items-center p-2 ml-1'>
      <Image source={{uri:imageUrl}} resizeMode='contain' className='w-10 h-10'></Image>

      <View>
      <Text className='font-cbold text-white ml-2'>{songName}</Text>
      <Text className='font-cbook ml-2 text-gray-400'>{authorName}</Text>

      </View>

      
      
      
    </Pressable>
  )
}

export default CardTrack

const styles = StyleSheet.create({})