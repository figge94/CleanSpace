import { useEffect, useState, useContext } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform
} from "react-native";
import { SettingsContext } from "../context/SettingsContext";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // ✅ Lägg till gradient-effekt

// Aktivera animationer på Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function ClothesScreen({ navigation }) {
  const { theme } = useContext(SettingsContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({}); // 🔹 För collapsible funktion

  const getItems = async () => {
    try {
      setError(null);
      const response = await fetch("https://mitt-api.findersson.se/items");

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Fel vid hämtning:", error);
      setError("Kunde inte hämta kläder. Försök igen senare.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  // **Gruppera kläder efter kategori**
  const groupedItems = data.reduce((acc, item) => {
    const category = item.category?.main || "Okänd kategori";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  //  **Funktion för att expandera/kollapsa en kategori**
  const toggleCategory = (category) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Min garderob</Text>

      {error ? (
        <Text style={[styles.errorText, { color: theme.text }]}>{error}</Text>
      ) : isLoading ? (
        <ActivityIndicator size="large" color={theme.text} />
      ) : (
        <FlatList
          data={Object.keys(groupedItems)}
          keyExtractor={(category) => category}
          renderItem={({ item: category }) => (
            <View style={styles.categorySection}>
              {/* 🔹 Klickbar kategori-header med gradient */}
              <TouchableOpacity
                style={styles.categoryHeader}
                onPress={() => toggleCategory(category)}>
                <LinearGradient
                  colors={["#607ed6", "#14328c"]}
                  style={styles.categoryGradient}>
                  <Text style={styles.categoryTitle}>{category}</Text>
                  <MaterialIcons
                    name={
                      expandedCategories[category]
                        ? "expand-less"
                        : "expand-more"
                    }
                    size={24}
                    color="#fff"
                  />
                </LinearGradient>
              </TouchableOpacity>

              {/* 🔹 Visa kläder om kategorin är expanderad */}
              {expandedCategories[category] && (
                <FlatList
                  data={groupedItems[category]}
                  keyExtractor={(item) => item._id || Math.random().toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate("Details", { item })}>
                      <View
                        style={[
                          styles.card,
                          { backgroundColor: theme.cardBackground }
                        ]}>
                        <Text style={[styles.title, { color: theme.text }]}>
                          {item.name}
                        </Text>
                        <Text style={[styles.text, { color: theme.text }]}>
                          ✨ Skick: {item.condition}
                        </Text>
                        <Text style={[styles.text, { color: theme.text }]}>
                          📅 Senast använd:{" "}
                          {item.lastUsed
                            ? new Date(item.lastUsed).toLocaleDateString(
                                "sv-SE"
                              )
                            : "Okänt"}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              )}
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                getItems();
              }}
            />
          }
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

// Styling med collapsible kategorier och responsiv layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  listContent: {
    paddingBottom: 20
  },
  categorySection: {
    marginBottom: 10
  },
  categoryHeader: {
    borderRadius: 10,
    overflow: "hidden"
  },
  categoryGradient: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff"
  },
  card: {
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    marginVertical: 6,
    marginHorizontal: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8
  },
  text: {
    fontSize: 14,
    opacity: 0.8
  },
  errorText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10
  }
});
