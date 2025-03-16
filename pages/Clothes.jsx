import { useEffect, useState, useContext, useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  RefreshControl
} from "react-native";
import { SettingsContext } from "../context/SettingsContext";
import { GlobalStyle } from "../styles/styles";
import Card from "../components/Card";

export default function ClothesScreen({ navigation }) {
  const { theme } = useContext(SettingsContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]); // 🛠️ Håller API-data
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // **Hämta data från API**
  const getItems = async () => {
    try {
      setError(null);
      setLoading(true);
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

  return (
    <View
      style={[GlobalStyle.container, { backgroundColor: theme.background }]}>
      <Text style={[GlobalStyle.title, { color: theme.text }]}>
        Min garderob
      </Text>

      {/* 🛠️ Om fel uppstod vid hämtning */}
      {error ? (
        <Text style={[GlobalStyle.errorText, { color: theme.text }]}>
          {error}
        </Text>
      ) : isLoading ? (
        <ActivityIndicator size="large" color={theme.text} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card
              key={item._id}
              item={item}
              theme={theme}
              onPress={() => navigation.navigate("Details", { item })}
            />
          )}
        />
      )}
    </View>
  );
}
