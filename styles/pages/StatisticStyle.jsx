import { StyleSheet } from "react-native";

export const StatisticStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start"
  },
  statsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 6
  },
  card: {
    minWidth: "45%",
    margin: 6,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center"
  },
  statTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5
  },
  statValue: {
    fontSize: 18,
    color: "#444"
  }
});
