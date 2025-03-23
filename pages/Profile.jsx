import { useContext } from "react";
import { Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SettingsContext } from "../context/SettingsContext";
import profilePic from "../assets/user.png";
import { ProfileStyle } from "../styles/pages/ProfilePageStyle";
import { ImageStyle } from "../styles/ImageStyle";
import Button from "../components/Button";
import { Animated } from "react-native";

export default function ProfileScreen({ navigation }) {
  const { darkMode, toggleDarkMode, theme } = useContext(SettingsContext);

  const transition = new Animated.Value(darkMode ? 1 : 0);

  Animated.timing(transition, {
    toValue: darkMode ? 0 : 1,
    duration: 300,
    useNativeDriver: false
  }).start();

  return (
    <View
      style={[ProfileStyle.container, { backgroundColor: theme.background }]}>
      <Image source={profilePic} style={ImageStyle.profileImage} />

      <Text style={[ProfileStyle.username, { color: theme.text }]}>
        Webmaster
      </Text>
      <Text style={[ProfileStyle.email, { color: theme.text }]}>
        user@example.com
      </Text>

      <Button
        icon={
          <MaterialIcons name="bar-chart" size={22} color={theme.buttonText} />
        }
        title="Statistik"
        onPress={() => navigation.navigate("Statistics")}
        theme={theme}
      />

      <View style={ProfileStyle.settingsContainer}>
        <Text style={[ProfileStyle.settingsHeader, { color: theme.text }]}>
          Inställningar:
        </Text>

        <Button
          icon={
            <MaterialIcons
              name={darkMode ? "wb-sunny" : "nightlight-round"}
              size={22}
              color={theme.buttonText}
            />
          }
          title={darkMode ? "Byt till ljust läge" : "Byt till mörkt läge"}
          onPress={toggleDarkMode}
          theme={theme}
        />
      </View>
    </View>
  );
}
