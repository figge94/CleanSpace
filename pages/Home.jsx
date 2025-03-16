import React, { useCallback, useContext } from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SettingsContext } from "../context/SettingsContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GlobalStyle, HeaderStyle } from "../styles/styles";
import wardrobeImg from "../assets/wardrobe.jpg";
import Button from "../components/Button";
import { ImageStyle } from "../styles/ImageStyle";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("../assets/fonts/Outfit-Black.ttf")
  });

  const { theme } = useContext(SettingsContext);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={[HeaderStyle.container, { backgroundColor: theme.background }]}
      onLayout={onLayoutRootView}>
      <View
        style={[
          HeaderStyle.headerSection,
          { backgroundColor: theme.buttonBackground }
        ]}>
        <Text style={[HeaderStyle.headerTitle, { color: theme.headerText }]}>
          CleanSpace
        </Text>
      </View>

      <Image source={wardrobeImg} style={ImageStyle.wardrobeImage} />

      <Text style={[GlobalStyle.description, { color: theme.text }]}>
        Organisera din garderob och skapa ordning i ditt hem på ett smart sätt!
      </Text>

      <Button
        title="Min garderob"
        onPress={() => navigation.navigate("Clothes")}
        icon={
          <MaterialCommunityIcons
            name="wardrobe"
            size={26}
            color={theme.buttonText}
          />
        }
        theme={theme}
      />

      <Button
        title="Visa statistik"
        onPress={() => navigation.navigate("Statistics")}
        icon={
          <MaterialCommunityIcons
            name="chart-box"
            size={26}
            color={theme.buttonText}
          />
        }
        theme={theme}
      />
    </View>
  );
}
