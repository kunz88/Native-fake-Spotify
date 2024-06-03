import { SafeAreaView, ScrollView, Image, Text, View, FlatList, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import useFetch from '@/hooks/spotifyHooks/useFetch'
import { useSelector } from 'react-redux'
import { StoreState } from '@/store/store'
import { Artist, TrackList } from '@/model/artist'
import { useLocalSearchParams } from 'expo-router'
import Container from '@/components/Container'
import LoaderComponent from '@/components/LoaderComponent'
import { LinearGradient } from 'expo-linear-gradient'
import CardTrack from '@/components/CardTrack/CardTrack'
import { Ionicons } from '@expo/vector-icons'

const ArtistDetails = () => {
  const { details: id } = useLocalSearchParams()
  const token = useSelector((state: StoreState) => state.token.value)

  const { isFetching, data, error } = useFetch<Artist>(`https://api.spotify.com/v1/artists/${id}`, token)
  const { isFetching: isFetchingTrackList, data: trackList, error: trackListError } = useFetch<TrackList>(`https://api.spotify.com/v1/artists/${id}/top-tracks`, token)



  if (error || trackListError) {
    return (
      <Container>
        <Text className='text-white text-center p-3 font-cbold text-4xl mx-4'>Oops there was an error..</Text>

      </Container>
    )
  }
  return (
    isFetching || isFetchingTrackList ? <LoaderComponent /> :
      data &&
      <SafeAreaView className='h-full w-full'>

        <View className="justify-center items-center w-full min-h-[85vh] ">
          <LinearGradient colors={["#f59e0b", "#111827"]} className='w-full h-56 relative'>
            <ImageBackground style={{ width: "100%", height: '100%' }} resizeMode='cover' source={{
              uri: data?.images[0]?.url
            }} ><Text className='text-3xl font-cbold text-white absolute bottom-0 p-2'>{data.name}</Text></ImageBackground>
          </LinearGradient>
          <View className=' p-3 flex flex-row justify-between w-full mb-3'>
            <View className='p-2'>
              <Text className=' mb-3 text-sm text-gray-300 font-cbold'>{`${data.followers.total} ascoltatori mensili`}</Text>
              <TouchableOpacity className='flex flex-row items-center justify-center content-center p-2 border border-gray-500 rounded-3xl w-[100]'>
                <Text className='text-white font-cbold'>Segui</Text>
              </TouchableOpacity>
            </View>

            <Pressable  className='w-12 h-12 rounded-3xl bg-primary flex items-center justify-center'>
              <Ionicons size={22} name={"play"} />
            </Pressable>


          </View>

          <View className='flex-1 items-start w-full'>
            <FlatList
          
              showsVerticalScrollIndicator={false}
              data={trackList?.tracks}
              renderItem={(track) => (
                <CardTrack
                  imageUrl={track.item?.album?.images[0]?.url}
                  songName={track.item?.name}
                  authorName={`Artist - ${track.item?.artists[0]?.name}`} />)}>
                    
            </FlatList>
          </View>
        </View>
      </SafeAreaView>)
}

export default ArtistDetails

