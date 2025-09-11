import { View, Text, Image,  StyleSheet} from "react-native"
import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import Boton from "../components/Boton"
import PopUp from './PopUp'


type itemProps = {
    titulo: string
    precio: number
    imagen: number | { uri: string }
}

export default function Item(item: itemProps) {
    const [favorito, setFavorito] = useState(false)
    const [popUp, setPopUp] = useState(false)

    return (
        <Boton
            onPress={() => setPopUp(true)}
            onLongPress={() => setFavorito(!favorito)}
            viewStyle={[styles.listItem, favorito ? { borderWidth: 5 } : { borderWidth: 0 }]} >
            <PopUp
                titulo={item.titulo}
                precio={item.precio}
                imagen={item.imagen}
                visible={popUp}
                setVisible={setPopUp}
            />
            <Ionicons name="star" size={20} color={!favorito ? "#fff" : "#ff8800ff"} />
            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.large}>{item.titulo}</Text>
                <Text style={styles.large}>$ {item.precio}</Text>
            </View>
            <Image source={item.imagen} style={{ width: 100, height: 100 }} />
        </Boton>
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