import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Container from './Container'

const LoaderComponent = () => {
    return (
        <Container>
            <View>
                <Image className="box-border w-36 h-36 mb-5" resizeMode="contain" source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png" }}></Image>
            </View>
        </Container>
    )
}

export default LoaderComponent
