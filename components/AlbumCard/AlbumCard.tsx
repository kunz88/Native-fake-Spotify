import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


type AlbumCardprops ={
    imageUri:string,
    artistName:string,
}

const AlbumCard = ({imageUri,artistName}:AlbumCardprops) => {
    return (
        <View className='mx-2'>
            <Image source={{uri:imageUri}} resizeMode="contain" className='w-28 h-28 rounded-md'></Image>
            <Text numberOfLines={1} className='text-md w-28 truncate leading-10 font-cbook text-white mb-8 text-left ml-1'>{artistName}</Text>
        </View>
    )
}

export default AlbumCard
