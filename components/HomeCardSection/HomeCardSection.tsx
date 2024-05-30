import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Children, PropsWithChildren } from 'react'

const HomeCardSection = ({ title,children }: { title: string } & PropsWithChildren) => {
    return (
        <View>
            <Text className='text-white text-left p-2 font-cbold text-2xl'>{title}</Text>
           
                {children}
          
        </View>
    )
}

export default HomeCardSection

const styles = StyleSheet.create({})