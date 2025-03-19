import { StyleSheet } from "react-native";

export const DetailStyle = StyleSheet.create({
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.5
  },
  detailsCard: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    marginBottom: 15
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flexWrap: "wrap"
  },
  colorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 6,
    borderWidth: 1
  },
  noteContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 15,
    padding: 10,
    borderRadius: 8,
    marginVertical: 20
  },
  notes: {
    fontSize: 16,
    fontStyle: "italic",
    marginLeft: 8,
    opacity: 0.9,
    textAlign: "left"
  }
});
