import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TipsStyle } from "../styles/pages/TipsStyle";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TipItem({
  item,
  theme,
  expandedTipId,
  setExpandedTipId
}) {
  const isExpanded = expandedTipId === item.id;

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedTipId(isExpanded ? null : item.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleExpand}
      style={[
        TipsStyle.tipCard,
        isExpanded && TipsStyle.tipCardExpanded,
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
          name={isExpanded ? "expand-less" : "expand-more"}
          size={24}
          color={theme.text}
        />
      </View>
      {isExpanded && (
        <Text style={[TipsStyle.tipText, { color: theme.text }]}>
          {item.text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
