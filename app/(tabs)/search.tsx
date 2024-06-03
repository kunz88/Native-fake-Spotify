
import AlbumCard from '@/components/AlbumCard/AlbumCard';
import ArtistCard from '@/components/ArtistCard/ArtistCard';
import Container from '@/components/Container';
import FormField from '@/components/form/FormField';
import AlbumType from '@/model/albumType';
import ArtistsResult from '@/model/artistQuery';
import { StoreState } from '@/store/store';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import {  Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';


const Search = () => {


  const [searchInput, setSearchInput] = useState<string>("")
  const [albumList, setAlbumList] = useState<AlbumType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)



  const fetchAlbums = async (artistName: string, token: string) => {

    const requestUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
    const requestHeadears = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    setAlbumList(null)
    if(searchInput.length < 4){
      return
    }


    try {
      setIsLoading(true)
      const response = await axios.get<ArtistsResult>(requestUrl, requestHeadears)
      const artistId = response.data.artists.items[0].id

      const albumResponse = await axios.get<AlbumType>(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`, requestHeadears)
      const albums = albumResponse.data

      setAlbumList(albums)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
      setHasError(true)
    }
  }

  const handleInputChange = (event: string) => {


    setAlbumList(null)

    if(event.length > 4){
      setSearchInput(event)

    }
    return


  }

  const token = useSelector((state: StoreState) => state.token.value)

  useEffect(() => {

    fetchAlbums(searchInput, token).then(() => {
      console.log("chiamata fatta {from fetchAlbums , search component}")
    }).catch((error) => {
      console.log(`problemi allinterno dello use effect : ${error}`)
    })

  }, [searchInput])







  return (
    <LinearGradient colors={["#000", "#516395"]} className='flex-1 items-center'>
      <SafeAreaView>
        <View className='flex items-center mb-3'>
          <FormField type="web-search" title='Search' placeholder='cerca qualcosa' isSecure={false} handleChangeEvent={handleInputChange}></FormField>
        </View>

        {isLoading && (
        <View className='flex justify-center items-center'>

          <Text className='text-white font-cbold text-xl'>
            Loading..
          </Text>


        </View>)}
        {hasError && <View className='flex justify-center items-center'>

        <Text className='text-white font-cbold text-xl'>
          Oops there was an error
        </Text>
        </View>}
        { albumList && <View className='flex-1 justify-center items-center'>
          <FlatList numColumns={3} data={albumList?.items} renderItem={({ item }) => <AlbumCard artistName={item.name} imageUri={item.images[0]?.url} />}></FlatList>

        </View>
        }

      </SafeAreaView>
    </LinearGradient>

  );
}
export default Search


