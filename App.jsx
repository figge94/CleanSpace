import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { BlurView } from "expo-blur";
import { StyleSheet, Platform } from "react-native";
import HomeScreen from "./pages/Home";
import ClothesScreen from "./pages/Clothes";
import DetailsScreen from "./pages/Details";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // ✅ Dölj header i tabs för att slippa pilar
        tabBarShowLabel: true,
        tabBarStyle: { position: "absolute" },
        tabBarBackground: () =>
          Platform.OS === "web" ? null : ( // ✅ Fix för webben
            <BlurView
              tint="light"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          )
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Clothes" component={ClothesScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
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
        name="Details"
        component={DetailsScreen}
        options={{ title: "Detaljer", headerBackVisible: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20
  },
  background: {
    flex: 1,
    flexWrap: "wrap",
    ...StyleSheet.absoluteFill
  },
  box: {
    width: "25%",
    height: "20%"
  },
  boxEven: {
    backgroundColor: "orangered"
  },
  boxOdd: {
    backgroundColor: "gold"
  },
  text: {
    fontSize: 24,
    fontWeight: "600"
  }
});
