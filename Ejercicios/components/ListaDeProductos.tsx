import { View, Text, FlatList, Image, Modal, StyleSheet, StyleProp, ViewStyle, TextStyle, Pressable } from "react-native"
import { Router, useRouter } from "expo-router"
import { useState } from "react"
import Boton from "../components/Boton"
import { Ionicons } from "@expo/vector-icons"


type Producto = {
    id: string
    titulo: string
    precio: number
    imagen: number | { uri: string }
}

type listaProps = {
    datos: Array<Producto>
}

type itemProps = {
    titulo: string
    precio: number
    imagen: number | { uri: string }
}

function Item(item: itemProps) {
    const [favorito, setFavorito] = useState(false)

    return (
        <Boton
            onLongPress={() => setFavorito(!favorito)}
            viewStyle={[styles.listItem, favorito ? { borderWidth: 5 } : { borderWidth: 0 }]} >
            <Ionicons name="star" size={20} color={!favorito ? "#fff" : "#ff8800ff"}/>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.large}>{item.titulo}</Text>
                <Text style={styles.large}>$ {item.precio}</Text>
            </View>
            <Image source={item.imagen} style={{ width: 100, height: 100 }} />
        </Boton>
    )
}

export default function ListaDeProductos(props: listaProps) {
    return (
        <FlatList
            contentContainerStyle={{ justifyContent: "center" }}
            data={props.datos}
            keyExtractor={(item) => item.id}
            style={[styles.FlatListContainer, { flex: 1 }]}
            renderItem={({ item }) => {
                return (<Item
                    titulo={item.titulo}
                    precio={item.precio}
                    imagen={item.imagen} />)
            }}
        ></FlatList>
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
        height: "95%"
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