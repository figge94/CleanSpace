import React from "react";
import { Pressable, Text } from "react-native";
import ButtonStyle from "../styles/ButtonStyle";

export default function Button({ title, onPress, icon, theme }) {
  return (
    <Pressable
      style={({ pressed }) => [
        ButtonStyle.button,
        { backgroundColor: theme.buttonBackground, opacity: pressed ? 0.7 : 1 }
      ]}
      onPress={onPress}>
      {icon}
      <Text style={[ButtonStyle.buttonText, { color: theme.buttonText }]}>
        {title}
      </Text>
    </Pressable>
  );
}
