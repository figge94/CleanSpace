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

          <View style={{ flexDirection: "row", marginVertical: 4 }}>
            {item.colors && item.colors.length > 0 ? (
              item.colors.map((color, index) => (
                <View
                  key={index}
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: color,
                    marginRight: 4,
                    borderWidth: 1,
                    borderColor:
                      theme.text === "#000000" ? "#ffffff" : "#cccccc"
                  }}
                />
              ))
            ) : (
              <Text style={[CardStyle.text, { color: theme.text }]}>
                Ingen färg
              </Text>
            )}
          </View>

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
