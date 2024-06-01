



import CardTrack from '@/components/CardTrack/CardTrack';
import Container from '@/components/Container';
import LoaderComponent from '@/components/LoaderComponent';
import { FavoritesSongs, SavedTrackResponse } from '@/model/savedTrackTypes';
import { StoreState } from '@/store/store';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, TextInput, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';








const Library = () => {

  const [favoritesTracks, setFavoritesTracks] = useState<FavoritesSongs[] | null>(null)
  const [total, setTotal] = useState(0)

  const [filter, setFilter] = useState('')

  const [isLoading, setisLoading] = useState(false)
  const token = useSelector((state: StoreState) => state.token.value)

  console.log(`token  {from Library page} : ${token}`)

  useEffect(() => {

    const getSpotifyPlaylist = async (spotifyToken: string) => {


      try {
        setisLoading(true)
        const response = await axios.get<SavedTrackResponse>("https://api.spotify.com/v1/me/tracks?offset=0&limit=50", {
          headers: {
            Authorization: `Bearer ${spotifyToken}`
          },
          params: {
            limit: 50
          }
        })
        if (response.status === 200) {
          setTotal(response.data.total)
          setFavoritesTracks(response.data.items)
          console.log("success , data fetched")

        }
      } catch (error) {

        console.log("error, favorite data failed to fetch {from libray component}" + error)

      } finally {
        setisLoading(false)
      }
    }
    getSpotifyPlaylist(token)


  }, [token])

  console.log(favoritesTracks)


  if (isLoading) return (
    <Container>
      <LoaderComponent />
    </Container>
  )



  return (
    <LinearGradient colors={["#614385", "#516395"]} className='flex-1'>
      <SafeAreaView className='flex-1'>


        <View className='mt-4 mb-6 w-80 justify-around items-center flex-row self-center'>


          <View className='flex-row w-60'>
            <Pressable className="p-3 bg-inputColor w-10"><Ionicons size={20} name="search" color={"white"} /></Pressable>
            <TextInput

              value={filter}
              placeholder={'Find favorites songs'}
              className='border p-3 w-48 text-white border-inputColor bg-inputColor'
              placeholderTextColor={'white'}
              onChangeText={(e) => { setFilter(e) }}
              keyboardType='web-search'



            />
          </View>


          <Pressable className="w-30 p-2 h-[45px] bg-inputColor rounded-lg justify-center"><Text className='text-white font-cbook text-xs'> SORT</Text></Pressable>
        </View>

        <View className='flex-1 items-start'>
          <View className='flex flex-row justify-between w-11/12 mb-3'>
            <View>
              <Text className='ml-2 text-white font-cbold text-lg'>Liked Songs</Text>
              <Text className='ml-2 mb-3 text-sm text-gray-300 font-cmedium'>{total} songs</Text>

            </View>

            <Pressable className='w-12 h-12 rounded-3xl bg-primary flex items-center justify-center'>
              <Ionicons size={22} name={"play"} />
            </Pressable>


          </View>


          <FlatList showsVerticalScrollIndicator={false} data={favoritesTracks} renderItem={(track) => (<CardTrack imageUrl={track.item.track.album.images[0].url} songName={track.item.track.name} authorName={`Artist - ${track.item.track.artists[0].name}`} />)}></FlatList>

        </View>












      </SafeAreaView>

    </LinearGradient>

  )






}

export default Library
