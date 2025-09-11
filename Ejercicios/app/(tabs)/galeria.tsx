import { View, Text, FlatList, Image, Modal, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native"
import { Router, useRouter } from "expo-router"
import Boton from "../../components/Boton"

type Producto = {
    id: string
    titulo: string
    precio: number
    imagen: number | { uri: string }
}

type listaProps = {
    datos: Array<Producto> 
}

function ListaDeProductos(props: listaProps) {
    return (
        <FlatList
            contentContainerStyle={{ justifyContent: "center" }}
            data={props.datos}
            keyExtractor={(item) => item.id}
            style={[styles.FlatListContainer, { flex: 1 }]}
            renderItem={({ item }) =>
            (
                <Boton viewStyle={styles.listItem}>
                    <View style={{ flexDirection: "column", alignItems: "center" }}>
                        <Text style={styles.large}>{item.titulo}</Text>
                        <Text style={styles.large}>$ {item.precio}</Text>
                    </View>
                    <Image source={item.imagen} style={{ width: 100, height: 100 }} />
                </Boton>
            )
            }
        ></FlatList>
    )
}

export default function Galeria() {
    const productos = [
        { id: "1", titulo: "manzana", precio: 200, imagen: { uri: "https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg" } },
        { id: "2", titulo: "banana", precio: 100, imagen: { uri: "https://greenshop.ar/wp-content/uploads/2024/06/A.2.6-500GR.jpg" } },
        { id: "3", titulo: "pera", precio: 300, imagen: { uri: "https://www.nutricionyentrenamiento.fit/images/alimento/248.jpg" } },
        { id: "4", titulo: "uva", precio: 2000, imagen: { uri: "https://frutasdobrasil.org/wp-content/uploads/2021/08/WhatsApp-Image-2021-09-29-at-15.42.51-2-477x375.jpeg" } },
        { id: "5", titulo: "naranja", precio: 400, imagen: require("../../assets/naranja.jpg") }
    ]
    return (
        <View style={[styles.verticalContainer, { backgroundColor: "lightblue" }]}>
            <View style={{ flex: 0.1 }}>
                <Text style={[styles.title]}>Lista de productos</Text>
            </View>
            <ListaDeProductos datos={productos} />
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"

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