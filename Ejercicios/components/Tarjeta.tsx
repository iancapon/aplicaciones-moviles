import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native'
import { useState } from 'react'
import Boton from './Boton'

type tarjetaProp = {
    key: number
    texto: string
}

export default function Tarjeta(props: tarjetaProp) {
    const [presionado, setPresionado] = useState(false)



    const fuePresionado = () => {
        if (presionado) {
            return ({ backgroundColor: 'lightblue', color: 'black' })
        }
        return ({ backgroundColor: 'darkblue', color: 'white' })
    }

    return (
        <Boton name={props.texto}
            viewStyle={[styles.Tarjeta]}
            textStyle={[{ fontSize: 20, fontWeight: "bold", color: "white" }]}
            pressedViewStyle={{ backgroundColor: "lightgrey" }}
            pressedTextStyle={{ color: "black" }}
            keepActive={true}
        />

    )
}



const styles = StyleSheet.create({
    Tarjeta: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        minHeight: 100,
        flex: 1,
        borderRadius: 10,

        margin: 5,
        backgroundColor: "blue"
    },
    Contenedor: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 100
    }
})