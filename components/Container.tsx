import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

const Container = ({children}:PropsWithChildren) => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center h-full bg-secondary'>
      <ScrollView>
        <View className="justify-center items-center w-full min-h-[85vh] ">
            
            {children}

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Container

const styles = StyleSheet.create({})