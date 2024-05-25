import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React, { forwardRef } from 'react'

type CustomButtonProps = {
  bgColor?: string,
  title: string,
  fontFamily?: string,
  textColor?: string
  onPress?:() => void
}

const CustomButton =forwardRef<TouchableOpacity, CustomButtonProps>( ({ bgColor, title, fontFamily, textColor,onPress }: CustomButtonProps,ref) => {
  return (
    <TouchableOpacity ref={ref} onPress={onPress} className={`${bgColor || 'bg-primary'} rounded-3xl p-2 mt-4 min-w-[300]`}>
      <Text className={`${fontFamily || 'font-cblack'} ${textColor} text-center text-base `}>{title}</Text>
    </TouchableOpacity>
  )
})

export default CustomButton
