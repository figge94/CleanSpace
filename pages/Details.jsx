import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { DetailStyle, GlobalStyle } from "../styles/styles";
import { BackHandler } from "react-native";
import ButtonStyle from "../styles/ButtonStyle";
import { TagStyle } from "../styles/TagStyle";

export default function DetailsScreen({ route, navigation }) {
  const { theme } = useContext(SettingsContext);
  const item = route.params?.item;

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  if (!item) {
    return (
      <View
        style={[GlobalStyle.container, { backgroundColor: theme.background }]}>
        <Text style={[GlobalStyle.errorText, { color: theme.text }]}>
          Ingen information tillgänglig
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            ButtonStyle.backButton,
            { backgroundColor: theme.buttonBackground }
          ]}>
          <MaterialIcons name="arrow-back" size={20} color="white" />
          <Text style={ButtonStyle.buttonText}>Gå tillbaka</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={{ paddingVertical: 15, alignItems: "center" }}>
        <Text style={[DetailStyle.headerTitle, { color: theme.text }]}>
          {item.name}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 20 }}>
        {item.tags && item.tags.length > 0 && (
          <View>
            <View style={TagStyle.tagContainer}>
              {item.tags.map((tag, index) => (
                <View
                  key={index}
                  style={[
                    TagStyle.tag,
                    { backgroundColor: theme.tagBackground }
                  ]}>
                  <Text style={[TagStyle.tagText, { color: theme.buttonText }]}>
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <View
          style={[
            DetailStyle.detailsCard,
            { backgroundColor: theme.cardBackground }
          ]}>
          <InfoRow
            text={`Kategori: ${item.category?.main} / ${item.category?.sub}`}
            theme={theme}
          />
          <InfoRow text={`Skick: ${item.condition}`} theme={theme} />
          <InfoRow
            text={`Senast använd: ${
              item.lastUsed
                ? new Date(item.lastUsed).toLocaleDateString("sv-SE")
                : "Okänt"
            }`}
            theme={theme}
          />
        </View>

        <View
          style={[
            DetailStyle.detailsCard,
            { backgroundColor: theme.cardBackground }
          ]}>
          <Text style={[DetailStyle.sectionTitle, { color: theme.text }]}>
            Färger:
          </Text>
          <View style={DetailStyle.colorContainer}>
            {item.colors && item.colors.length > 0 ? (
              item.colors.map((color, index) => (
                <View
                  key={index}
                  style={[
                    DetailStyle.colorCircle,
                    {
                      backgroundColor: color,
                      borderColor:
                        theme.text === "#000000" ? "#ffffff" : "#cccccc"
                    }
                  ]}
                />
              ))
            ) : (
              <Text style={[DetailStyle.infoText, { color: theme.text }]}>
                Ingen färg
              </Text>
            )}
          </View>
        </View>

        {item.notes && (
          <View
            style={[
              DetailStyle.noteContainer,
              {
                backgroundColor: theme.cardBackground
              }
            ]}>
            <Text style={[DetailStyle.sectionTitle, { color: theme.text }]}>
              Anteckningar
            </Text>
            <View
              style={[
                DetailStyle.noteContainer,
                {
                  backgroundColor:
                    theme.background === "#121212" ? "#1A1A1A" : "#f5f5f5",
                  borderColor: theme.borderColor,
                  borderWidth: 1
                }
              ]}>
              <EvilIcons name="comment" size={24} color={theme.text} />
              <Text style={[DetailStyle.notes, { color: theme.text }]}>
                {item.notes}
              </Text>
            </View>
          </View>
        )}

        <View style={{ alignItems: "center" }}>
          <InfoRow
            text={`Tillagd: ${
              item.createdAt
                ? new Date(item.createdAt).toLocaleDateString("sv-SE")
                : "Okänt"
            }`}
            theme={theme}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            ButtonStyle.backButton,
            { backgroundColor: theme.buttonBackground }
          ]}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
          <Text style={ButtonStyle.backButton}>Gå tillbaka</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const InfoRow = ({ text, theme }) => (
  <View style={DetailStyle.detailContainer}>
    <Text style={[GlobalStyle.infoText, { color: theme.text }]}>{text}</Text>
  </View>
);
