import { Pressable, View, Image, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type PlayerProps = {
    imageUri: string,
    title: string,
    artistName: string,
    handlePlayPause: () => void,
    handleNextTrack:() => void
    isPlaying: boolean
}

const PlayerComponent = ({ imageUri = "", title = "", artistName = "", handlePlayPause, isPlaying,handleNextTrack }: PlayerProps) => {
    return (
        <Pressable className='bg-cardBody/75 p-4 w-full absolute bottom-0 '>
            <View className='flex-row justify-around items-center'>

                <Image source={{ uri: imageUri }} height={70} width={70} resizeMode='contain' className='m-2'></Image>

                <Text className='text-white font-cbookitalic mx-3 translate-y-full'>{title.length > 10 ? `${title.slice(0, 10)}..` : title} - {artistName}</Text>



                <View className='flex-row justify-center items-center'>
                    <Pressable onPress={() => { }}>

                        <Ionicons size={30} color={"white"} name={"play-skip-back-circle-outline"} />

                    </Pressable>
                    <Pressable onPress={handlePlayPause}>

                        {isPlaying ? <Ionicons size={40} color={"white"} name={"pause-circle"} /> : <Ionicons size={40} color={"white"} name={"play-circle"} />}

                    </Pressable>
                    <Pressable onPress={handleNextTrack}>

                        <Ionicons size={30} color={"white"} name={"play-skip-forward-circle-outline"} />

                    </Pressable>

                </View>



            </View>


        </Pressable>
    )
}

export default PlayerComponent

