import { Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '@/SliceContext/tokenSlice'
import Container from '../../components/Container'
import { StoreState } from '@/store/store'


import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

import { useEffect } from 'react';
import { AuthResponse } from '@/model/authResponse'
import { router } from 'expo-router'

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const WelcomeComponent = () => {


    const [isLoading, setisLoading] = useState(false)
    const dispatch = useDispatch()


    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: '04e244fb1d62409393628c60be67fc8a',
            scopes: [
                "user-read-email",
                "user-library-read",
                "user-read-recently-played",
                "user-top-read",
                "playlist-read-private",
                "playlist-read-collaborative",
                "playlist-modify-public"
            ],
            // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
            // this must be set to false
            usePKCE: false,
            redirectUri: makeRedirectUri({
                scheme: 'myapp',
                path: 'home'
            }),
        },
        discovery
    );



    useEffect(() => {


        const getToken = async (code:string) => {

          try {
            const response = await fetch('https://accounts.spotify.com/api/token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:
                  'Basic ' +
                  btoa('04e244fb1d62409393628c60be67fc8a' + ':' + '78573eb6ee414a19b3b70cd74d35fbf0'),
              },

              body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: makeRedirectUri({
                  scheme: 'myapp',
                  path: 'home',
                }),
              }).toString(),

            });
    
            const tokenResponse:AuthResponse = await response.json();

            console.log('Token Response:', tokenResponse);
    
            if (tokenResponse.access_token) {
              dispatch(setToken(tokenResponse.access_token));

            } else {

              console.log('Access token non ottenuto');

            }
          } catch (error) {

            console.error("Errore durante l'ottenimento del token:", error);

          }
        };
    
        if (response?.type === 'success' && response.params?.code) {
          getToken(response.params.code);
          
          router.replace("/home")

        } else if (response?.type === 'error') {

          console.error("Errore durante l'autenticazione:", response.error);
        }
      }, [response]);







    const user = useSelector((state: StoreState) => state.user.value)


    return (
        <Container>
            <Image className="box-border w-20 h-24 mb-5" resizeMode="contain" source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png" }}></Image>
            <View>
                <Text className="font-cbold text-white text-3xl mb-1 ">Benvenuto {user.user.name.charAt(0).toUpperCase()}{user.user.name.slice(1)}!</Text>
                <Text className="font-cbold text-white text-3xl mb-4 ">Grazie per esserti Autenticato con Spotify!</Text>
            </View>

            <TouchableOpacity onPress={() => { promptAsync() }} disabled={!request}>
                <Text className='text-primary font-cbold text-lg'>Entra e inizia ad ascoltare</Text>
            </TouchableOpacity>
        </Container>
    )
}

export default WelcomeComponent

