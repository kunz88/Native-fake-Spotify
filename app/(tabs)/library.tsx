import { setPlayedSong } from '@/SliceContext/playerSlice';
import CardTrack from '@/components/CardTrack/CardTrack';
import Container from '@/components/Container';
import LoaderComponent from '@/components/LoaderComponent';
import PlayerComponent from '@/components/PlayerComponent/PlayerComponent';
import { FavoritesSongs, SavedTrackResponse, Track } from '@/model/savedTrackTypes';
import { StoreState } from '@/store/store';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import { Pressable, SafeAreaView, TextInput, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';








const Library = () => {

  const [favoritesTracks, setFavoritesTracks] = useState<FavoritesSongs[] | null | undefined>(null)
  const [total, setTotal] = useState(0)
  const [filter, setFilter] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [currentSong, setCurrentSong] = useState<Sound | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const value = useRef(0)

  const token = useSelector((state: StoreState) => state.token.value)

  const dispatch = useDispatch()




  const startPlaylist = async () => {
    if (favoritesTracks) {
      dispatch(setPlayedSong(favoritesTracks[0].track))
      await initializePlayerStreaming(favoritesTracks[0].track)
    }
  }

  const handleSortEvent = () => {
    if(favoritesTracks){
      const sortedsongs = favoritesTracks?.sort((a,b) => a?.track?.name?.charCodeAt(0) - b?.track?.name?.charCodeAt(0))
      setFavoritesTracks([...sortedsongs])

    }
}


/*   TODO

const handleFilterEvent = (e:string) => {
    setFilter(e)
    if(favoritesTracks){
      const filteredSong = favoritesTracks?.filter(({track} )=> track?.name?.toLocaleLowerCase().includes(filter))
      setFavoritesTracks(filteredSong)
    }
  } */



  const initializePlayerStreaming = async (playingTrack: Track) => {
    const previewUrl = playingTrack.preview_url

    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: false
      })

      const { sound, status } = await Audio.Sound.createAsync({ uri: previewUrl }, { shouldPlay: true, isLooping: false })
      await sound.playAsync()
      console.log(`status object from create async function: ${status}`)
      setCurrentSong(sound)
      setIsPlaying(true)
    } catch (error) {
      console.log(`problem initializing the player {from library component} , error message : ${error}`)

    }
  }

  const handlePlayPause = async () => {
    if (currentSong) {
      if (isPlaying) {
        await currentSong.pauseAsync()
      } else {
        await currentSong?.playAsync()
      }
      setIsPlaying(!isPlaying)


    }
  }

  const handlePlayNextTrack = async () => {
    if(currentSong){
      await currentSong.stopAsync();
      setCurrentSong(null)
    }
    value.current += 1
    if(favoritesTracks && value.current < favoritesTracks?.length){
      const nextTrack = favoritesTracks[value.current].track
      dispatch(setPlayedSong(nextTrack))
      await initializePlayerStreaming(nextTrack)

    }else {
      value.current = 0
      
    }
  }



  const playedSong = useSelector((state: StoreState) => state.player.value)




 /*  console.log(`token  {from Library page} : ${token}`) */


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

// fetch della playlist di spotify
  useEffect(() => {
    getSpotifyPlaylist(token)
  }, [])









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
              onChangeText={(e) => {setFilter(e)}}
              keyboardType='web-search'
            />
          </View>


          <Pressable onPress={handleSortEvent} className="w-30 p-2 h-[45px] bg-inputColor rounded-lg justify-center"><Text className='text-white font-cbook text-xs'> SORT</Text></Pressable>
        </View>

        <View className='flex-1 items-start'>
          <View className='flex flex-row justify-between w-11/12 mb-3'>
            <View>
              <Text className='ml-2 text-white font-cbold text-lg'>Liked Songs</Text>
              <Text className='ml-2 mb-3 text-sm text-gray-300 font-cmedium'>{total} songs</Text>

            </View>

            <Pressable onPress={() => startPlaylist()} className='w-12 h-12 rounded-3xl bg-primary flex items-center justify-center'>
              <Ionicons size={22} name={"play"} />
            </Pressable>


          </View>


          <FlatList showsVerticalScrollIndicator={false} data={favoritesTracks} renderItem={(track) => (<CardTrack imageUrl={track.item.track.album.images[0].url} songName={track.item.track.name} authorName={`Artist - ${track.item.track.artists[0].name}`} />)}></FlatList>
          {playedSong && <PlayerComponent handleNextTrack={handlePlayNextTrack} isPlaying={isPlaying} handlePlayPause={handlePlayPause} imageUri={playedSong?.album?.images[0]?.url} title={playedSong?.name} artistName={playedSong?.artists[0]?.name}></PlayerComponent>}
        </View>















      </SafeAreaView>

    </LinearGradient>

  )






}

export default Library
