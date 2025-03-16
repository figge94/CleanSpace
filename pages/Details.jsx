import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useContext, useEffect } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { DetailStyle, GlobalStyle } from "../styles/styles";
import { BackHandler } from "react-native";

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
            DetailStyle.backButton,
            { backgroundColor: theme.buttonBackground }
          ]}>
          <MaterialIcons name="arrow-back" size={20} color="white" />
          <Text style={DetailStyle.buttonText}>Gå tillbaka</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={[DetailStyle.container, { backgroundColor: theme.background }]}>
      <View
        style={[
          DetailStyle.detailsCard,
          { backgroundColor: theme.cardBackground }
        ]}>
        <Text style={[DetailStyle.title, { color: theme.text }]}>
          {item.name}
        </Text>

        <InfoRow
          text={`${item.category?.main} / ${item.category?.sub}`}
          theme={theme}
        />

        <View style={DetailStyle.detailContainer}>
          <Text style={[DetailStyle.infoText, { color: theme.text }]}>
            Färg:
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

        <InfoRow text={`Skick: ${item.condition}`} theme={theme} />

        <InfoRow
          icon="history"
          text={`Senast använd: ${
            item.lastUsed
              ? new Date(item.lastUsed).toLocaleDateString("sv-SE")
              : "Okänt"
          }`}
          theme={theme}
        />

        <View style={DetailStyle.detailContainer}>
          <View style={DetailStyle.tagContainer}>
            {item.tags && item.tags.length > 0 ? (
              item.tags.map((tag, index) => (
                <View
                  key={index}
                  style={[
                    DetailStyle.detailTag,
                    { backgroundColor: theme.buttonBackground }
                  ]}>
                  <Text
                    style={[DetailStyle.tagText, { color: theme.buttonText }]}>
                    {tag}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={[DetailStyle.infoText, { color: theme.text }]}>
                Inga taggar
              </Text>
            )}
          </View>
        </View>

        {item.notes && (
          <View style={DetailStyle.noteContainer}>
            <EvilIcons name="comment" size={24} color="black" />
            <Text style={[DetailStyle.notes, { color: theme.text }]}>
              {item.notes}
            </Text>
          </View>
        )}

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
          DetailStyle.backButton,
          { backgroundColor: theme.buttonBackground }
        ]}>
        <MaterialIcons name="arrow-back" size={24} color="white" />
        <Text style={DetailStyle.buttonText}>Gå tillbaka</Text>
      </TouchableOpacity>
    </View>
  );
}

const InfoRow = ({ icon, text, theme }) => (
  <View style={DetailStyle.detailContainer}>
    <MaterialIcons name={icon} size={20} color={theme.text} />
    <Text style={[DetailStyle.infoText, { color: theme.text }]}>{text}</Text>
  </View>
);
