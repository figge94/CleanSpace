import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightTheme, darkTheme } from "../styles/themes"; // ✅ Importera teman

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  // Läsa in användarinställningarna från AsyncStorage när appen startas
  useEffect(() => {
    async function loadSettings() {
      const savedDarkMode = await AsyncStorage.getItem("darkMode");
      if (savedDarkMode !== null) {
        const isDark = JSON.parse(savedDarkMode);
        setDarkMode(isDark);
        setTheme(isDark ? darkTheme : lightTheme); // Ställ in temat direkt baserat på användarens preferens
      } else {
        // Om inget sparats tidigare, sätt till standard (light)
        setTheme(lightTheme);
      }
    }
    loadSettings();
  }, []);

  // Toggle dark mode och uppdatera AsyncStorage
  const toggleDarkMode = async () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    setTheme(newDarkMode ? darkTheme : lightTheme);

    // Spara användarens val i AsyncStorage
    await AsyncStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return (
    <SettingsContext.Provider value={{ darkMode, toggleDarkMode, theme }}>
      {children}
    </SettingsContext.Provider>
  );
}
