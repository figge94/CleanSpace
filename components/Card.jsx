import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
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
            ✨ Skick: {item.condition}
          </Text>
          <Text style={[CardStyle.text, { color: theme.text }]}>
            📅 Senast använd:{" "}
            {item.lastUsed
              ? new Date(item.lastUsed).toLocaleDateString("sv-SE")
              : "Okänt"}
          </Text>
        </View>

        <MaterialIcons
          name="chevron-right"
          size={24}
          color={theme.text}
          style={CardStyle.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  );
}
