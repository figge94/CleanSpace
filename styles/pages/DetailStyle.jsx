import { StyleSheet } from "react-native";

export const DetailStyle = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
    paddingHorizontal: 20
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    textAlign: "center"
  },
  detailsCard: {
    padding: 14,
    borderRadius: 10,
    marginTop: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4
  },
  colorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  colorCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    marginLeft: 6
  },
  noteContainer: {
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 20,
    elevation: 3
  },
  notes: {
    fontSize: 14,
    fontStyle: "italic",
    opacity: 0.85,
    flexShrink: 1,
    padding: 15,
    borderRadius: 10
  },
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  }
});
