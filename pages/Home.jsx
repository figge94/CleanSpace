import React, { useCallback, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SettingsContext } from "../context/SettingsContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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
      style={[styles.container, { backgroundColor: theme.background }]}
      onLayout={onLayoutRootView}>
      {/* Snygg CleanSpace-sektion högst upp */}
      <View
        style={[
          styles.headerSection,
          { backgroundColor: theme.buttonBackground }
        ]}>
        <Text style={[styles.headerTitle, { color: theme.buttonText }]}>
          CleanSpace
        </Text>
      </View>

      {/* Beskrivning */}
      <Text style={[styles.description, { color: theme.text }]}>
        Organisera din garderob och skapa ordning i ditt hem på ett smart sätt!
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

// 🎨 **Förbättrad stil – Minimalistisk och modern design**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerSection: {
    position: "absolute",
    top: 0,
    width: "100%",
    paddingVertical: 60,
    alignItems: "center",
    elevation: 5
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.5
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 20,
    opacity: 0.8,
    marginTop: 100 // Justering för att inte hamna under headern
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
