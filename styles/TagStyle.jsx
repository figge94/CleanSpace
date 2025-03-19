import { StyleSheet } from "react-native";

export const TagStyle = StyleSheet.create({
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginRight: 3
  },
  tagText: {
    fontSize: 14,
    fontWeight: "semibold",
    textTransform: "lowercase"
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 5
  }
});
