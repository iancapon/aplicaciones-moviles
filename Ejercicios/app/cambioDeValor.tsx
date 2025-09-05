import { Text, View, StyleSheet, TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import Boton from '../components/Boton'
import { useState, useContext } from 'react'
import { AppContext } from './_layout'



export default function ModalScreen() {
    const router = useRouter()
    const ctx = useContext(AppContext)

    if (!ctx) return null

    const [nombre, setNombre] = useState(ctx.name)

    return (
        <View style={styles.verticalContainer}>
            <TextInput
                style={styles.input}
                placeholder="Escribe aquí..."
                value={nombre}
                onChangeText={setNombre}
            ></TextInput>
            <Boton name="Guardar" setFun={() => {
                ctx.setName(nombre)
                router.back()
            }} />
        </View>

    )
}

const styles = StyleSheet.create({
    verticalContainer: {
        backgroundColor: "lightblue",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%',
        padding: '7%',
        borderRadius: 5
    },
    input: {
        height: 40,
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: 'white'
    },
});