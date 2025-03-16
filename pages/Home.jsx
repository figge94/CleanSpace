import React, { useCallback, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SettingsContext } from "../context/SettingsContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ButtonStyle, GlobalStyle, HeaderStyle } from "../styles/styles";

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
      {/* Snygg CleanSpace-sektion högst upp */}
      <View
        style={[
          HeaderStyle.headerSection,
          { backgroundColor: theme.buttonBackground }
        ]}>
        <Text style={[HeaderStyle.headerTitle, { color: theme.buttonText }]}>
          CleanSpace
        </Text>
      </View>

      {/* Beskrivning */}
      <Text style={[GlobalStyle.description, { color: theme.text }]}>
        Organisera din garderob och skapa ordning i ditt hem på ett smart sätt!
      </Text>

      {/* Knapp: Gå till garderoben */}
      <TouchableOpacity
        style={[
          ButtonStyle.button,
          { backgroundColor: theme.buttonBackground }
        ]}
        onPress={() => navigation.navigate("Clothes")}>
        <MaterialCommunityIcons
          name="wardrobe"
          size={26}
          color={theme.buttonText}
        />
        <Text style={[ButtonStyle.buttonText, { color: theme.buttonText }]}>
          Min garderob
        </Text>
      </TouchableOpacity>

      {/* Knapp: Visa statistik */}
      <TouchableOpacity
        style={[
          ButtonStyle.button,
          { backgroundColor: theme.buttonBackground }
        ]}
        onPress={() => navigation.navigate("Statistics")}>
        <MaterialCommunityIcons
          name="chart-box"
          size={26}
          color={theme.buttonText}
        />
        <Text style={[ButtonStyle.buttonText, { color: theme.buttonText }]}>
          Visa statistik
        </Text>
      </TouchableOpacity>
    </View>
  );
}
