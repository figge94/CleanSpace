import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#c7c7ff"
  },
  settingsContainer: {
    marginTop: 30,
    alignItems: "center",
    width: "100%"
  },
  settingsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 20,
    opacity: 0.8,
    marginTop: 100
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    margin: 5,
    backgroundColor: "#e0e0e0",
    elevation: 3
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: "bold"
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
    fontSize: 18,
    marginLeft: 8
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center"
  }
});

export const HeaderStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerSection: {
    position: "absolute",
    top: 0,
    width: "100%",
    paddingVertical: 60,
    alignItems: "center",
    elevation: 5
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.5
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    opacity: 0.8
  }
});

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
    fontWeight: "bold",
    marginBottom: 5
  },
  email: {
    fontSize: 16,
    opacity: 0.7
  },
  settingsContainer: {
    marginTop: 30,
    alignItems: "center",
    width: "100%"
  },
  settingsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  }
});

export const TagStyle = StyleSheet.create({
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginRight: 6,
    marginBottom: 6
  },
  tagText: {
    fontSize: 14,
    fontWeight: "bold"
  }
});

export const StatisticStyle = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-between", // 🆕 Jämn fördelning av korten
    marginBottom: 10
  },
  card: {
    flex: 1, // 🆕 Så att varje kort tar lika mycket plats
    padding: 15,
    borderRadius: 10,
    margin: 5, // 🆕 Avstånd mellan korten
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center"
  },
  stat: {
    fontSize: 16,
    marginBottom: 5
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start"
  },

  infoText: {
    fontSize: 16,
    color: "gray"
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5, // 🆕 Ger avstånd mellan titel och antal
    textTransform: "capitalize" // 🆕 Gör första bokstaven stor
  },
  stat: {
    fontSize: 16,
    textAlign: "center"
  }
});

export const DetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  detailsCard: {
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
    borderWidth: 2
  },
  infoText: {
    fontSize: 18,
    marginLeft: 8
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 8
  },
  detailTag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginRight: 6,
    marginBottom: 6
  },
  detailTagText: {
    fontSize: 14,
    fontWeight: "bold"
  },
  noteContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f5f5f5"
  },
  notes: {
    fontSize: 16,
    fontStyle: "italic",
    marginLeft: 8
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    marginTop: 20
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5
  }
});
