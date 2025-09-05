import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{ title: "Perfil", tabBarLabel: "Perfil" }}
            />
            <Tabs.Screen
                name="contadores"
                options={{ title: "Contador", tabBarLabel: "Contador" }}

            />
            <Tabs.Screen
                name="tarjetas"
                options={{ title: "Tarjetas", tabBarLabel: "Tarjetas" }}
            />
        </Tabs>
    );
}
