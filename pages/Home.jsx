import React, { useEffect, useContext, useState } from "react";
import { Text, View, Image, SafeAreaView, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SettingsContext } from "../context/SettingsContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GlobalStyle } from "../styles/styles";
import wardrobeImg from "../assets/wardrobe.png";
import Button from "../components/Button";
import { ImageStyle } from "../styles/ImageStyle";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
  const { theme } = useContext(SettingsContext);
  const [isReady, setIsReady] = useState(false);

  // Ladda fonter
  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("../assets/fonts/Outfit-Black.ttf")
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded && theme) {
        await SplashScreen.hideAsync();
        setIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded, theme]);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={ImageStyle.headerContainer}>
          <Image source={wardrobeImg} style={ImageStyle.wardrobeImage} />
        </View>

        <View style={GlobalStyle.contentContainer}>
          <Text style={[GlobalStyle.description, { color: theme.text }]}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              Rensa enkelt, organisera smart
            </Text>
            {"\n"} {/* Radbrytning */}
            <Text style={{ fontSize: 18, opacity: 0.8 }}>
              Få full koll på din garderob snabbt och smidigt.
            </Text>
          </Text>

          <View style={GlobalStyle.buttonContainer}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
