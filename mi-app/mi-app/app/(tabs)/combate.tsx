import { useMyTheme } from '@/app/_layout'
import { Pressable, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import ThemedButton from '@/components/my-theme/my-theme-boton'
import ThemedHeader from '@/components/my-theme/my-theme-header'
import View from '@/components/my-theme/my-theme-view';
import Text from '@/components/my-theme/my-theme-text';


type combat = {
    ac: number,
    initiative: number,
    speed: number,
    hp: { current: number, max: number },
    hitDice: string // deberia cargar los tipos de dado que existen
}

const player_combat: combat = {
    ac: 15,
    initiative: 3,
    speed: 30,
    hp: { current: 24, max: 24 },
    hitDice: "3d8" // deberia cargar los tipos de dado que existen
}

export default function IndexTab() {
    const { currentTheme, theme, setTheme, toggleTheme } = useMyTheme()

    return (
        <View style={[styles.contentContainer, { flex: 1, borderWidth: 1 }]}>
            {/* -- combate y supervivencia -- */}
            <ScrollView style={[styles.contentContainer, { padding: 20 }]}>
                <Text style={[styles.title, { fontStyle: "italic" }]}>combate</Text>
                <Text style={[styles.subtitle, {}]}>AC: {player_combat.ac}</Text>
                <Text style={[styles.subtitle, {}]}>INICIATICA: {player_combat.initiative}</Text>
                <Text style={[styles.subtitle, {}]}>VELOCIDAD: {player_combat.speed}</Text>
                <Text style={[styles.subtitle, {}]}>HP: {player_combat.hp.current}/{player_combat.hp.max}</Text>
                <Text style={[styles.subtitle, {}]}>HIT DICE: {player_combat.hitDice}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    smalltitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
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