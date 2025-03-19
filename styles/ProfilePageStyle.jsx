import { StyleSheet } from "react-native";

export const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
    justifyContent: "center"
  },
  username: {
    fontSize: 24,
    fontWeight: "bold"
  },
  email: {
    fontSize: 16,
    opacity: 0.7
  },
  settingsContainer: {
    marginTop: 20,
    alignItems: "center",
    width: "100%"
  },
  settingsHeader: {
    fontSize: 24,
    fontWeight: "bold"
  }
});
