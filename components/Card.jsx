import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  content: {
    fontSize: 14,
    marginTop: 5
  }
});

export default Card;
