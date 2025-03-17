import { StyleSheet } from "react-native";

export const ImageStyle = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 250
  },
  wardrobeImage: {
    position: "absolute",
    top: 0,
    height: 200,
    resizeMode: "cover",
    width: "100%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  shadowContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 200,
    elevation: 5, // Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: "rgba(0,0,0,0.3)"
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
