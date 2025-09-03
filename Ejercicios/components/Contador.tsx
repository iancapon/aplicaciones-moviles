import { StyleSheet, Pressable, View, Text } from 'react-native';
import { useState } from 'react'


type buttonProps = {
    name: string,
    setFun: any
}

function Boton(props: buttonProps) {
    return (
        <Pressable style={styles.Button} onPress={props.setFun}>
            <Text style={{ fontSize: 15 }}>{props.name}</Text>
        </Pressable>
    )
}

export default function Contador() {
    const [buttonState, setState] = useState(0)
    const aumentarContador = () => {
        setState(buttonState + 1)
    }
    const resetearContador = () => {
        setState(0)
    }
    return (
        <View >
            <View style={styles.horizontalContainer}>
                <Boton name="SUMAR" setFun={aumentarContador} />
                <Boton name="RESET" setFun={resetearContador} />
            </View>
            <Text style={[{ fontSize: 17 },{color:"white"}]}>Presionaste [ {buttonState} ] veces ... </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    verticalContainer: {
        backgroundColor: "lightblue" ,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '5%',
        padding:'7%',
        borderRadius: 5
    },

    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '10%',

    },

    Button: {
        backgroundColor: 'white',
        padding: 7,
        margin: 6,
        borderRadius: 3,
    }
});
