import { StyleSheet } from "react-native";

export const TipsStyle = StyleSheet.create({
  categoryScroll: {
    paddingVertical: 1,
    paddingHorizontal: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 2,
    backgroundColor: "#ddd",
    elevation: 1
  },
  categoryButtonText: {
    fontSize: 12,
    fontWeight: "bold"
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#007AFF",
    elevation: 2
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  },
  featuredTipContainer: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 12
  },
  featuredTip: {
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: "center"
  },
  featuredTipTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center"
  },
  featuredTipText: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.9
  },
  shuffleButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    elevation: 3,
    backgroundColor: "#28A745"
  },
  shuffleButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#fff"
  },
  tipCard: {
    padding: 14,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    backgroundColor: "#fff"
  },
  tipCardExpanded: {
    minHeight: 100
  },
  tipHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  tipText: {
    fontSize: 14,
    marginTop: 8,
    opacity: 0.9
  },
  content: {
    paddingBottom: 20
  }
});
