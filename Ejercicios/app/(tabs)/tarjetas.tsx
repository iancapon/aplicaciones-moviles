import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Tarjeta from '../../components/Tarjeta'


type listaProps = {
    children: React.ReactNode;
};

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
            <Text style={{ fontSize: 30 }}>Tarjetas</Text>
            <ScrollView contentContainerStyle={styles.Contenedor}>
                {tarjetas.map(mensaje => (<Tarjeta texto={mensaje} />))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Contenedor: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "lightblue",
        margin: '5%',
        padding: '5%',
        borderRadius: 5,
        paddingBottom: '12%'
    }
})