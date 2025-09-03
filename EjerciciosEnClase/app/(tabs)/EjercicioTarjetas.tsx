import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native'
import Tarjeta from '@/components/Tarjeta'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

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
    const tarjetas = [
        "hola como va loquita sape",
        "full",
        "anasheee",
        "1",
        "2",
        "3",
        "4"
    ]
    return (
        <ThemedView style={[{ margin: "10%" }, styles.Contenedor]}>
            <ThemedText type='title'> Ejercicio de las Tarjetas</ThemedText>
            <Lista >
                {tarjetas.map(mensaje => (<Tarjeta texto={mensaje} />))}
            </Lista>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    Contenedor: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexWrap: "wrap",
        alignItems: 'center',
        backgroundColor: "grey",
        borderRadius: 5
    }
})