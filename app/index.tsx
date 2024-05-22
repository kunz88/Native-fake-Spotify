import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black h-screen">
      
      
      <Link href={"/home"}><Image className="box-border w-32 h-32 mb-3" resizeMode="contain" source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"}}></Image></Link>
      <Text className="font-cbold text-white text-4xl mb-4">Spotify</Text>
      
      <Link href={"/login"} className="font-cbold text-green-500 text-xl">Login</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})