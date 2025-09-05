import { StyleSheet, View, Text } from 'react-native';
import Contador from '../../components/Contador'

export default function EjercicioContador() {
    return (
        <View style={styles.verticalContainer}>
            <Text style={{ fontSize: 30 }}>Contador</Text>
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
        margin: '5%',
        padding:'15%',
        borderRadius: 5
    },
});
