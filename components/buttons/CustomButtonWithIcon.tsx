import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type CustomButtonWithIconProps = {
  icon:"logo-google" | "logo-facebook" | "logo-apple" | "musical-note" | "mic" ,
  title:string,

}

const CustomButtonWithIcon = ({icon,title}:CustomButtonWithIconProps) => {
  return (
    <View className='mt-4'>
    <TouchableOpacity className='flex flex-row items-center justify-center content-center p-2 border-2 border-gray-500 rounded-3xl min-w-[300]'>
      <Text className='text-white font-cbold'><Ionicons size={16} name={icon} />   {title} </Text>
    </TouchableOpacity>
  </View>
  )
}

export default CustomButtonWithIcon

