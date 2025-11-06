import useTheme from "@/hooks/useTheme";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { colorTheme, setTheme } = useTheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorTheme.background
      }}
    >
      <Text style={{ color: colorTheme.text }}>Edit app/index.tsx to edit this screen.</Text>

      <TouchableOpacity onPress={() => setTheme('default')}>
        <Text style={{ color: colorTheme.text }}>modo del sistema</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setTheme('light')}>
        <Text style={{ color: colorTheme.text }}>modo claro</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setTheme('dark')}>
        <Text style={{ color: colorTheme.text }}>modo oscuro</Text>
      </TouchableOpacity>
    </View>
  );
}
