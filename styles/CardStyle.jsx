import { StyleSheet } from "react-native";

export const CardStyle = StyleSheet.create({
  card: {
    width: "95%", // Gör kortet responsivt och lämnar luft på sidorna
    padding: 16,
    borderRadius: 12, // Rundade hörn för modern look
    flexDirection: "row", // Kortet har horisontell layout
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    boxShadow: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // För Android-skuggor
    marginVertical: 8,
    fontFamily: "Montserrat",
    backgroundColor: "#c7c7ff"
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "left"
  },
  text: {
    fontSize: 16,
    opacity: 0.8,
    textAlign: "left"
  },
  arrowIcon: {
    marginLeft: 10
  }
});
