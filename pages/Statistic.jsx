import { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList
} from "react-native";
import { SettingsContext } from "../context/SettingsContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatisticStyle, GlobalStyle } from "../styles/styles";

export default function StatisticsScreen() {
  const { theme } = useContext(SettingsContext);
  const [data, setData] = useState(null);
  const [clearedClothes, setClearedClothes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      <View
        style={[GlobalStyle.container, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.text} />
      </View>
    );
  if (error)
    return (
      <View
        style={[
          StatisticStyle.container,
          { backgroundColor: theme.background }
        ]}>
        <Text style={[StatisticStyle.errorText, { color: theme.text }]}>
          {error}
        </Text>
      </View>
    );
  if (!data || data.length === 0)
    return (
      <View
        style={[
          StatisticStyle.container,
          { backgroundColor: theme.background }
        ]}>
        <Text style={[StatisticStyle.infoText, { color: theme.text }]}>
          Inga kläder hittades
        </Text>
      </View>
    );

  const totalItems = data.length;
  const totalCleared = clearedClothes.length;
  const latestItem =
    data.sort((a, b) => new Date(b.lastUsed) - new Date(a.lastUsed))[0]?.name ||
    "Inget ännu";

  const categoryCount = data.reduce((acc, item) => {
    const category = item.category?.main || "Okänd";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const mostCommonCategory =
    Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "Ingen kategori";

  return (
    <View
      style={[StatisticStyle.container, { backgroundColor: theme.background }]}>
      <Text style={[StatisticStyle.title, { color: theme.text }]}>
        Statistik
      </Text>

      <View
        style={[
          StatisticStyle.card,
          { backgroundColor: theme.cardBackground }
        ]}>
        <Text style={[StatisticStyle.stat, { color: theme.text }]}>
          Totalt antal plagg: {totalItems}
        </Text>
      </View>

      <View
        style={[
          StatisticStyle.card,
          { backgroundColor: theme.cardBackground }
        ]}>
        <Text style={[StatisticStyle.stat, { color: theme.text }]}>
          Rensade plagg: {totalCleared}
        </Text>
      </View>

      {/* Vanligaste kategori */}
      <View
        style={[
          StatisticStyle.card,
          { backgroundColor: theme.cardBackground }
        ]}>
        <Text style={[StatisticStyle.stat, { color: theme.text }]}>
          Vanligaste kategori: {mostCommonCategory}
        </Text>
      </View>

      {/* Senast använda plagg */}
      <View
        style={[
          StatisticStyle.card,
          { backgroundColor: theme.cardBackground }
        ]}>
        <Text style={[StatisticStyle.stat, { color: theme.text }]}>
          Senast använda plagg: {latestItem}
        </Text>
      </View>

      {/* Lista med klädantal per kategori */}
      <Text style={[StatisticStyle.subTitle, { color: theme.text }]}>
        Kläder per kategori:
      </Text>
      <FlatList
        data={Object.entries(categoryCount)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View
            style={[
              StatisticStyle.card,
              { backgroundColor: theme.cardBackground }
            ]}>
            <Text style={[StatisticStyle.stat, { color: theme.text }]}>
              {item[0]}: {item[1]} plagg
            </Text>
          </View>
        )}
      />
    </View>
  );
}
