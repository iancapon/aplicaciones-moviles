import { useMyTheme } from '@/app/_layout'
import { Pressable, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import ThemedButton from '@/components/my-theme/my-theme-boton'
import ThemedHeader from '@/components/my-theme/my-theme-header'
import View from '@/components/my-theme/my-theme-view';
import Text from '@/components/my-theme/my-theme-text';

export default function IndexTab() {
    const { currentTheme, theme, setTheme, toggleTheme } = useMyTheme()

    return (
        <View style={[{ flex: 1, borderWidth: 1 }]}>
            <ScrollView>
                <Text>hechizos (ScrollView)</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    contentContainer: {
        flex: 1,
        flexDirection: "column",
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: "row",
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 20
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    }
})