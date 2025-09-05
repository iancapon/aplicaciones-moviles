import { Stack } from "expo-router"
import { createContext, useState } from "react"

export const AppContext = createContext<{
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export default function RootLayout() {
    const [name, setName] = useState("Ian Capon")

    return (
        <AppContext.Provider value={{ name, setName }}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

                <Stack.Screen name="detalles" />

                <Stack.Screen name="cambioDeValor" options={{ presentation: "modal", title: "Cambiar el nombre", animation: "slide_from_bottom", }} />
            </Stack>
        </AppContext.Provider>
    );
}
