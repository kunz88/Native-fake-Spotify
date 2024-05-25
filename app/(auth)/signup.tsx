import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'

import FormField from '@/components/form/FormField'
import Container from '@/components/Container'
import CustomButton from '@/components/buttons/CustomButton'

type loginFormType = {
  email: string,
  password: string
}
const SignUp = () => {
  const [loginForm, setloginForm] = useState<loginFormType>({
    email: "",
    password: ""
  })
  const [showPassword, setshowPassword] = useState(true)

  return (
    <Container>

      <Image source={{ uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' }} className='w-[150px] h-[150px] self-start' resizeMode='contain'></Image>

      <Text className='text-3xl leading-10 font-cbold text-white mb-8 text-center'>
        Iscriviti per iniziare ad ascoltare
      </Text>

      <FormField value={loginForm.email} title=' inserisci indirizzo e-mail' placeholder='Inserisci Email...' handleChangeEvent={(e) => setloginForm({ ...loginForm, email: e })} isSecure={false} type='email-address'></FormField>
    

      <View className='mt-5 mx-5'>
      <CustomButton title="Avanti"/>

  
      </View>


    </Container>


  )
}

export default SignUp

