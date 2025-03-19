import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#c7c7ff"
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 20,
    opacity: 0.8,
    marginTop: 100
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center"
  },
  infoText: {
    fontSize: 14,
    marginLeft: 8
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center"
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center"
  }
});
