import { Text, Pressable, StyleSheet, StyleProp, ViewStyle } from 'react-native'

type buttonProps = {
    name: string,
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

export default function Boton(props: buttonProps) {
    return (
        <Pressable style={({ pressed }) => [
            props.style != null ? [styles.button, props.style] : styles.button,
            pressed ? styles.pressedButton : styles.unpressedButton
        ]}
            onPress={props.onPress}>
            <Text style={{ fontSize: 15 }}>{props.name}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        padding: 7,
        margin: 6,
        borderRadius: 3,
    },
    pressedButton: {
        backgroundColor: 'lightgrey',
    },
    unpressedButton: {
        backgroundColor: 'white',
    }
});