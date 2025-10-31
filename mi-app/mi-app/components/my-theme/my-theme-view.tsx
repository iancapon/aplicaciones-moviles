import { useMyTheme } from '../../app/_layout'
import { View, Text, Pressable, TouchableOpacity, StyleSheet, StyleProp, Platform, ViewStyle } from 'react-native'
import { Children, ReactNode } from 'react'

type props = {
    children?: ReactNode
    style?: StyleProp<ViewStyle>
    //onPress?: () => void
}

export default function MyView(props: props) {
    const { currentTheme, theme, setTheme, toggleTheme } = useMyTheme()

    return (
        <View style={[{ backgroundColor: theme.background }, props.style]}>
            {props.children}
        </View>
    )
}

