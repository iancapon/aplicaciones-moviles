import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native'
import { useState } from 'react'

type tarjetaProp = {
    texto: string
}

export default function Tarjeta(props: tarjetaProp) {
    const [presionado, setPresionado] = useState(false)

    const fuePresionado = () => {
        if (presionado) {
            return ({
                backgroundColor: 'lightblue',
                color: 'black'
            })
        }
        return ({
            backgroundColor: 'darkblue',
            color: 'white'
        })
    }

    return (
        <Pressable style={[styles.Tarjeta, fuePresionado()]} onPress={() => setPresionado(!presionado)}>
            <Text style={[{ fontSize: 20 }, fuePresionado()]}>
                {props.texto}
            </Text>
        </Pressable>
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
        borderColor:'darkblue',
        borderWidth:2,
        margin: 5,
        color: 'white'
    },
    Contenedor: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 100
    }
})