import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightTheme, darkTheme } from "../styles/themes";

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    async function loadSettings() {
      const savedDarkMode = await AsyncStorage.getItem("darkMode");
      if (savedDarkMode !== null) {
        const isDark = JSON.parse(savedDarkMode);
        setDarkMode(isDark);
        setTheme(isDark ? darkTheme : lightTheme);
      } else {
        setTheme(lightTheme);
      }
    }
    loadSettings();
  }, []);

  const toggleDarkMode = async () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    setTheme(newDarkMode ? darkTheme : lightTheme);

    await AsyncStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return (
    <SettingsContext.Provider value={{ darkMode, toggleDarkMode, theme }}>
      {children}
    </SettingsContext.Provider>
  );
}
