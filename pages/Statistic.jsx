import { useEffect, useState, useContext, useMemo } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SettingsContext } from "../context/SettingsContext";
import { StatisticStyle } from "../styles/pages/StatisticStyle";
import { CardStyle } from "../styles/CardStyle";
import { GlobalStyle } from "../styles/global/GlobalStyle";

const StatCard = ({ title, value, theme }) => (
  <View
    style={[
      StatisticStyle.card,
      {
        backgroundColor: theme.cardBackground,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
      }
    ]}>
    <Text
      style={[
        StatisticStyle.statTitle,
        { color: theme.text, fontWeight: "bold", fontSize: 16 }
      ]}>
      {title}
    </Text>
    <Text
      style={[
        StatisticStyle.statValue,
        { color: theme.text, fontSize: 18, fontWeight: "bold" }
      ]}>
      {value}
    </Text>
  </View>
);

export default function StatisticsScreen() {
  const { theme } = useContext(SettingsContext);
  const [data, setData] = useState([]);
  const [clearedClothes, setClearedClothes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const itemsResponse = await fetch(
          "https://mitt-api.findersson.se/items"
        );
        if (!itemsResponse.ok) throw new Error("Kunde inte hämta data");

        const itemsData = await itemsResponse.json();
        setData(itemsData || []);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const stats = useMemo(() => {
    return {
      totalItems: data.length,
      categoryCount: data.reduce((acc, item) => {
        const category = item.category?.main || "Okänd";
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {})
    };
  }, [data]);

  return (
    <View
      style={[GlobalStyle.container, { backgroundColor: theme.background }]}>
      <Text style={[GlobalStyle.title, { color: theme.text }]}>Statistik</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color={theme.text} />
      ) : error ? (
        <Text style={[StatisticStyle.errorText, { color: theme.text }]}>
          {error}
        </Text>
      ) : (
        <>
          <View style={[CardStyle.statsWrapper, { paddingVertical: 10 }]}>
            <StatCard
              title="Totalt antal plagg"
              value={stats.totalItems}
              theme={theme}
            />
          </View>

          <Text
            style={[
              GlobalStyle.subTitle,
              { color: theme.text, marginTop: 10 }
            ]}>
            Antal kläder per kategori:
          </Text>

          <FlatList
            data={Object.entries(stats.categoryCount)}
            keyExtractor={(item) => item[0]}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between", padding: 2 }}
            renderItem={({ item }) => (
              <StatCard title={item[0]} value={`${item[1]} st`} theme={theme} />
            )}
          />
        </>
      )}
    </View>
  );
}
