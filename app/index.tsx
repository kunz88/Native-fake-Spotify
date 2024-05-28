import {  Text, Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link} from 'expo-router'
import CustomButton from '@/components/buttons/CustomButton'
import CustomButtonWithIcon from '@/components/buttons/CustomButtonWithIcon'
import Container from '@/components/Container'

import LoaderComponent from '@/components/LoaderComponent'






const App = () => {
  const [isLoading, setIsLoading] = useState(true)




  
  useEffect(()=>{

    setTimeout(()=> setIsLoading(false),3000)

  },[])

  


if(isLoading) return <LoaderComponent/>



  return (
    
    <Container>

      <Link href={"/home"}><Image className="box-border w-20 h-24 mb-5" resizeMode="contain" source={{ uri: "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png" }}></Image></Link>
      <Text className="font-cbold text-white text-3xl mb-1 ">Miglioni di Brani.</Text>
      <Text className="font-cbold text-white text-3xl mb-4 ">Gratis su Spotify.</Text>

      <Link href={"/signup"} asChild><CustomButton bgColor='bg-primary' title='Iscriviti gratis' /></Link>
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