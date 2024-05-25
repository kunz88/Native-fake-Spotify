import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import spotifyStorage from '@/utils/storage';
import useSpotifyToken from '@/hooks/spotifyHooks/useSpotifyToken';






const Library = () => {
  // inizializzo il token di sessione e lo stalvo nello storage
  const token = useSpotifyToken()

  const [spotifyTemporaryToken, setspotifyTemporaryToken] = useState<string>("");
useEffect(()=>{    spotifyStorage
  .load({
    key: 'spotifyTemporaryToken',
    autoSync: true,
    syncInBackground: true,
  })
  .then((ret) => {
    console.log(ret.token)
  })
  .catch(err => {
    console.warn(err.message);
    switch (err.name) {
      case 'NotFoundError':
        setspotifyTemporaryToken("error")

        break;
      case 'ExpiredError':
        setspotifyTemporaryToken("error")
        break;
    }
  });
},[])

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">{token}</Text>
    </View>
  )
}

export default Library
