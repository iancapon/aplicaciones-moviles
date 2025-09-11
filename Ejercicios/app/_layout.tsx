import { Stack } from "expo-router"
import { createContext, useState } from "react"

export const ContextoPerfil = createContext<{
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export default function RootLayout() {
    const [name, setName] = useState("Ian Capon")

    return (
        <ContextoPerfil.Provider value={{ name, setName }}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

                <Stack.Screen name="detalles" options= {{presentation: "modal", animation:"fade_from_bottom"}} />

                <Stack.Screen name="cambiarNombre" options={{ presentation: "transparentModal", animation:"fade",headerShown: false }} />
            </Stack>
        </ContextoPerfil.Provider>
    );
}
