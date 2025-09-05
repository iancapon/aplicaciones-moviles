import { Text, Pressable, StyleSheet } from 'react-native'

type buttonProps = {
    name: string,
    setFun?: any
}

export default function Boton(props: buttonProps) {
    return (
        <Pressable style={styles.Button} onPress={props.setFun}>
            <Text style={{ fontSize: 15 }}>{props.name}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    Button: {
        backgroundColor: 'white',
        padding: 7,
        margin: 6,
        borderRadius: 3,
    }
});