// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";

export default function App() {
  return (
    <Tabs>
      <Tabs.Screen name="EjercicioContador" options={{ title: "EjercicioContador" }} />
      <Tabs.Screen name="EjercicioTarjetas" options={{ title: "EjercicioTarjetas" }} />
    </Tabs>
  );
}
