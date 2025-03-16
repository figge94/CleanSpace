import { useContext } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SettingsContext } from "../context/SettingsContext"; // ✅ Importera inställningar
import profilePic from "../assets/user.png";

export default function ProfileScreen({ navigation }) {
  const { darkMode, toggleDarkMode, theme } = useContext(SettingsContext); // ✅ Hämta temat

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Profilbild */}
      <Image source={profilePic} style={styles.profileImage} />

      {/* Användarnamn & e-post */}
      <Text style={[styles.username, { color: theme.text }]}>Webmaster</Text>
      <Text style={[styles.email, { color: theme.text }]}>
        user@example.com
      </Text>

      {/* Statistik-knapp */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={() => navigation.navigate("Statistics")}>
        <MaterialIcons name="bar-chart" size={22} color={theme.buttonText} />
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Statistik
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
          <MaterialIcons
            name={darkMode ? "wb-sunny" : "nightlight-round"}
            size={22}
            color={theme.buttonText}
          />
          <Text style={[styles.buttonText, { color: theme.buttonText }]}>
            {darkMode ? "Byt till ljust läge" : "Byt till mörkt läge"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 📌 Förbättrad stil – Minimalistisk och modern design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 15
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5
  },
  email: {
    fontSize: 16,
    opacity: 0.7
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    width: "90%",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  },
  settingsContainer: {
    marginTop: 30,
    alignItems: "center",
    width: "100%"
  },
  settingsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  }
});
