import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Appnamn */}
      <Text style={styles.title}>✨ CleanSpace ✨</Text>

      {/* Beskrivning */}
      <Text style={styles.description}>
        Få bättre koll på dina kläder och organisera ditt utrymme med
        CleanSpace!
      </Text>

      {/* Navigeringsknappar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("About")}>
        <Text style={styles.buttonText}>📖 Om appen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Clothes")}>
        <Text style={styles.buttonText}>👕 Mina kläder</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333"
  },
  description: {
    fontSize: 16,
    color: "#666",
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
    width: "80%",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
});
