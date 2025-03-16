import { useContext } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SettingsContext } from "../context/SettingsContext";
import profilePic from "../assets/user.png";
import { ProfileStyle, ButtonStyle } from "../styles/styles";

export default function ProfileScreen({ navigation }) {
  const { darkMode, toggleDarkMode, theme } = useContext(SettingsContext);

  return (
    <View
      style={[ProfileStyle.container, { backgroundColor: theme.background }]}>
      {/* Profilbild */}
      <Image source={profilePic} style={ProfileStyle.profileImage} />

      {/* Användarnamn & e-post */}
      <Text style={[ProfileStyle.username, { color: theme.text }]}>
        Webmaster
      </Text>
      <Text style={[ProfileStyle.email, { color: theme.text }]}>
        user@example.com
      </Text>

      {/* Statistik-knapp */}
      <TouchableOpacity
        style={[
          ButtonStyle.button,
          { backgroundColor: theme.buttonBackground }
        ]}
        onPress={() => navigation.navigate("Statistics")}>
        <MaterialIcons name="bar-chart" size={22} color={theme.buttonText} />
        <Text style={[ButtonStyle.buttonText, { color: theme.buttonText }]}>
          Statistik
        </Text>
      </TouchableOpacity>

      {/* Inställningar-sektion */}
      <View style={ProfileStyle.settingsContainer}>
        <Text style={[ProfileStyle.settingsHeader, { color: theme.text }]}>
          Inställningar
        </Text>

        {/* Knapp: Växla mörkt/ljust läge */}
        <TouchableOpacity
          style={[
            ButtonStyle.button,
            { backgroundColor: theme.buttonBackground }
          ]}
          onPress={toggleDarkMode}>
          <MaterialIcons
            name={darkMode ? "wb-sunny" : "nightlight-round"}
            size={22}
            color={theme.buttonText}
          />
          <Text style={[ButtonStyle.buttonText, { color: theme.buttonText }]}>
            {darkMode ? "Byt till ljust läge" : "Byt till mörkt läge"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
