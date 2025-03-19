import { useState, useContext, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, Animated } from "react-native";
import { SettingsContext } from "../context/SettingsContext";
import { GlobalStyle } from "../styles/styles";
import TipItem from "../components/TipItem";
import { TipsStyle } from "../styles/TipsStyle";
import allTips from "../data/TipsData";
import { MaterialIcons } from "@expo/vector-icons";

export default function TipsScreen({ navigation }) {
  const { theme } = useContext(SettingsContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showTips, setShowTips] = useState(false);
  const [randomTip, setRandomTip] = useState(null);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const categories = ["Förvaring", "Organisering", "Tvätt", "Mer utrymme"];

  const getRandomTip = () => {
    const newTip = allTips[Math.floor(Math.random() * allTips.length)];
    setRandomTip(newTip);

    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    getRandomTip();
  }, []);

  const filteredTips = selectedCategory
    ? allTips.filter((tip) => tip.category === selectedCategory)
    : [];

  return (
    <View
      style={[GlobalStyle.container, { backgroundColor: theme.background }]}>
      <Text style={[GlobalStyle.title, { color: theme.text }]}>Tips</Text>

      <View style={TipsStyle.featuredTipContainer}>
        {randomTip && (
          <Animated.View
            style={[
              TipsStyle.featuredTip,
              { backgroundColor: theme.cardBackground, opacity: fadeAnim }
            ]}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", { item: randomTip })
              }>
              <Text style={[TipsStyle.featuredTipTitle, { color: theme.text }]}>
                {randomTip.title}
              </Text>
              <Text style={[TipsStyle.featuredTipText, { color: theme.text }]}>
                {randomTip.text}
              </Text>
            </TouchableOpacity>

            {/* 🔄 Knapp för att hämta ett nytt slumpmässigt tips */}
            <TouchableOpacity
              onPress={getRandomTip}
              style={[
                TipsStyle.shuffleButton,
                { backgroundColor: theme.buttonBackground }
              ]}>
              <MaterialIcons
                name="refresh"
                size={22}
                color={theme.buttonText}
              />
              <Text
                style={[
                  TipsStyle.shuffleButtonText,
                  { color: theme.buttonText }
                ]}>
                Nytt tips
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>

      <TouchableOpacity
        style={[
          TipsStyle.toggleButton,
          { backgroundColor: theme.buttonBackground }
        ]}
        onPress={() => {
          setShowTips(!showTips);
          if (!showTips) {
            setSelectedCategory("Förvaring");
          } else {
            setSelectedCategory(null);
          }
        }}>
        <Text style={[TipsStyle.toggleButtonText, { color: theme.buttonText }]}>
          {showTips ? "Dölj fler tips" : "Visa fler tips"}
        </Text>
      </TouchableOpacity>

      {showTips && (
        <FlatList
          data={categories}
          horizontal={true}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={TipsStyle.categoryScroll}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                TipsStyle.categoryButton,
                {
                  backgroundColor:
                    selectedCategory === item
                      ? theme.activeButtonBackground
                      : theme.notActiveButtonBackground
                }
              ]}
              onPress={() => setSelectedCategory(item)}>
              <Text
                style={[
                  TipsStyle.categoryButtonText,
                  { color: theme.buttonText }
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}

      {showTips && selectedCategory && (
        <FlatList
          data={filteredTips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TipItem item={item} theme={theme} />}
          contentContainerStyle={TipsStyle.content}
          ListFooterComponent={<View style={{ height: 30 }} />}
        />
      )}
    </View>
  );
}
