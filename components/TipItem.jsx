import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TipsStyle } from "../styles/styles";

// ⚡️ Aktivera LayoutAnimation på Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TipItem({ item, theme }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleExpand}
      style={[
        TipsStyle.tipCard,
        expanded && TipsStyle.tipCardExpanded,
        {
          backgroundColor: theme.cardBackground,
          borderColor: theme.borderColor
        }
      ]}>
      <View style={TipsStyle.tipHeader}>
        <Text style={[TipsStyle.tipTitle, { color: theme.text }]}>
          {item.title}
        </Text>
        <MaterialIcons
          name={expanded ? "expand-less" : "expand-more"}
          size={24}
          color={theme.text}
        />
      </View>
      {expanded && (
        <Text style={[TipsStyle.tipText, { color: theme.text }]}>
          {item.text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
