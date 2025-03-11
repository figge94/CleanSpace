import { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SettingsContext } from "../context/SettingsContext"; // ✅ Importera globalt tema

// Aktivera animationer på Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TipsScreen({ navigation }) {
  const [expandedTip, setExpandedTip] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Alla");

  const { theme } = useContext(SettingsContext); // ✅ Hämta temat

  // Lista med kategoriserade tips
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

  // Lista med kategorier
  const categories = [
    "Alla",
    "Förvaring",
    "Organisering",
    "Tvätt",
    "Mer utrymme"
  ];

  // Filtrera tips baserat på vald kategori
  const filteredTips =
    selectedCategory === "Alla"
      ? allTips
      : allTips.filter((tip) => tip.category === selectedCategory);

  // Expandera eller kollapsa ett tips
  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedTip(expandedTip === id ? null : id);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>
        🧥 Garderobstips
      </Text>

      {/* Kategoriknappar */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && {
                backgroundColor: theme.buttonBackground
              }
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[styles.categoryButtonText, { color: theme.buttonText }]}>
              {category}
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
            onPress={() => toggleExpand(item.id)}
            style={[
              styles.tipCard,
              expandedTip === item.id && styles.tipCardExpanded,
              {
                backgroundColor: theme.cardBackground,
                borderColor: theme.borderColor
              }
            ]}>
            <View style={styles.tipHeader}>
              <Text style={[styles.tipTitle, { color: theme.text }]}>
                {item.title}
              </Text>
              <MaterialIcons
                name={expandedTip === item.id ? "expand-less" : "expand-more"}
                size={24}
                color={theme.text}
              />
            </View>
            {expandedTip === item.id && (
              <Text style={[styles.tipText, { color: theme.text }]}>
                {item.text}
              </Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// 📌 Styling med stöd för mörkt tema
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10
  },
  categoryButton: {
    backgroundColor: "lightgray",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 5
  },
  categoryButtonText: {
    fontSize: 14
  },
  tipCard: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3
  },
  tipCardExpanded: {
    minHeight: 100
  },
  tipHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  tipText: {
    fontSize: 14,
    marginTop: 5
  }
});
