import { StyleSheet } from "react-native";

export const ImageStyle = StyleSheet.create({
  wardrobeImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 90,
    marginHorizontal: 20
  },
  profileImage: {
    width: 180,
    height: 180,
    marginBottom: 15,
    elevation: 5,
    borderRadius: 90,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6
  }
});
