import { Text, Pressable, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { ReactNode, useState } from 'react'

type buttonProps = {
    name?: string,
    onLongPress?: () => void
    onPress?: () => void;
    viewStyle?: StyleProp<ViewStyle>;
    pressedViewStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>
    pressedTextStyle?: StyleProp<TextStyle>
    keepActive?: boolean
    children?: ReactNode
}

export default function Boton(props: buttonProps) {
    const unpressedView = props.viewStyle != null ? [styles.button, props.viewStyle] : styles.button
    const pressedView = props.pressedViewStyle != null ? [unpressedView, props.pressedViewStyle] : [unpressedView, styles.pressedbutton]
    const unpressedText = props.textStyle != null ? [styles.text, props.textStyle] : styles.text
    const pressedText = props.pressedTextStyle != null ? [unpressedText, props.pressedTextStyle] : [unpressedText, styles.text]

    const [active, setActive] = useState(false)
    if (props.keepActive) {
        return (
            <Pressable
                onPressIn={() => setActive(!active)}
                onPress={props.onPress}
                style={() => ([unpressedView, active ? pressedView : unpressedView])}
            >
                {props.children}
                <Text style={[unpressedText, active ? pressedText : unpressedText]}>{props.name}</Text>
            </Pressable>
        )
    }
    return (
        <Pressable
            onPressIn={() => setActive(true)}
            onPressOut={() => setActive(false)}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            style={() => ([unpressedView, active ? pressedView : unpressedView])}
        >
            {props.children}
            <Text style={[unpressedText, active ? pressedText : unpressedText]}>{props.name}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        padding: 7,
        margin: 6,
        borderRadius: 3,
        backgroundColor: 'white',
    },
    pressedbutton: {
        backgroundColor: 'lightgrey',
    },
    text: {
        color: "black",
        fontSize: 15
    },
    pressedText: {
        color: "white",
    }
});