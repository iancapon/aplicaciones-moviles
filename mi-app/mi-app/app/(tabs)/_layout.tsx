import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { createContext, useState, useContext, useEffect } from 'react';
import { useMyTheme } from '@/app/_layout'
///// View y Text con el tema ya incorporado
import { Pressable, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import View from '@/components/my-theme/my-theme-view';
import Text from '@/components/my-theme/my-theme-text';
///// View y Text con el tema ya incorporado
import ThemedButton from '@/components/my-theme/my-theme-boton'
import ThemedHeader from '@/components/my-theme/my-theme-header'
import { Ionicons } from '@expo/vector-icons';

type personality = {
    traits: Array<string>,
    ideals: Array<string>,
    bonds: Array<string>,
    flaws: Array<string>,
    personal_story?: Array<string>
}

const player_personality: personality = {
    traits: ["Curious"],
    ideals: ["Knowledge"],
    bonds: ["Mentor"],
    flaws: ["Overconfident"],
}

type basic_data = {
    player_name: string,
    character_name: string,
    class: string,
    level: number,
    race: string,
    alignment: string,
    background: string,
    xp: number,
}

const player_basic_data: basic_data = {
    player_name: "ian",
    character_name: "Aelar Silverleaf",
    class: "Wizard",
    level: 3,
    race: "Wood Elf",
    alignment: "Neutral Good",
    background: "Sage",
    xp: 900,
}


export default function PaginaDePersonaje() {
    const { currentTheme, theme, setTheme, toggleTheme } = useMyTheme()

    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            {/* -- subHeader -- */}
            <ThemedButton onPress={() => toggleTheme()} style={{ maxWidth: 200, alignSelf: "flex-end" }}>
                {currentTheme == 'light' ? "🌞" : "🌛"}{currentTheme}
            </ThemedButton>
            {/* -- informacion principal -- */}
            <View style={[styles.contentContainer, { borderWidth: 1, marginBottom: 0 }]}>
                <View style={[styles.horizontalContainer, { flex: 2, borderWidth: 1 }]}>
                    {/* -- imagen del personaje -- */}
                    <View style={[{ flex: 1, borderWidth: 1 }]}>
                        <Text>imagen del personaje</Text>
                    </View>
                    <View style={[{ flex: 2, borderWidth: 1 }]}>
                        {/* -- nombre y atributos más básico -- */}
                        <ScrollView style={[{ flex: 6, padding: 10, borderWidth: 1, borderColor: theme.accent }]}>
                            <Text style={styles.subtitle}>Jugador: {player_basic_data.player_name}</Text>
                            <Text style={styles.subtitle}>Personaje: {player_basic_data.character_name}</Text>
                            <Text style={styles.subtitle}>Clase: {player_basic_data.class}</Text>
                            <Text style={styles.subtitle}>Nivel: {player_basic_data.level}</Text>
                            <Text style={styles.subtitle}>Raza: {player_basic_data.race}</Text>
                            <Text style={styles.subtitle}>Alineamiento{player_basic_data.alignment}</Text>
                            <Text style={styles.subtitle}>Trasfondo: {player_basic_data.background}</Text>
                            <Text style={styles.subtitle}>XP: {player_basic_data.xp}</Text>
                            <View style={{ paddingVertical: 20 }}></View>
                        </ScrollView>

                    </View>
                </View>
                {/* -- tablas de informacion -- */}
                <View style={[{ flex: 5 }]}>
                    <Tabs screenOptions={{
                        tabBarActiveTintColor: theme.text,
                        tabBarInactiveTintColor: theme.muted,
                        tabBarStyle: [styles.tabBar, { backgroundColor: theme.header }],
                        tabBarLabelStyle: [styles.tabBarText],
                        tabBarActiveBackgroundColor: theme.accent,

                    }}>
                        <Tabs.Screen name="atributos" options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="accessibility" color={color} size={size} /> }} />
                        <Tabs.Screen name="combate" options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="skull-outline" color={color} size={size} /> }} />
                        <Tabs.Screen name="hechizos" options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="color-wand" color={color} size={size} /> }} />
                        <Tabs.Screen name="skills" options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="pie-chart" color={color} size={size} /> }} />
                    </Tabs>
                </View>
            </View>
        </View>
    );
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
    tabBar: {
        height: 100,
        marginBottom: 0
    },
    tabBarText: {
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