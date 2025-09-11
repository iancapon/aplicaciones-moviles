import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native'
import { useState } from 'react'
import Boton from './Boton'

type tarjetaProp = {
    key: number
    texto: string
}

export default function Tarjeta(props: tarjetaProp) {
    const [presionado, setPresionado] = useState(false)

    return (
        <Boton
            onPress={() => setPresionado(!presionado)}
            name={props.texto}
            viewStyle={[styles.Tarjeta, presionado ? { backgroundColor: "white" } : {}]}
            textStyle={[styles.Texto, presionado ? { color: "black" } : {}]}
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
    Texto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    Contenedor: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 100
    }
})