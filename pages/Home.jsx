import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient colors={["#76a5af", "#f0f4f8"]} style={styles.container}>
      <Text style={styles.title}>✨ CleanSpace ✨</Text>

      <Text style={styles.description}>
        Få bättre koll på dina kläder och organisera ditt utrymme med
        CleanSpace!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}>
        <Text style={styles.buttonText}>📖 Detaljer</Text>
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "MsMadi-Regular",
    marginBottom: 10
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
