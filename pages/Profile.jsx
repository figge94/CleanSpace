import { useContext } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SettingsContext } from "../context/SettingsContext"; // ✅ Importera inställningar

export default function ProfileScreen({ navigation }) {
  const { darkMode, toggleDarkMode, theme } = useContext(SettingsContext); // ✅ Hämta temat

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Profilbild */}
      <Image
        source={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }}
        style={[styles.profileImage, { borderColor: theme.buttonBackground }]}
      />

      {/* Användarnamn & e-post */}
      <Text style={[styles.username, { color: theme.text }]}>Användare123</Text>
      <Text style={[styles.email, { color: theme.text }]}>
        user@example.com
      </Text>

      {/* Sektion för statistik */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={() => navigation.navigate("Statistics")}>
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          📊 Visa Statistik
        </Text>
      </TouchableOpacity>

      {/* Inställningar-sektion */}
      <View style={styles.settingsContainer}>
        <Text style={[styles.settingsHeader, { color: theme.text }]}>
          Inställningar
        </Text>

        {/* Knapp: Växla mörkt/ljust läge */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.buttonBackground }]}
          onPress={toggleDarkMode}>
          <Text style={[styles.buttonText, { color: theme.buttonText }]}>
            {darkMode ? "Byt till ljust läge" : "Byt till mörkt läge"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 📌 Styling för responsivt UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5
  },
  email: {
    fontSize: 16,
    marginBottom: 20
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  settingsContainer: {
    marginTop: 40, // Lägger lite mellanrum mellan knapparna och inställningarna
    alignItems: "center",
    width: "100%"
  },
  settingsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15
  }
});
