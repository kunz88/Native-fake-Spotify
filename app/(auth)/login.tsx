import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView,Image } from 'react-native'
import React, { useState } from 'react'

import { Ionicons } from '@expo/vector-icons'
import FormField from '@/components/form/FormField'

type loginFormType = {
  email:string,
  password:string
}
const Login = () => {
  const [loginForm, setloginForm] = useState<loginFormType>({
    email:"",
    password:""
  })


  return (
    <SafeAreaView className='flex-1 justify-center items-center h-full'>
      <ScrollView>
        <View className=' justify-center items-center w-full min-h-[85vh]'>
        <Image source={{uri:'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'}} className='w-[115px] h-[150px] self-start' resizeMode='contain'></Image>
          <Text className='text-4xl leading-10 font-cbold text-white mb-8 text-center'>
            Accedi a Spotify
          </Text>
          <FormField value={loginForm.email} title='Indirizzo e-mail o nome utente' placeholder='Inserisci Email...' handleChangeEvent={(e) => setloginForm({...loginForm,email:e } )} isSecure={false} type='email-address'></FormField>
          <FormField value={loginForm.password} title='Password' placeholder='Inserisci Password...' handleChangeEvent={(e) => setloginForm({...loginForm,password:e } )} isSecure={true} ></FormField>
          <View className='mt-5 mx-5'>
            <TouchableOpacity className='bg-primary rounded-3xl p-3 mt-4'>
              <Text className='text-center text-base font-cblack'>Accedi</Text>
            </TouchableOpacity>

            <Text className='text-center text-gray-500 mt-3 font-clight text-sm'>
              OR
            </Text>
            <View className='mt-4'>
              <TouchableOpacity className='flex flex-row items-center justify-center content-center p-2 border-2 border-gray-500 rounded-3xl'>
                <Text className='text-white mx-2 text-sm'><Ionicons size={14} name="logo-google" />  Sign In With Google  </Text>
              </TouchableOpacity>
            </View>
            <View className='mt-6 flex-row justify-center'>
              <Text className='text-white'>non hai un account? </Text>
              <TouchableOpacity>
                <Text className='text-white underline font-cbold'>Iscriviti a Spotify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

