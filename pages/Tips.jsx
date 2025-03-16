import { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
  UIManager,
  Platform
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { SettingsContext } from "../context/SettingsContext";
import { TipsStyle, GlobalStyle } from "../styles/styles";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TipsScreen({ navigation }) {
  const [expandedTip, setExpandedTip] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Alla");

  const { theme } = useContext(SettingsContext);

  // 🎯 Lista med kategoriserade tips
  const allTips = [
    {
      id: "1",
      category: "Förvaring",
      title: "📦 Sortera efter säsong",
      text: "Lägg undan sommarkläder på vintern för mer utrymme."
    },
    {
      id: "2",
      category: "Förvaring",
      title: "👟 Förvara skor rätt",
      text: "Använd genomskinliga skoboxar för snabb överblick."
    },
    {
      id: "3",
      category: "Förvaring",
      title: "👜 Använd dörrhängare",
      text: "Perfekt för att hänga väskor, skärp eller scarves."
    },
    {
      id: "4",
      category: "Organisering",
      title: "🎨 Färgkoordinera garderoben",
      text: "Sortera kläder efter färg för en snyggare garderob."
    },
    {
      id: "5",
      category: "Organisering",
      title: "🛍️ Häng upp outfits",
      text: "Planera kläder för veckan och häng upp dem i ordning."
    },
    {
      id: "6",
      category: "Tvätt",
      title: "🧺 Tvätta i kallt vatten",
      text: "Kallt vatten sparar energi och håller färger längre."
    },
    {
      id: "7",
      category: "Tvätt",
      title: "🌿 Vädring istället för tvätt",
      text: "Många kläder behöver bara vädras istället för att tvättas."
    },
    {
      id: "8",
      category: "Mer utrymme",
      title: "🛏️ Utnyttja plats under sängen",
      text: "Förvara lådor med säsongskläder under sängen."
    },
    {
      id: "9",
      category: "Mer utrymme",
      title: "📏 Använd vertikal förvaring",
      text: "Häng fler hyllor eller krokar för att spara golvyta."
    }
  ];

  // 🎯 Lista med kategorier och ikoner
  const categories = [
    { name: "Alla", icon: "apps" },
    { name: "Förvaring", icon: "box" },
    { name: "Organisering", icon: "th-list" },
    { name: "Tvätt", icon: "local-laundry-service" },
    { name: "Mer utrymme", icon: "expand" }
  ];

  // 🔍 Filtrera tips baserat på vald kategori
  const filteredTips =
    selectedCategory === "Alla"
      ? allTips
      : allTips.filter((tip) => tip.category === selectedCategory);

  // 🔄 Expandera eller kollapsa ett tips
  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedTip(expandedTip === id ? null : id);
  };

  return (
    <View
      style={[GlobalStyle.container, { backgroundColor: theme.background }]}>
      <Text style={[TipsStyle.header, { color: theme.text }]}>Tips</Text>

      {/* Kategoriknappar med ikoner */}
      <View style={TipsStyle.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.name}
            style={[
              TipsStyle.categoryButton,
              selectedCategory === category.name && {
                backgroundColor: theme.buttonBackground
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
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => toggleExpand(item.id)}
            style={[
              TipsStyle.tipCard,
              expandedTip === item.id && TipsStyle.tipCardExpanded,
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
                name={expandedTip === item.id ? "expand-less" : "expand-more"}
                size={24}
                color={theme.text}
              />
            </View>
            {expandedTip === item.id && (
              <Text style={[TipsStyle.tipText, { color: theme.text }]}>
                {item.text}
              </Text>
            )}
          </TouchableOpacity>
        )}
        contentContainerStyle={TipsStyle.listContent}
      />
    </View>
  );
}
