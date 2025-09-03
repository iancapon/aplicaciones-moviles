import { StyleSheet, View, Text } from 'react-native';
import Contador from '../components/Contador'

export default function EjercicioContador() {
    return (
        <View style={styles.verticalContainer}>
            <Text style={{ fontSize: 30 }}>Ejercicio de contador</Text>
            <Contador />
        </View>
    );
}

const styles = StyleSheet.create({
    verticalContainer: {
        backgroundColor: "lightblue" ,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '5%',
        padding:'7%',
        borderRadius: 5
    },
});
