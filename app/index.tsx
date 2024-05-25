import {  Text, Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import CustomButton from '@/components/buttons/CustomButton'
import CustomButtonWithIcon from '@/components/buttons/CustomButtonWithIcon'
import Container from '@/components/Container'

import LoaderComponent from '@/components/LoaderComponent'

import useSpotifySDKtoken from '@/hooks/spotifyHooks/useSpotifySDKtoken'
import { useDispatch } from 'react-redux'
import { setToken } from '@/SliceContext/tokenSlice'





const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  const spotifyToken = useSpotifySDKtoken()
  dispatch(setToken(spotifyToken))

  
  useEffect(()=>{
    setTimeout(()=> setIsLoading(false),3000)
    

  },[])

  


if(isLoading) return <LoaderComponent/>


  return (
    
    <Container>

      <Link href={"/home"}><Image className="box-border w-20 h-24 mb-5" resizeMode="contain" source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png" }}></Image></Link>
      <Text className="font-cbold text-white text-3xl mb-1 ">Miglioni di Brani.</Text>
      <Text className="font-cbold text-white text-3xl mb-4 ">Gratis su Spotify.</Text>

      <Link href={"http://192.168.0.142:3000/auth/login"} asChild><CustomButton bgColor='bg-primary' title='Iscriviti gratis' /></Link>
      <CustomButtonWithIcon icon='logo-google' title="Continua con Google" />
      <CustomButtonWithIcon icon='logo-facebook' title="Continua con Facebook" />
      <CustomButtonWithIcon icon='logo-apple' title="Continua con Apple" />
      <TouchableOpacity>
        <Link href={"/login"} className='mt-3'><Text className='text-white font-cbold text-xl'>Accedi</Text></Link>
      </TouchableOpacity>
      
    </Container>



  )
}

export default App