



import CardTrack from '@/components/CardTrack/CardTrack';
import Container from '@/components/Container';
import LoaderComponent from '@/components/LoaderComponent';
import { FavoritesSongs, SavedTrackResponse} from '@/model/savedTrackTypes';
import { StoreState } from '@/store/store';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { SafeAreaView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';








const Library = () => {

  const [favoritesTracks, setFavoritesTracks] = useState<FavoritesSongs[] | null>(null)

  const [isLoading, setisLoading] = useState(false)
  const token = useSelector((state: StoreState) => state.token.value)
  console.log(`token da Library page : ${token}`)

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
          setFavoritesTracks(response.data.items)
          console.log("success , data fetched")

        }
      } catch (error) {

        console.log("error, favorite data failed to fetch {from libray component}" + error)

      }finally{
        setisLoading(false)
      }
    }
    getSpotifyPlaylist(token)


  }, [token])

  console.log(favoritesTracks)


  if(isLoading) return (
   <Container>
    <LoaderComponent/>
   </Container>
  )


  if (favoritesTracks) {

    return (
      <LinearGradient colors={["#614385", "#516395"]} className='flex-1'>
        <SafeAreaView>
       
            <FlatList showsVerticalScrollIndicator={false} data={favoritesTracks} renderItem={(track)=> (<CardTrack name={track.item.track.name}/>)}></FlatList>


        </SafeAreaView>

      </LinearGradient>

    )

  }




}

export default Library
