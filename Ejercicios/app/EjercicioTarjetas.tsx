import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Tarjeta from '../components/Tarjeta'


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
        <View style={[{ margin: "10%" }, styles.Contenedor]}>
            <Text style={{ fontSize: 30 }}> Ejercicio de las Tarjetas</Text>
            <Lista >
                {tarjetas.map(mensaje => (<Tarjeta texto={mensaje} />))}
            </Lista>
        </View>
    )
}

const styles = StyleSheet.create({
    Contenedor: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 100
    }
})