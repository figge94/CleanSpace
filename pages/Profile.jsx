import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>

      {/* Knapp för att gå till Details */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")} // Navigera till Details
      >
        <Text style={styles.buttonText}>Gå till Details</Text>
      </TouchableOpacity>
    </View>
  );
}

// 🎨 Styling för bättre utseende
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
