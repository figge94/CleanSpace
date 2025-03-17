import { useEffect, useState, useContext, useMemo } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ScrollView
} from "react-native";
import { SettingsContext } from "../context/SettingsContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatisticStyle, GlobalStyle } from "../styles/styles";

// 🔹 Komponent för statistik-kort
const StatCard = ({ title, value, theme }) => (
  <View
    style={[StatisticStyle.card, { backgroundColor: theme.cardBackground }]}>
    <Text style={[StatisticStyle.statTitle, { color: theme.text }]}>
      {title}
    </Text>
    <Text style={[StatisticStyle.statValue, { color: theme.text }]}>
      {value}
    </Text>
  </View>
);

export default function StatisticsScreen() {
  const { theme } = useContext(SettingsContext);
  const [data, setData] = useState([]); // ✅ Alltid en array från start
  const [clearedClothes, setClearedClothes] = useState([]); // ✅ Alltid en array
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const [itemsResponse, clearedClothesData] = await Promise.all([
          fetch("https://mitt-api.findersson.se/items").then((res) =>
            res.ok ? res.json() : Promise.reject("Kunde inte hämta data")
          ),
          AsyncStorage.getItem("clearedClothes").then((res) =>
            res ? JSON.parse(res) : []
          )
        ]);

        setData(itemsResponse || []);
        setClearedClothes(clearedClothesData || []);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ `useMemo` körs alltid på varje render och returnerar en stabil struktur
  const stats = useMemo(() => {
    return {
      totalItems: data.length,
      totalCleared: clearedClothes.length,
      categoryCount: data.reduce((acc, item) => {
        const category = item.category?.main || "Okänd";
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {})
    };
  }, [data, clearedClothes]);

  // 🔹 Laddningsindikator vid hämtning av data
  if (isLoading) {
    return (
      <View
        style={[
          GlobalStyle.container,
          { backgroundColor: theme.background, justifyContent: "center" }
        ]}>
        <ActivityIndicator size="large" color={theme.text} />
      </View>
    );
  }

  // 🔹 Om fel uppstår, visa meddelande
  if (error) {
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
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          StatisticStyle.container,
          { backgroundColor: theme.background }
        ]}>
        <Text style={[GlobalStyle.title, { color: theme.text }]}>
          Statistik
        </Text>

        <View style={StatisticStyle.statsWrapper}>
          <StatCard
            title="Totalt antal plagg"
            value={stats.totalItems}
            theme={theme}
          />
          <StatCard
            title="Rensade plagg"
            value={stats.totalCleared}
            theme={theme}
          />
        </View>

        <Text style={[GlobalStyle.subTitle, { color: theme.text }]}>
          Kläder per kategori:
        </Text>

        <FlatList
          data={Object.entries(stats.categoryCount)}
          keyExtractor={(item) => item[0]}
          numColumns={2} // 🔹 Grid-layout med två kolumner
          columnWrapperStyle={StatisticStyle.row} // 🔹 Anpassa radlayout
          renderItem={({ item }) => (
            <StatCard
              title={item[0]}
              value={`${item[1]} plagg`}
              theme={theme}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}
