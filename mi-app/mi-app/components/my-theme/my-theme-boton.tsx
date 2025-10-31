import { useMyTheme } from '../../app/_layout'
import { View, Text, Pressable, TouchableOpacity, StyleSheet, StyleProp, Platform, ViewStyle } from 'react-native'
import { Children, ReactNode } from 'react'

type props = {
    children?: ReactNode
    style?: StyleProp<ViewStyle>
    onPress?: () => void
    onLongPress?: () => void
}

export default function ThemedButton(props: props) {
    const { currentTheme, theme, setTheme, toggleTheme } = useMyTheme()

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button, styles.shadow, {
                backgroundColor: theme.card,
                borderColor: theme.muted,
                shadowColor: theme.text
            }, props.style]}
        >
            <Text style={[styles.buttonText, { color: theme.text }]}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
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