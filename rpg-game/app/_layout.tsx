import useTheme from "@/hooks/useTheme";
import { Stack } from "expo-router";


export default function RootLayout() {
  const { colorTheme } = useTheme()

  return (
    <Stack >
      <Stack.Screen name='index' options={{
        headerTintColor: colorTheme.text,
        headerStyle: { backgroundColor: colorTheme.header },
        headerShadowVisible: true,
        headerTitleAlign: 'center',
        headerTitle: 'Pagina Principal'
      }} />
    </Stack>);
}
