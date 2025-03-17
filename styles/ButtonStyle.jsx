import { StyleSheet } from "react-native";

const ButtonStyle = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginTop: 15,
    width: "90%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
    textTransform: "uppercase"
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    marginTop: 20
  },
  buttonTextWhite: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5
  }
});

export default ButtonStyle;
