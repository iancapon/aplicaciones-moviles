import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack >
    <Stack.Screen name="(tabs)" options={{ headerTitleAlign: "center", title: "Viento Ya", headerTitleStyle: { fontSize: 20 } }} />
  </Stack>;
}
