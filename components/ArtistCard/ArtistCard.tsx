import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


type ArtistCardprops ={
    imageUri:string,
    artistName:string
}

const ArtistCard = ({imageUri,artistName}:ArtistCardprops) => {
    return (
        <View className='mx-2'>
            <Image source={{uri:imageUri}} resizeMode="contain" className='w-36 h-36 rounded-md'></Image>
            <Text className='text-md leading-10 font-cbook text-white mb-8 text-left ml-1'>{artistName}</Text>
        </View>
    )
}

export default ArtistCard

const styles = StyleSheet.create({})