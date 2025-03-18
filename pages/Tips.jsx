import { useState, useContext } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { SettingsContext } from "../context/SettingsContext";
import { GlobalStyle } from "../styles/styles";
import TipItem from "../components/TipItem";
import { TipsStyle } from "../styles/TipsStyle";
import allTips from "../data/TipsData";

export default function TipsScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const { theme } = useContext(SettingsContext);

  const categories = [
    { name: "Alla", icon: "apps" },
    { name: "Förvaring", icon: "box" },
    { name: "Organisering", icon: "th-list" },
    { name: "Tvätt", icon: "tshirt" },
    { name: "Mer utrymme", icon: "expand" }
  ];

  // 🔍 Filtrera tips baserat på vald kategori
  const filteredTips =
    selectedCategory === "Alla"
      ? allTips
      : allTips.filter((tip) => tip.category === selectedCategory);

  return (
    <View
      style={[GlobalStyle.container, { backgroundColor: theme.background }]}>
      <Text style={[GlobalStyle.title, { color: theme.text }]}>Tips</Text>

      {/* Kategoriknappar */}
      <View style={TipsStyle.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.name}
            style={[
              TipsStyle.categoryButton,
              {
                backgroundColor:
                  selectedCategory === category.name
                    ? theme.activeButtonBackground
                    : theme.notActiveButtonBackground
              }
            ]}
            onPress={() => setSelectedCategory(category.name)}>
            <FontAwesome5
              name={category.icon}
              size={16}
              color={theme.buttonText}
              style={TipsStyle.categoryIcon}
            />
            <Text
              style={[
                TipsStyle.categoryButtonText,
                { color: theme.buttonText }
              ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista med collapsible tips */}
      <FlatList
        data={filteredTips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TipItem item={item} theme={theme} />}
        contentContainerStyle={TipsStyle.content}
        ListFooterComponent={<View style={{ height: 30 }} />}
      />
    </View>
  );
}
