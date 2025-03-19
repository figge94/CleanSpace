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
    backgroundColor: theme.cardBackground,
    borderColor: theme.borderColor,
    borderWidth: 1,
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
