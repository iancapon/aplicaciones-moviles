import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native'
import { useState } from 'react'

type tarjetaProp = {
    texto: string
}

function Tarjeta(props: tarjetaProp) {
    const [presionado, setPresionado] = useState(false)

    const fuePresionado = () => {
        if (presionado) {
            return ({
                backgroundColor: 'lightgrey',
                color: 'darkgrey'
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

type listaProps = {
    children: React.ReactNode;
};

function Lista(props: listaProps) {
    return (
        <ScrollView contentContainerStyle={styles.Contenedor}>
            {props.children}
        </ScrollView>
    )
}


export default function EjercicioTarjetas() {
    return (
        <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 30 }}> Ejercicio de las Tarjetas</Text>
            <Lista >
                <Tarjeta texto='hola como va loquita sape ' />
                <Tarjeta texto='hole' />
                <Tarjeta texto='holi' />
                <Tarjeta texto='holo' />
                <Tarjeta texto='holu' />
                <Tarjeta texto='hello' />
                <Tarjeta texto='goodbye' />
                <Tarjeta texto='uno' />
                <Tarjeta texto='dos' />
                <Tarjeta texto='tres' />
                <Tarjeta texto='cuatrooo' />
            </Lista>
        </View>
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
        color: 'white'
    },
    Contenedor: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 100
    }
})