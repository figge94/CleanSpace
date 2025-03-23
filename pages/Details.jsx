import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { BackHandler } from "react-native";
import ButtonStyle from "../styles/ButtonStyle";
import { TagStyle } from "../styles/TagStyle";
import { DetailStyle } from "../styles/pages/DetailStyle";

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

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView contentContainerStyle={DetailStyle.scrollContainer}>
        <View style={{ paddingVertical: 15, alignItems: "center" }}>
          <Text style={[DetailStyle.headerTitle, { color: theme.text }]}>
            {item.name}
          </Text>
        </View>
        {item.tags && item.tags.length > 0 && (
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
        )}

        <View
          style={[
            DetailStyle.detailsCard,
            { backgroundColor: theme.cardBackground }
          ]}>
          <Text style={[DetailStyle.sectionTitle, { color: theme.text }]}>
            Kategori:
          </Text>
          <Text style={[DetailStyle.content, { color: theme.text }]}>
            {item.category?.main} / {item.category?.sub}
          </Text>
          <Text style={[DetailStyle.sectionTitle, { color: theme.text }]}>
            Skick:
          </Text>
          <Text style={[DetailStyle.content, { color: theme.text }]}>
            {item.condition}
          </Text>
          <Text style={[DetailStyle.sectionTitle, { color: theme.text }]}>
            Senast använd:
          </Text>
          <Text style={[DetailStyle.content, { color: theme.text }]}>
            {item.lastUsed
              ? new Date(item.lastUsed).toLocaleDateString("sv-SE")
              : "Okänt"}
          </Text>
        </View>

        {item.notes && (
          <View
            style={[
              DetailStyle.noteContainer,
              { backgroundColor: theme.cardBackground }
            ]}>
            <Text style={[DetailStyle.sectionTitle, { color: theme.text }]}>
              Noteringar:
            </Text>

            <View
              style={[
                {
                  backgroundColor:
                    theme.background === "#121212" ? "#1A1A1A" : "#f5f5f5",
                  borderColor: theme.borderColor
                }
              ]}>
              <Text style={[DetailStyle.notes, { color: theme.text }]}>
                {item.notes}
              </Text>
            </View>
          </View>
        )}

        <View style={DetailStyle.centeredContainer}>
          <Text style={[DetailStyle.sectionTitle, { color: theme.text }]}>
            Tillagd:
          </Text>
          <Text style={[{ color: theme.text }]}>
            {new Date(item.createdAt).toLocaleDateString("sv-SE")}
          </Text>
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
