import { StyleSheet } from "react-native";

export const TipsStyle = StyleSheet.create({
  /** 🔹 Kategoriknappar i horisontell rad */
  categoryScroll: {
    paddingVertical: 8,
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
    elevation: 3
  },
  categoryButtonText: {
    fontSize: 13,
    fontWeight: "bold"
  },

  /** 🔹 Knapp för att växla mellan att visa/dölja fler tips */
  toggleButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#007AFF",
    elevation: 3
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  },

  /** 🔹 Slumpmässigt tips */
  featuredTipContainer: {
    marginVertical: 20,
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

  /** 🔹 Knapp för att få ett nytt slumpmässigt tips */
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

  /** 🔹 Tips-kort */
  tipCard: {
    padding: 16,
    marginVertical: 8,
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

  /** 🔹 Innehållscontainer */
  content: {
    paddingBottom: 20
  }
});
