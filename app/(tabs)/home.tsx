
import { StoreState } from '@/store/store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { View,Text} from 'react-native';
import { useSelector } from 'react-redux';


const HomeScreen = () => {
  const spotifyToken = useSelector((state:StoreState) => state.token.value )



  
  return (
    
    <View className="flex-1 items-center justify-center bg-white"><Text className="text-3xl font-cbook">{spotifyToken}</Text></View>
  );
}

export default HomeScreen

