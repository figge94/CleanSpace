import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  View,
  StyleSheet
} from "react-native";

export default function ClothesScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getItems = async () => {
    try {
      const response = await fetch("https://mitt-api.findersson.se/items");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.text}>
                🛍️ Kategori: {item.category.main} - {item.category.sub}
              </Text>
              <Text style={styles.text}>✨ Skick: {item.condition}</Text>
              <Text style={styles.text}>
                📅 Senast använd: {new Date(item.lastUsed).toLocaleDateString()}
              </Text>
              <Text style={styles.text}>🏷️ {item.tags.join(", ")}</Text>
              {item.notes && <Text style={styles.notes}>📝 {item.notes}</Text>}
              <Text style={styles.date}>
                Skapad: {new Date(item.createdAt).toLocaleDateString()}
              </Text>
            </View>
          )}
          scrollEnabled={true}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
          style={{ flex: 1 }}
        />
      )}

      {/* Knappen ligger utanför FlatList så den inte scrollas bort */}
      <View style={styles.buttonContainer}>
        <Button title="Gå tillbaka" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f5f5",
    paddingBottom: 80
  },
  card: {
    backgroundColor: "white",
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
  notes: {
    fontSize: 14,
    fontStyle: "italic",
    color: "gray",
    marginBottom: 3
  },
  date: {
    fontSize: 12,
    color: "gray"
  },
  buttonContainer: {
    paddingVertical: 10,
    alignItems: "center"
  }
});
