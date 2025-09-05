import { StyleSheet, View, Text } from 'react-native'
import { Link, useRouter } from 'expo-router'
import Boton from '../../components/Boton'
import { useState, useContext } from 'react'
import { AppContext } from '../_layout'
import EspacioVacio from '../../components/EspacioVacio'

export default function EjercicioPerfil() {
    const router = useRouter();
    const ctx = useContext(AppContext);

    if (!ctx) return null;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.verticalContainer}>
                <Text style={{ fontSize: 30 }}>{ctx.name}</Text>
                <EspacioVacio />
                <Boton name={"Cambiar nombre"} setFun={() => router.push("../cambioDeValor")} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Boton name={"Detalles de la app"} setFun={() => router.push("../detalles")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    verticalContainer: {
        backgroundColor: "lightblue",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '5%',
        padding: '15%',
        borderRadius: 5,
    },
    mainContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});
