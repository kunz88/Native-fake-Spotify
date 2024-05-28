
import LoaderComponent from '@/components/LoaderComponent';
import FormField from '@/components/form/FormField';
import AlbumType from '@/model/albumType';
import ArtistsResult from '@/model/artistQuery';
import { StoreState } from '@/store/store';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
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
    if (!artistName || !(artistName.length > 4)) {
      return
    }

    try {
      setIsLoading(true)
      const response = await axios.get<ArtistsResult>(requestUrl, requestHeadears)
      const artistId = response.data.artists.items[0].id

      const albumResponse = await axios.get<AlbumType>(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`, requestHeadears)
      const albums = albumResponse.data
      if (!albums) {
        setAlbumList(null)
      }
      setAlbumList(albums)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
      setHasError(true)
    }
    finally {
      console.log("chiamate terminate")
    }

  }

  const handleInputChange = (event: string) => { // tipo ufficiale dell'evento onChange dell'input type
    setSearchInput(event)
    console.log(searchInput)
  }

  const token = useSelector((state: StoreState) => state.token.value)



  useEffect(() => {

    if (!token) {
      setHasError(true)
      return
    }
    fetchAlbums(searchInput,token).then(()=>{
      console.log("chiamata fatta")
    })

  }, [searchInput, token])



  if (isLoading) return <LoaderComponent />



  return (
    <LinearGradient colors={["#000", "#516395"]} className='flex-1 items-center'>
      <SafeAreaView>
        <ScrollView>
          <FormField title='Search' placeholder='cerca qualcosa' value={searchInput} isSecure={false} handleChangeEvent={handleInputChange}></FormField>
        </ScrollView>



      </SafeAreaView>





    </LinearGradient>

  );
}
export default Search


