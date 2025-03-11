import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext"; // ✅ Hämta temat

export default function DetailsScreen({ route, navigation }) {
  const { theme } = useContext(SettingsContext); // ✅ Hämta temat
  const item = route.params?.item; // Kontrollera om item finns

  if (!item) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.errorText, { color: theme.text }]}>
          Ingen information tillgänglig
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            styles.backButton,
            { backgroundColor: theme.buttonBackground }
          ]}>
          <MaterialIcons name="arrow-back" size={20} color="white" />
          <Text style={styles.buttonText}>Gå tillbaka</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>{item.name}</Text>
      <Text style={[styles.infoText, { color: theme.text }]}>
        🛍️ Kategori: {item.category?.main} - {item.category?.sub}
      </Text>
      <Text style={[styles.infoText, { color: theme.text }]}>
        ✨ Skick: {item.condition}
      </Text>
      <Text style={[styles.infoText, { color: theme.text }]}>
        📅 Senast använd:{" "}
        {item.lastUsed ? new Date(item.lastUsed).toLocaleDateString() : "Okänt"}
      </Text>
      <Text style={[styles.infoText, { color: theme.text }]}>
        🏷️ Taggar: {item.tags?.join(", ") || "Inga taggar"}
      </Text>
      {item.notes && (
        <Text style={[styles.notes, { color: theme.text }]}>
          📝 {item.notes}
        </Text>
      )}
      <Text style={[styles.dateText, { color: theme.text }]}>
        📅 Skapad:{" "}
        {item.createdAt
          ? new Date(item.createdAt).toLocaleDateString()
          : "Okänt"}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[
          styles.backButton,
          { backgroundColor: theme.buttonBackground }
        ]}>
        <MaterialIcons name="arrow-back" size={20} color="white" />
        <Text style={styles.buttonText}>Gå tillbaka</Text>
      </TouchableOpacity>
    </View>
  );
}

// 📌 Styling med mörkt läge-stöd
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5
  },
  notes: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 10
  },
  dateText: {
    fontSize: 14,
    marginTop: 10
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center"
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginTop: 20
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5
  }
});
