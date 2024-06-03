
import ArtistCard from '@/components/ArtistCard/ArtistCard';
import HomeCardSection from '@/components/HomeCardSection/HomeCardSection';
import LoaderComponent from '@/components/LoaderComponent';
import useArtists from '@/hooks/spotifyHooks/useArtists';

import { StoreState } from '@/store/store';

import { LinearGradient } from 'expo-linear-gradient';

import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import CardHeader from '@/components/HomeCardSection/CardHeader';
import FakeListComponent from '@/components/FakeListComponent/FakeListComponent';
import Container from '@/components/Container';
import { useState } from 'react';



const HomeScreen = () => {

  const user = useSelector((state: StoreState) => state.user.value)
  const token = useSelector((state: StoreState) => state.token.value)

  /* console.log(`stored token {from home component} : ${token}`) */


  const [artistsMock, setartistsMock] = useState(['eminem', 'taylor swift', 'radiohead', 'greenday', 'dualipa', 'metallica', 'the cure', 'iron maiden', 'nirvana', 'mogway', 'Louis Armstrong', 'Duke Ellington', 'Miles Davis', 'John Coltrane', 'Ella Fitzgerald', 'Joe Rogan', 'Tim Ferriss', 'Sam Harris', 'Gary Vaynerchuk', 'Brené Brown'])


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




  
  
    return (
      isLoading ?  <LoaderComponent /> :
      <SafeAreaView>
        <LinearGradient colors={["#040306", "#131624"]}>
          <ScrollView className='p-2'>
            <View className='flex flex-row items-center justify-around mt-8 mb-5'>
              <Image source={{
                uri: user.user.avatar ? user.user.avatar : "https://avatar.iran.liara.run/public/37"
              }} style={{ height: 70, width: 70, borderRadius: 50 }}>

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


              <FlatList horizontal showsHorizontalScrollIndicator={false} data={popular} renderItem={({ item }) => <ArtistCard id={item.id} imageUri={item.images[0]?.url} artistName={item.name.length > 15 ? `${item.name.slice(0, 12)}..` : item.name} key={item.name} />}></FlatList>


            </HomeCardSection>
            <HomeCardSection title="Artisti più rock">
              <FlatList horizontal showsHorizontalScrollIndicator={false} data={rock} renderItem={({ item }) => <ArtistCard id={item.id} imageUri={item.images[0]?.url} artistName={item.name.length > 15 ? `${item.name.slice(0, 12)}..` : item.name} key={item.name} />}></FlatList>
            </HomeCardSection>
            <HomeCardSection title="Artist Jazz">
              <FlatList horizontal showsHorizontalScrollIndicator={false} data={jazz} renderItem={({ item }) => <ArtistCard id={item.id} imageUri={item.images[0]?.url} artistName={item.name.length > 15 ? `${item.name.slice(0, 12)}..` : item.name} key={item.name} />}></FlatList>
            </HomeCardSection>

            <HomeCardSection title="Podcast">
              <FlatList horizontal showsHorizontalScrollIndicator={false} data={podcast} renderItem={({ item }) => <ArtistCard id={item.id} imageUri={item.images[0]?.url} artistName={item.name.length > 15 ? `${item.name.slice(0, 12)}..` : item.name} key={item.name} />}></FlatList>
            </HomeCardSection>

            <FakeListComponent />


          </ScrollView>
        </LinearGradient>
      </SafeAreaView>



    );

  }







export default HomeScreen

