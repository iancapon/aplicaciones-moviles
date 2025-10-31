import { useMyTheme } from '@/app/_layout'
import { Pressable, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import ThemedButton from '@/components/my-theme/my-theme-boton'
import ThemedHeader from '@/components/my-theme/my-theme-header'
import View from '@/components/my-theme/my-theme-view';
import Text from '@/components/my-theme/my-theme-text';


type equipment = Array<string>

const player_equipment: equipment = ["Staff", "Spellbook", "Explorer's Pack"]

type money = { gp: number }

const player_money: money = { gp: 10 }


type atributes = {
    str: number,
    dxt: number,
    con: number,
    int: number,
    wis: number,
    cha: number
}

const player_atributes: atributes = {
    str: 14,
    dxt: 16,
    con: 12,
    int: 13,
    wis: 15,
    cha: 10
}


export default function IndexTab() {
    const { currentTheme, theme, setTheme, toggleTheme } = useMyTheme()

    return (
        <View style={[styles.contentContainer, { flex: 1, padding: 10, borderWidth: 0 }]}>
            <ScrollView style={[styles.contentContainer, { padding: 10 }]}>
                {/* -- atributos -- */}
                <Text style={[styles.title, { fontStyle: "italic" }]}>atributos</Text>
                <Text style={styles.subtitle}>STR: {player_atributes.str}</Text>
                <Text style={styles.subtitle}>DXT: {player_atributes.dxt}</Text>
                <Text style={styles.subtitle}>CON: {player_atributes.con}</Text>
                <Text style={styles.subtitle}>INT: {player_atributes.int}</Text>
                <Text style={styles.subtitle}>WIS: {player_atributes.wis}</Text>
                <Text style={styles.subtitle}>CHA: {player_atributes.cha}</Text>
                {/* -- equipo -- */}
                <View style={{ paddingVertical: 10 }}></View>
                <Text style={[styles.title, { fontStyle: "italic" }]}>equipo</Text>
                <Text style={styles.subtitle}>{player_equipment.reduce((prev, curr) => prev + '\n' + curr)}</Text>
                {/* -- dinero -- */}
                <View style={{ paddingVertical: 10 }}></View>
                <Text style={[styles.title, { fontStyle: "italic" }]}>dinero</Text>
                <Text style={styles.subtitle}>en GP: {player_money.gp} $</Text>

                <View style={{ paddingVertical: 50 }}></View>

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