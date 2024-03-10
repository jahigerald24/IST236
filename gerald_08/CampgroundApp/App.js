import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/colors";
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const  [fontsLoaded, fontError ] = useFonts({
    camp: require("./assets/fonts/Pinewood.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  });

  let screen = <HomeScreen />;

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
