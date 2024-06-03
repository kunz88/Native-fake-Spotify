import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter'
import { Ionicons } from '@expo/vector-icons'


type FormFieldProps = {
    value?: string,
    title:string,
    placeholder:string,
    isSecure:boolean,
    type?:KeyboardTypeOptions
    handleChangeEvent:(eventValue:string)=> void
    handleShowPassword?:() => void
}


const FormField = ({ value,title,placeholder,handleChangeEvent,isSecure,type,handleShowPassword}: FormFieldProps) => {
    return (
        <View className='mt-3 mb-4 w-80'>
            <Text className='text-white font-cblack mb-2'>{title}</Text>
            <TextInput
                
                value={value}
                placeholder={placeholder}
                className='border p-4 text-gray-500 rounded-lg border-gray-600 focus:border-white focus:border-2  mt-1 relative '
                onChangeText={handleChangeEvent}
                secureTextEntry={isSecure}
                keyboardType={type}
            />
            {title === "Password" && 
            <TouchableOpacity className="absolute right-0 bottom-0 p-4" onPress={handleShowPassword}><Ionicons size={20} name="eye" color={"gray"}/></TouchableOpacity>
            }
        </View>
    )
}

export default FormField

