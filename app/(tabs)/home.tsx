
import ArtistCard from '@/components/ArtistCard/ArtistCard';
import HomeCardSection from '@/components/HomeCardSection/HomeCardSection';
import LoaderComponent from '@/components/LoaderComponent';
import useArtists from '@/hooks/spotifyHooks/useArtists';

import { StoreState } from '@/store/store';

import { LinearGradient } from 'expo-linear-gradient';

import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import CardHeader from '@/components/HomeCardSection/CardHeader';
import FakeListComponent from '@/components/FakeListComponent/FakeListComponent';
import Container from '@/components/Container';



const HomeScreen = () => {

  const user = useSelector((state: StoreState) => state.user.value)
  const token = useSelector((state: StoreState) => state.token.value)



  const artistsMock = ['eminem', 'taylor swift', 'radiohead', 'greenday', 'dualipa', 'metallica', 'the cure', 'iron maiden', 'nirvana', 'pearljam', 'Louis Armstrong', 'Duke Ellington', 'Miles Davis', 'John Coltrane', 'Ella Fitzgerald', 'Joe Rogan', 'Tim Ferriss', 'Sam Harris', 'Gary Vaynerchuk', 'Brené Brown']
  const { artists, isLoading, hasError } = useArtists(artistsMock, token)

  if (!artists) {
    return (
      <Container>
        <Text className='text-white text-center p-3 font-cbold text-4xl mx-4'>Artists not found..</Text>
      </Container>)
  }
  if (hasError) {
    return (
      <Container>
        <Text className='text-white text-center p-3 font-cbold text-4xl mx-4'>Oops there was an error..</Text>

      </Container>
    )
  }

  const popular = artists.slice(0, 5)
  const rock = artists.slice(5, 10)
  const jazz = artists.slice(10, 15)
  const podcast = artists.slice(15, 20)




  if (isLoading) return <LoaderComponent />
  return (

    <SafeAreaView>
      <LinearGradient colors={["#040306", "#131624"]}>
        <ScrollView className='p-2'>
          <View className='flex flex-row items-center justify-around mt-8 mb-3'>
            <Image source={{
              uri: user.user.avatar ? user.user.avatar : "https://avatar.iran.liara.run/public/37"
            }} className='h-16 w-16 rounded-lg'>

            </Image>
            <TouchableOpacity className='flex flex-row items-center justify-center content-center p-2 border border-gray-500 rounded-3xl min-w-[140]'>
              <Text className='text-white font-cbold'><Ionicons size={16} name='musical-note' />Music</Text>
            </TouchableOpacity>

            <TouchableOpacity className='flex flex-row items-center justify-center content-center p-2 border border-gray-500 rounded-3xl min-w-[140]'>
              <Text className='text-white font-cbold'><Ionicons size={16} name='mic' /> Podcast & Show </Text>
            </TouchableOpacity>

          </View>
          <View className='flex-row  justify-between'>
            <CardHeader originColor="#33006f" title="Favorites" icon="heart"></CardHeader>
            <CardHeader originColor="#2D46B9" title="News" icon="newspaper"></CardHeader>
          </View>
          <View className='flex-row  justify-between'>
            <CardHeader originColor="#E11185" title="Coding" icon="code"></CardHeader>
            <CardHeader originColor="orange" title="Soundtrack" icon="film-outline"></CardHeader>
          </View>

          <HomeCardSection title="Artisti più popolari">

            {popular.map((artist) => <ArtistCard imageUri={artist.images[0].url} artistName={artist.name} key={artist.name} />)}
          </HomeCardSection>
          <HomeCardSection title="Artisti più rock">
            {rock.map((artist) => <ArtistCard imageUri={artist.images[0].url} artistName={artist.name} key={artist.name} />)}
          </HomeCardSection>
          <HomeCardSection title="Artist Jazz">
            {jazz.map((artist) => <ArtistCard imageUri={artist.images[0].url} artistName={artist.name} key={artist.name} />)}
          </HomeCardSection>

          <HomeCardSection title="Podcast">
            {podcast.map((artist) => <ArtistCard imageUri={artist.images[0].url} artistName={artist.name} key={artist.name} />)}
          </HomeCardSection>

          <FakeListComponent />


        </ScrollView>
      </LinearGradient>
    </SafeAreaView>



  );
}

export default HomeScreen

