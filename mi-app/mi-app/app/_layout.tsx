import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { createContext, useState, useContext, useEffect } from 'react';
import ThemedHeader from '@/components/my-theme/my-theme-header';

import { MyThemeColorType, myLightTheme, myDarkTheme } from "../constants/MyThemes"

type MyThemeContextType = {
  currentTheme: 'light' | 'dark'
  theme: MyThemeColorType
  setTheme: (mode: 'light' | 'dark') => void
  toggleTheme: () => void
} | null

const MyThemeContext = createContext<MyThemeContextType>(null)

export default function RootLayout() {

  const [currentTheme, setTheme] = useState<'light' | 'dark'>('light')
  const [theme, setCurrentTheme] = useState<MyThemeColorType>(myLightTheme)

  const toggleTheme = () => currentTheme == 'dark' ? setTheme('light') : setTheme('dark')

  useEffect(() => {
    setCurrentTheme(currentTheme == 'light' ? myLightTheme : myDarkTheme)
  }, [currentTheme])

  return (
    <MyThemeContext.Provider value={{ currentTheme, theme, setTheme, toggleTheme }} >
      {/* -- header -- */}
      <ThemedHeader>
        ☠️ Dungeons & Dragons 🐲
      </ThemedHeader>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={currentTheme == 'dark' ? 'light' : 'dark'} />
    </MyThemeContext.Provider >
  );
}


export const useMyTheme = () => {
  const context = useContext(MyThemeContext)
  if (!context) {
    throw new Error('useMyTheme debe usarse dentro de un MyThemeContext.Provider')
  }
  return context
} 
