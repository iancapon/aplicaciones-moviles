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


export default function () {
    const { currentTheme, theme, setTheme, toggleTheme } = useMyTheme()

    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            {/* -- subHeader -- */}
            <ThemedButton onPress={() => toggleTheme()} style={{ maxWidth: 200, alignSelf: "flex-end" }}>
                {currentTheme == 'light' ? "🌞" : "🌛"}{currentTheme}
            </ThemedButton>
            {/* -- informacion principal -- */}
            <View style={[styles.contentContainer, { borderWidth: 1, marginBottom: 50 }]}>
                <View style={[styles.horizontalContainer, { flex: 1, borderWidth: 1 }]}>
                    {/* -- imagen del personaje -- */}
                    <View style={[{ flex: 1, borderWidth: 1 }]}>
                        <Text>imagen del personaje</Text>
                    </View>
                    <View style={[{ flex: 2, borderWidth: 1 }]}>
                        {/* -- nombre y atributos más básico -- */}
                        <View style={[{ flex: 5, borderWidth: 1 }]}>
                            <Text>nombre y atributos más básicos</Text>
                        </View>
                        <View style={[styles.horizontalContainer, { flex: 1, borderWidth: 1 }]}>
                            {/* -- inventario (popup) -- */}
                            <View style={[{ flex: 1, borderWidth: 1 }]}>
                                <Text>inventario (popup)</Text>
                            </View>
                            {/* -- personalidad e historia (popup) -- */}
                            <View style={[{ flex: 1, borderWidth: 1 }]}>
                                <Text>personalidad e historia</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* -- tablas de informacion -- */}
                <View style={[{ flex: 3 }]}>
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
    tabBar: {
        height: 100,
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