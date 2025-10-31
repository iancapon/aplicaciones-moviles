import { useMyTheme } from '../../app/_layout'
import { View, Text, Pressable, TouchableOpacity, StyleSheet, StyleProp, Platform, ViewStyle } from 'react-native'
import { Children, ReactNode } from 'react'

type props = {
    children?: ReactNode
    style?: StyleProp<ViewStyle>
    //onPress?: () => void
}

export default function ThemedHeader(props: props) {
    const { currentTheme, theme, setTheme, toggleTheme } = useMyTheme()

    return (
        <View style={[styles.header, styles.shadow, { backgroundColor: theme.header }, props.style]}>
            <Text style={[styles.headerText, { color: theme.text }]}>
                {props.children}
            </Text>
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
        fontSize: 25,
        fontWeight: "bold"
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