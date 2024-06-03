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
    <Pressable className='flex flex-row items-center p-2 ml-1 relative w-96'>
      <Image source={{uri:imageUrl}} resizeMode='contain' className='w-12 h-12'></Image>

      <View>
      <Text className='font-cbold text-white ml-2 w-72 truncate'>{songName}</Text>
      <Text className='font-cbook ml-2 text-gray-400'>{authorName}</Text>

      </View>
      <View className='absolute right-0'><Entypo name="dots-three-vertical" size={24} color="white"/></View>
      
      
      
    </Pressable>
  )
}

export default CardTrack

const styles = StyleSheet.create({})