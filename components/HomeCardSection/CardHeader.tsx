import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

type CardHeaderProps = {
    originColor:string,
    title:string,
    icon :"newspaper" | "heart" | "film-outline"  | "code"
}

const CardHeader = ({originColor,title,icon}:CardHeaderProps) => {
    return (
        
            <View >
                <Pressable className='mb-3 flex-row  rounded-sm bg-cardBody items-center'>
                    <LinearGradient colors={[originColor, "#FFFFFF"]} className='h-14'>
                        <Pressable className='w-14 h-14 justify-center items-center'>
                            <Ionicons size={24} color="white" name={icon} />
                        </Pressable>
                    </LinearGradient>

                    <Text className='text-white font-cbold mx-4 min-w-[100px]'> {title}</Text>
                </Pressable>
            </View>
       
    )
}

export default CardHeader

const styles = StyleSheet.create({})