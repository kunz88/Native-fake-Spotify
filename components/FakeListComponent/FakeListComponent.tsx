import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeCardSection from '../HomeCardSection/HomeCardSection'
import ArtistCard from '../ArtistCard/ArtistCard'
import { FlatList } from 'react-native-gesture-handler'


const top = [{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Artists-Global-GREEN_1x1.png", subTitle: "Globally Top Songs", id: 1 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Albums-Global-PURPLE_1x1.png", subTitle: "Top Album", id: 2 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Albums-US-BLACK_1x1.png", subTitle: "Top Album US", id: 3 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Anticipated-Podcast-Global-YELLOW_1x1.png", subTitle: "Us Creators", id: 4 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Artists-US-LAVENDER_1x1.png", subTitle: "Us Artists", id: 5 }]

const audiobook = [{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/09/Commute-read_blue.jpg", subTitle: "Metro urban", id: 6 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/09/On-the-go-read_green-scaled.jpg", subTitle: "Her", id: 7 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Social_2.png", subTitle: "Travel", id: 8 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Social_3.png", subTitle: "Romance", id: 9 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/09/Beach-reads_blue.jpg", subTitle: "On the Beach", id: 510}]

const podcast = [{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/03/Spotify-for-Podcasters-1.png", subTitle: "Spotify for Podcaster", id: 11 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/01/Credit_Spotify_Sean-Michon_3.jpg", subTitle: "Sean Michon podcast", id: 12 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/01/SpotifyCampus_13.jpg", subTitle: "Spotify Campus", id: 13 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/01/SpotifyCampus_20.jpg", subTitle: "Accademy per News", id: 14 },
{ pictureUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Artists-US-LAVENDER_1x1.png", subTitle: "Us Artists", id: 15 }]

const FakeListComponent = () => {
    return (
        <>
            <HomeCardSection title="Classifiche in primo piano">
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={top} renderItem={({item}) => <ArtistCard imageUri={item.pictureUrl} artistName={item.subTitle.length > 15 ? `${item.subTitle.slice(0,12)}..`: item.subTitle} key={item.id} />}></FlatList>
               
            </HomeCardSection>
            <HomeCardSection title="Audiobook">
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={audiobook} renderItem={({item}) => <ArtistCard imageUri={item.pictureUrl} artistName={item.subTitle.length > 15 ? `${item.subTitle.slice(0,12)}..`: item.subTitle} key={item.id} />}></FlatList>
            </HomeCardSection>
            <HomeCardSection title="Podcast di tendenza">
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={podcast} renderItem={({item}) => <ArtistCard imageUri={item.pictureUrl} artistName={item.subTitle.length > 15 ? `${item.subTitle.slice(0,12)}..`: item.subTitle} key={item.id} />}></FlatList>
            </HomeCardSection>
        </>

    )
}

export default FakeListComponent

const styles = StyleSheet.create({})