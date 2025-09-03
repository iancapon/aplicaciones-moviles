import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="EjercicioContador"
        options={{ title: "Contador" }}
      />
      <Tabs.Screen
        name="EjercicioTarjetas"
        options={{ title: "Tarjetas" }}
      />
    </Tabs>
  );
}
