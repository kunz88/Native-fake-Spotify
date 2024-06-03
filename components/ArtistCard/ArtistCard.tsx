import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


type ArtistCardprops ={
    imageUri:string,
    artistName:string,
    id:string
}

const ArtistCard = ({imageUri,artistName,id}:ArtistCardprops) => {
    return (
        <Link href={`/${id}`} asChild>
        <Pressable className='mx-2'>
            <Image source={{uri:imageUri}} resizeMode="contain" className='w-36 h-36 rounded-md'></Image>
            <Text numberOfLines={1} className='text-md w-36 truncate leading-10 font-cbook text-white mb-8 text-left ml-1'>{artistName}</Text>
        </Pressable>
        </Link>
    )
}

export default ArtistCard

const styles = StyleSheet.create({})