import { Pressable, View, Image, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type PlayerProps = {
    imageUri: string,
    title: string,
    artistName: string
}

const PlayerComponent = ({ imageUri = "", title = "", artistName = "" }: PlayerProps) => {
    return (
        <Pressable className='bg-cardBody p-2 w-full flex-row justify-around'>
            <View className='flex-row justify-around items-center'>

                <Image source={{ uri: imageUri }} height={50} width={50} resizeMode='contain'></Image>

                <Text className='text-white font-cbookitalic p-4'>{title.length > 10 ? `${title.slice(0, 10)}..` : title} - {artistName}</Text>
                <Pressable>

                    <Ionicons size={25} color={"white"} name={"pause"} />

                </Pressable>


            </View>


        </Pressable>
    )
}

export default PlayerComponent

