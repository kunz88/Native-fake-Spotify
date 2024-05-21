import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontLoaded, error] = useFonts({ // permette di utilizzare un font
    "Circular-Spotify-Black": require('../assets/fonts/CircularSpotifyText-Black.otf'),
    "Circular-Spotify-Black-Italic": require('../assets/fonts/CircularSpotifyText-BlackItalic.otf'),
    "Circular-Spotify-Bold": require('../assets/fonts/CircularSpotifyText-Bold.otf'),
    "Circular-Spotify-Book": require('../assets/fonts/CircularSpotifyText-Book.otf'),
    "Circular-Spotify-Book-Italic": require('../assets/fonts/CircularSpotifyText-BookItalic.otf'),
    "Circular-Spotify-Light": require('../assets/fonts/CircularSpotifyText-Light.otf'),
    "Circular-Spotify-Medium": require('../assets/fonts/CircularSpotifyText-Medium.otf'),
    "Circular-Spotify-Medium-Italic": require('../assets/fonts/CircularSpotifyText-MediumItalic.otf'),
  });

  useEffect(() => {
    if (error) {
      throw error
    }
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }

  }, [fontLoaded, error]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(auth)/signin" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
