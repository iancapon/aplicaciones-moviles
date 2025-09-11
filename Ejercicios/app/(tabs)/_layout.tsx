import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{ title: "Perfil", tabBarLabel: "Perfil" 
                    , tabBarIcon:({size})=> <Ionicons name="airplane" size={size}/>
                }}
            />
            <Tabs.Screen
                name="contadores"
                options={{ title: "Contador", tabBarLabel: "Contador"
                    , tabBarIcon:({size})=> <Ionicons name="calculator" size={size}/>
                 }}

            />
            <Tabs.Screen
                name="tarjetas"
                options={{ title: "Tarjetas", tabBarLabel: "Tarjetas"
                    , tabBarIcon:({size})=> <Ionicons name="dice" size={size}/>
                 }}
            />
        </Tabs>
    );
}
