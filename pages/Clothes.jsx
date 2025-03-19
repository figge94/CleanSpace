import { useEffect, useState, useContext } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { SettingsContext } from "../context/SettingsContext";
import { GlobalStyle } from "../styles/global/GlobalStyle";
import Card from "../components/Card";

export default function ClothesScreen({ navigation }) {
  const { theme } = useContext(SettingsContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]); // Håller API-data
  const [selectedCategory, setSelectedCategory] = useState("Alla"); // 🔹 "Alla" är förvald
  const [error, setError] = useState(null);

  // **Hämta data från API**
  useEffect(() => {
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
      }
    };

    getItems();
  }, []);

  // **Hämta unika kategorier**
  const categories = [
    "Alla",
    ...new Set(data.map((item) => item.category?.main || "Okänd"))
  ];

  // **Filtrera kläder baserat på vald kategori**
  const filteredData =
    selectedCategory === "Alla"
      ? data
      : data.filter((item) => item.category?.main === selectedCategory);

  return (
    <View
      style={[GlobalStyle.container, { backgroundColor: theme.background }]}>
      <Text style={[GlobalStyle.title, { color: theme.text }]}>
        Min garderob
      </Text>

      <View style={{ marginBottom: 15, paddingHorizontal: 10 }}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{
            paddingVertical: 10
          }}
          renderItem={({ item }) => {
            const isSelected = selectedCategory === item;
            return (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginHorizontal: 3,
                  borderRadius: 8,
                  backgroundColor: isSelected
                    ? theme.buttonBackground
                    : theme.cardBackground,
                  borderWidth: 1,
                  borderColor: theme.borderColor,
                  elevation: isSelected ? 4 : 0
                }}>
                <Text
                  style={{
                    color: isSelected ? "#fff" : theme.text,
                    fontWeight: "bold",
                    fontSize: 16,
                    textAlign: "center"
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={{ flex: 1, marginBottom: 20 }}>
        <FlatList
          data={filteredData}
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
      </View>
    </View>
  );
}
