import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter'


type FormFieldProps = {
    value: string,
    title:string,
    placeholder:string,
    isSecure:boolean,
    type?:KeyboardTypeOptions
    handleChangeEvent:(eventValue:string)=> void
}


const FormField = ({ value,title,placeholder,handleChangeEvent,isSecure,type}: FormFieldProps) => {
    return (
        <View className='mt-3 mb-4 w-80'>
            <Text className='text-white font-cblack'>{title}</Text>
            <TextInput
                value={value}
                placeholder={placeholder}
                className='border p-4 text-gray-500 rounded-lg border-gray-600 focus:border-white focus:border-2  mt-1'
                onChangeText={handleChangeEvent}
                secureTextEntry={isSecure}
                keyboardType={type}
            />
        </View>
    )
}

export default FormField

