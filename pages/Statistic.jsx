import { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList
} from "react-native";
import { SettingsContext } from "../context/SettingsContext"; // ✅ Hämta globalt tema
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StatisticsScreen() {
  const { theme } = useContext(SettingsContext); // ✅ Hämta globalt tema
  const [data, setData] = useState(null);
  const [clearedClothes, setClearedClothes] = useState([]); // ✅ Rensade kläder
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hämtar kläder från API
    const fetchItems = async () => {
      try {
        setError(null);
        const response = await fetch("https://mitt-api.findersson.se/items");
        if (!response.ok) throw new Error("Kunde inte hämta data");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    // Hämtar rensade kläder från AsyncStorage
    const fetchClearedClothes = async () => {
      try {
        const storedCleared = await AsyncStorage.getItem("clearedClothes");
        if (storedCleared) {
          setClearedClothes(JSON.parse(storedCleared));
        }
      } catch (error) {
        console.error("Kunde inte hämta rensade kläder:", error);
      }
    };

    Promise.all([fetchItems(), fetchClearedClothes()]).finally(() =>
      setLoading(false)
    );
  }, []);

  if (isLoading)
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.text} />
      </View>
    );
  if (error)
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.errorText, { color: theme.text }]}>{error}</Text>
      </View>
    );
  if (!data || data.length === 0)
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.infoText, { color: theme.text }]}>
          Inga kläder hittades
        </Text>
      </View>
    );

  // 📊 Statistikberäkningar
  const totalItems = data.length;
  const totalCleared = clearedClothes.length; // ✅ Antal rensade plagg
  const latestItem =
    data.sort((a, b) => new Date(b.lastUsed) - new Date(a.lastUsed))[0]?.name ||
    "Inget ännu";

  // Vanligaste kategorin
  const categoryCount = data.reduce((acc, item) => {
    const category = item.category?.main || "Okänd";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const mostCommonCategory =
    Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "Ingen kategori";

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Statistik</Text>

      {/* Totalt antal plagg */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.stat, { color: theme.text }]}>
          Totalt antal plagg: {totalItems}
        </Text>
      </View>

      {/* Totalt antal rensade plagg */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.stat, { color: theme.text }]}>
          Rensade plagg: {totalCleared}
        </Text>
      </View>

      {/* Vanligaste kategori */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.stat, { color: theme.text }]}>
          Vanligaste kategori: {mostCommonCategory}
        </Text>
      </View>

      {/* Senast använda plagg */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.stat, { color: theme.text }]}>
          Senast använda plagg: {latestItem}
        </Text>
      </View>

      {/* Lista med klädantal per kategori */}
      <Text style={[styles.subTitle, { color: theme.text }]}>
        Kläder per kategori:
      </Text>
      <FlatList
        data={Object.entries(categoryCount)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View
            style={[styles.card, { backgroundColor: theme.cardBackground }]}>
            <Text style={[styles.stat, { color: theme.text }]}>
              {item[0]}: {item[1]} plagg
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10
  },
  stat: {
    fontSize: 16,
    marginBottom: 5
  },
  errorText: {
    fontSize: 16,
    color: "red"
  },
  infoText: {
    fontSize: 16,
    color: "gray"
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    gap: 6,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2
  }
});
