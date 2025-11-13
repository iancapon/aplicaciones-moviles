import { Tabs } from "expo-router";

export default function RootLayout() {
    return <Tabs>
        <Tabs.Screen name="index" options={{ tabBarActiveTintColor: "#666666ff", title: "Ahora", headerShown: false }} />
    </Tabs>;
}
