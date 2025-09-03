import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{ title: "Perfil" }}
            />
            <Tabs.Screen
                name="contadores"
                options={{ title: "Contador" }}

            />
            <Tabs.Screen
                name="tarjetas"
                options={{ title: "Tarjetas" }}
            />
        </Tabs>
    );
}
