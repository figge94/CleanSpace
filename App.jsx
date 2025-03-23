import * as React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useContext } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HomeScreen from "./pages/Home";
import ClothesScreen from "./pages/Clothes";
import DetailsScreen from "./pages/Details";
import TipsScreen from "./pages/Tips";
import ProfileScreen from "./pages/Profile";
import StatisticsScreen from "./pages/Statistic";
import { SettingsProvider, SettingsContext } from "./context/SettingsContext";

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const getTabBarIcon = (routeName, focused, color, size) => {
  const icons = {
    Home: focused ? "home-variant" : "home-variant-outline",
    Clothes: focused ? "wardrobe" : "wardrobe-outline",
    Tips: focused ? "lightbulb-on" : "lightbulb-on-outline",
    Profile: focused ? "person-circle" : "person-circle-outline"
  };

  return routeName === "Profile" ? (
    <Ionicons name={icons[routeName]} size={size} color={color} />
  ) : (
    <MaterialCommunityIcons name={icons[routeName]} size={size} color={color} />
  );
};

function BottomTabs() {
  const { theme } = useContext(SettingsContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: theme.buttonBackground,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: theme.cardBackground,
          paddingBottom: 5,
          height: 60,
          position: "absolute"
        }
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Hem" }}
      />
      <Tab.Screen
        name="Clothes"
        component={ClothesScreen}
        options={{ title: "Min garderob" }}
      />
      <Tab.Screen
        name="Tips"
        component={TipsScreen}
        options={{ title: "Tips" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profil" }}
      />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Clothes"
        component={ClothesScreen}
        options={{ title: "Min garderob" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Detaljer" }}
      />
      <Stack.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{ title: "Statistik" }}
      />
    </Stack.Navigator>
  );
}

function AppContent() {
  const { theme, darkMode } = useContext(SettingsContext);

  return (
    <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
      <MainStack />
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("./assets/fonts/Outfit-Black.ttf") // Kontrollera sökvägen!
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}
