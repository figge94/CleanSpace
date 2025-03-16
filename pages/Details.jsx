import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function DetailsScreen({ route, navigation }) {
  const { theme } = useContext(SettingsContext);
  const item = route.params?.item;

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
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.title, { color: theme.text }]}>{item.name}</Text>

        {/* Kategori */}
        <InfoRow
          text={`${item.category?.main} / ${item.category?.sub}`}
          theme={theme}
        />

        {/* Färgindikator */}
        <View style={styles.detailContainer}>
          <Text style={[styles.infoText, { color: theme.text }]}>Färg:</Text>
          <View style={styles.colorContainer}>
            {item.colors && item.colors.length > 0 ? (
              item.colors.map((color, index) => (
                <View
                  key={index}
                  style={[
                    styles.colorCircle,
                    {
                      backgroundColor: color,
                      borderColor:
                        theme.text === "#000000" ? "#ffffff" : "#cccccc"
                    }
                  ]}
                />
              ))
            ) : (
              <Text style={[styles.infoText, { color: theme.text }]}>
                Ingen färg
              </Text>
            )}
          </View>
        </View>

        {/* Skick */}
        <InfoRow
          icon="progress-check"
          text={`Skick: ${item.condition}`}
          theme={theme}
        />

        {/* Senast använd */}
        <InfoRow
          icon="history"
          text={`Senast använd: ${
            item.lastUsed
              ? new Date(item.lastUsed).toLocaleDateString("sv-SE")
              : "Okänt"
          }`}
          theme={theme}
        />

        {/* Taggar */}
        <View style={styles.detailContainer}>
          <View style={styles.tagContainer}>
            {item.tags && item.tags.length > 0 ? (
              item.tags.map((tag, index) => (
                <View
                  key={index}
                  style={[
                    styles.tag,
                    { backgroundColor: theme.buttonBackground }
                  ]}>
                  <Text style={[styles.tagText, { color: theme.buttonText }]}>
                    {tag}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={[styles.infoText, { color: theme.text }]}>
                Inga taggar
              </Text>
            )}
          </View>
        </View>

        {/* Anteckningar */}
        {item.notes && (
          <View style={styles.noteContainer}>
            <EvilIcons name="comment" size={24} color="black" />
            <Text style={[styles.notes, { color: theme.text }]}>
              {item.notes}
            </Text>
          </View>
        )}

        {/* Skapad datum */}
        <InfoRow
          text={`Tillagd: ${
            item.createdAt
              ? new Date(item.createdAt).toLocaleDateString("sv-SE")
              : "Okänt"
          }`}
          theme={theme}
        />
      </View>

      {/* 🔙 Gå tillbaka-knapp */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[
          styles.backButton,
          { backgroundColor: theme.buttonBackground }
        ]}>
        <MaterialIcons name="arrow-back" size={24} color="white" />
        <Text style={styles.buttonText}>Gå tillbaka</Text>
      </TouchableOpacity>
    </View>
  );
}

// 📌 **Återanvändbar komponent för informationsrader**
const InfoRow = ({ icon, text, theme }) => (
  <View style={styles.detailContainer}>
    <MaterialIcons name={icon} size={20} color={theme.text} />
    <Text style={[styles.infoText, { color: theme.text }]}>{text}</Text>
  </View>
);

// 🎨 **Förbättrad styling med färgcirkel och bättre layout**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flexWrap: "wrap"
  },
  colorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 6,
    borderWidth: 2
  },
  infoText: {
    fontSize: 18,
    marginLeft: 8
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 8
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginRight: 6,
    marginBottom: 6
  },
  tagText: {
    fontSize: 14,
    fontWeight: "bold"
  },
  noteContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f5f5f5"
  },
  notes: {
    fontSize: 16,
    fontStyle: "italic",
    marginLeft: 8
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center"
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    marginTop: 20
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5
  }
});
