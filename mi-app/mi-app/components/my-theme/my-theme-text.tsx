import { useMyTheme } from '../../app/_layout'
import { View, Text, Pressable, TouchableOpacity, StyleSheet, StyleProp, Platform, ViewStyle, TextStyle } from 'react-native'
import { Children, ReactNode } from 'react'

type props = {
    children?: ReactNode
    style?: StyleProp<TextStyle>
    //onPress?: () => void
}

export default function MyText(props: props) {
    const { currentTheme, theme, setTheme, toggleTheme } = useMyTheme()

    return (
        <Text style={[{ color: theme.text }, props.style]}>
            {props.children}
        </Text>
    )
}

