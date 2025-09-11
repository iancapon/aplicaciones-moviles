import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react'
import Boton from './Boton'



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
                <Boton name="SUMAR" viewStyle={{backgroundColor:"lightgreen"}} onPress={aumentarContador}  />
                <Boton name="RESET" viewStyle={{backgroundColor:"lightgreen"}} onPress={resetearContador} />
            </View>
            <Text style={[{ fontSize: 17 }, { color: "black" }]}>Presionaste [ {buttonState} ] veces ... </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    verticalContainer: {
        backgroundColor: "lightblue",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '5%',
        padding: '7%',
        borderRadius: 5
    },

    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '10%',

    }
});
