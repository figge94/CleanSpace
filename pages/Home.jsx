import React, { useCallback, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SettingsContext } from "../context/SettingsContext"; // Importera temat
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("../assets/fonts/Outfit-Black.ttf") // Kontrollera sökvägen
  });

  const { theme } = useContext(SettingsContext); // Hämta temat

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
      style={[styles.container, { backgroundColor: theme.background }]}
      onLayout={onLayoutRootView}>
      {/* Välkomstbild med skugga */}
      <Image
        source={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }}
        style={[styles.image, { borderColor: theme.text }]}
      />

      {/* Appens namn */}
      <Text style={[styles.title, { color: theme.text }]}>CleanSpace</Text>

      {/* Välkomsttext */}
      <Text style={[styles.subtitle, { color: theme.text }]}>Välkommen!</Text>
      <Text style={[styles.description, { color: theme.text }]}>
        Få bättre koll på dina kläder och organisera ditt utrymme med
        CleanSpace!
      </Text>

      {/* Knapp: Gå till garderoben */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={() => navigation.navigate("Clothes")}>
        <MaterialCommunityIcons
          name="wardrobe"
          size={26}
          color={theme.buttonText}
        />
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Min garderob
        </Text>
      </TouchableOpacity>

      {/* Knapp: Visa statistik */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={() => navigation.navigate("Statistics")}>
        <MaterialCommunityIcons
          name="chart-box"
          size={26}
          color={theme.buttonText}
        />
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Visa statistik
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65, // Rundad bild
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#fff",
    shadowColor: "#000", // Subtil skugga för en snygg effekt
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 2 // Lite extra mellanrum mellan bokstäver
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 20
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginTop: 15,
    width: "80%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
    textTransform: "uppercase"
  }
});
