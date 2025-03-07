import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font"; // ✅ Importera fonts
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("../assets/fonts/Outfit-Black.ttf") // 🔹 Kontrollera sökvägen
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#76a5af", "#f0f4f8"]}
      style={styles.container}
      onLayout={onLayoutRootView}>
      <Text style={styles.title}> CleanSpace</Text>

      <Text style={styles.description}>
        Få bättre koll på dina kläder och organisera ditt utrymme med
        CleanSpace!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}>
        <Text style={styles.buttonText}> Detaljer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Clothes")}>
        <Text style={styles.buttonText}> Min garderob</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 15
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: "#76a5af",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    width: 200,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18
  }
});
