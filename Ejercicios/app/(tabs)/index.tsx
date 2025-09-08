import { StyleSheet, View, Text } from 'react-native'
import { Link, useRouter } from 'expo-router'
import Boton from '../../components/Boton'
import { useState, useContext } from 'react'
import { ContextoPerfil } from '../_layout'
import EspacioVacio from '../../components/EspacioVacio'

export default function EjercicioPerfil() {
    const router = useRouter();
    const perfil = useContext(ContextoPerfil);

    if (!perfil) return null;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.verticalContainer}>
                <Text style={{ fontSize: 30 }}>{perfil.name}</Text>
                <EspacioVacio pixels={20} />
                <Boton name={"Cambiar nombre"} onPress={() => router.push("../cambiarNombre")} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Boton name={"Detalles de la app"} onPress={() => router.push("../detalles")} />
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
