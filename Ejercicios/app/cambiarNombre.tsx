import { Text, View, StyleSheet, TextInput, Modal } from 'react-native'
import { useRouter } from 'expo-router'
import Boton from '../components/Boton'
import { useState, useContext } from 'react'
import { ContextoPerfil } from './_layout'



export default function ModalScreen() {
    const router = useRouter()
    const perfil = useContext(ContextoPerfil)

    if (!perfil) return null

    const [nombre, setNombre] = useState(perfil.name)
    /*
    <Modal style={styles.modalStyle}>
    </Modal>
    */
    return (
        <View style={{flex:1, backgroundColor:"#cacaca9a", }}>
            <View style={styles.verticalContainer}>
                <TextInput
                style={styles.input}
                placeholder="Escribe aquí..."
                value={nombre}
                onChangeText={setNombre}
            ></TextInput>
            <Boton name="Guardar" viewStyle = {{borderRadius:10}} onPress={() => {
                perfil.setName(nombre)
                router.back()
            }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    verticalContainer: {
        backgroundColor: "white",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1%',
        marginTop:100,
        padding: '7%',
        borderRadius: 20,
        flex:1,
        maxHeight:"30%"
    },
    modalStyle:{
        backgroundColor: 'rgba(0,0,0,0.3)',
        elevation: 10,
        maxHeight:"50%"
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