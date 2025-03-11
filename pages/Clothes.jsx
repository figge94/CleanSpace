import { useEffect, useState, useContext } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  RefreshControl,
  TouchableOpacity
} from "react-native";
import { SettingsContext } from "../context/SettingsContext"; // ✅ Importera tema

export default function ClothesScreen({ navigation }) {
  const { theme } = useContext(SettingsContext); // ✅ Hämta globalt tema
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const getItems = async () => {
    try {
      setError(null); // Nollställ felmeddelande vid varje ny förfrågan
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
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>
        🧥 Min garderob
      </Text>

      {/* Knapp för att lägga till nytt klädesplagg */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={() => navigation.navigate("AddClothes")}>
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          ➕ Lägg till kläder
        </Text>
      </TouchableOpacity>

      {error ? (
        <Text style={[styles.errorText, { color: theme.text }]}>{error}</Text>
      ) : isLoading ? (
        <ActivityIndicator size="large" color={theme.text} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id || Math.random().toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
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
                  🛍️ Kategori: {item.category?.main} - {item.category?.sub}
                </Text>
                <Text style={[styles.text, { color: theme.text }]}>
                  ✨ Skick: {item.condition}
                </Text>
                <Text style={[styles.text, { color: theme.text }]}>
                  📅 Senast använd:{" "}
                  {item.lastUsed
                    ? new Date(item.lastUsed).toLocaleDateString()
                    : "Okänt"}
                </Text>
              </View>
            </TouchableOpacity>
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
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

// 📌 Styling med stöd för mörkt läge
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 80
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  card: {
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  text: {
    fontSize: 14,
    marginBottom: 3
  },
  errorText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10
  }
});
