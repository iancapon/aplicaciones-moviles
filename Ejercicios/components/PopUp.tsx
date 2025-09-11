import { View, Text, Image, Modal, StyleSheet } from "react-native"
import { useState } from "react"
import { ImageResizeMode } from 'react-native';
import Boton from "../components/Boton"

type popUpProps = {
    titulo: string
    precio: number
    imagen: number | { uri: string }
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PopUp(prop: popUpProps) {
    const imageModes = ["cover", "contain", "stretch", "repeat", "center"]
    const [imIndex, setIndex] = useState(0)
    return (
        <Modal
            visible={prop.visible}
            transparent={true}
            animationType="fade"
            statusBarTranslucent={true}

        >
            <View style={{ backgroundColor: "#000000b4", height: "100%" }}>
                <View style={[styles.verticalContainer, { backgroundColor: "white", marginTop: "60%" }]}>
                    <View style={{ flexDirection: "column", alignItems: "center" }}>
                        <Text style={styles.large}>{prop.titulo}</Text>
                        <Text style={styles.large}>$ {prop.precio}</Text>
                    </View>
                    <Image source={prop.imagen}
                        style={{ width: 200, height: 200, borderWidth: 2, }}
                        resizeMode={imageModes[imIndex % 5] as ImageResizeMode} //debe haber una mejor forma
                    />
                    <Boton name={"modo actual: " + imageModes[imIndex % 5]} viewStyle={{ borderWidth: 1 }} onPress={() => setIndex(imIndex + 1)} />
                    <Text>tocá arriba para cambiar, en algunos no hace nada porque ya es un cuadrado perfecto.</Text>
                    <Boton name="cerrar" viewStyle={{ borderWidth: 1 }} onPress={() => prop.setVisible(false)} />

                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    listItem: {
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderColor: "#ff8800ff"
    },
    FlatListContainer: {
        flex: 1,
    },
    verticalContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        margin: 20,
        borderRadius: 20,

    },
    title: {
        fontWeight: "bold",
        fontSize: 30
    },
    large: {
        fontWeight: "bold",
        fontSize: 20
    }
})