import { Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/form/FormField'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/buttons/CustomButton'
import CustomButtonWithIcon from '@/components/buttons/CustomButtonWithIcon'
import Container from '@/components/Container'
import agent from '@/utils/agent'
import { useDispatch } from 'react-redux'
import { setUserState } from '@/SliceContext/userSlice'
import { UserResponse } from '@/model/user'
import { AxiosError } from 'axios'
import LoaderComponent from '@/components/LoaderComponent'


type LoginFormType = {
  email: string,
  password: string
}
type FormState = 'typing' | 'submitting' | 'success' | 'error'


const Login = () => {
  const dispatch = useDispatch()
  const [loginForm, setloginForm] = useState<LoginFormType>({
    email: "",
    password: ""
  })
  const [status, setStatus] = useState<FormState>('typing');

  const handleSubmit = () => {
    setStatus('submitting');
    if(!loginForm.email || !loginForm.password || loginForm.email.length < 5 || loginForm.password.length < 5){
      Alert.alert(`Per favore inserire email e password valide`)
    }else{
      agent.SignIn.signin(loginForm).then((userData:UserResponse ) => {
        // setto l'utente di sessione
        dispatch(setUserState(userData.user))

        Alert.alert(`Benvenuto ${userData.user.name.charAt(0).toUpperCase()}${userData.user.name.slice(1)}!`)
        setloginForm({ email: "", password: "" })
        setStatus('success')
        console.log("done")
        router.replace("/welcome")

      }).catch((error:AxiosError) => {
        setStatus('error')

        Alert.alert(`${error.message}`)

        setloginForm({ email: "", password: "" })
        router.replace("/")
      })
    }
  }


  
  const [showPassword, setshowPassword] = useState(true)
  if(status === "submitting"){
    return (
    <LoaderComponent></LoaderComponent>
    )

  }
  return (

    

    <Container>
      <Image source={{ uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' }} className='w-[115px] h-[150px] self-start' resizeMode='contain'></Image>

      <Text className='text-4xl leading-10 font-cbold text-white mb-8 text-center'>
        Accedi a Spotify
      </Text>

      <FormField value={loginForm.email} title='Indirizzo e-mail o nome utente' placeholder='Inserisci Email...' handleChangeEvent={(e) => setloginForm({ ...loginForm, email: e })} isSecure={false} type='email-address'></FormField>
      <FormField value={loginForm.password} title='Password' placeholder='Inserisci Password...' handleChangeEvent={(e) => setloginForm({ ...loginForm, password: e })} isSecure={showPassword} handleShowPassword={() => setshowPassword((oldValue) => !oldValue)}></FormField>

      <View className='mt-5 mx-5'>
        <CustomButton bgColor='bg-primary' title='Accedi' onPress={handleSubmit}></CustomButton>


        <Text className='text-center text-gray-500 mt-3 font-clight text-sm'>
          OR
        </Text>
        <CustomButtonWithIcon icon='logo-google' title='login con Google'></CustomButtonWithIcon>
        <View className='mt-6 flex-row justify-center'>
          <Text className='text-white'>non hai un account? </Text>
          <TouchableOpacity>
            <Link href={"/signup"}><Text className='text-white underline font-cbold'>Iscriviti a Spotify</Text></Link>
          </TouchableOpacity>
        </View>
      </View>
    </Container>



  )
}

export default Login

