import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { CardStyle } from "../styles/CardStyle";

export default function Card({ item, theme, onPress }) {
  return (
    <TouchableOpacity
      style={[CardStyle.card, { backgroundColor: theme.cardBackground }]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={CardStyle.cardContent}>
        <View>
          <Text style={[CardStyle.title, { color: theme.text }]}>
            {item.name}
          </Text>

          <Text style={[CardStyle.text, { color: theme.text }]}>
            Skick: {item.condition}
          </Text>
          <Text style={[CardStyle.text, { color: theme.text }]}>
            Senast använd:{" "}
            {item.lastUsed
              ? new Date(item.lastUsed).toLocaleDateString("sv-SE")
              : "Okänt"}
          </Text>
        </View>

        <EvilIcons
          name="chevron-right"
          size={40}
          color={theme.text}
          style={CardStyle.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  );
}
