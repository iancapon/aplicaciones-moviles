import { FlatList, StyleSheet} from "react-native"

import Item from "./Item"

type Producto = {
    id: string
    titulo: string
    precio: number
    imagen: number | { uri: string }
}

type listaProps = {
    datos: Array<Producto>
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
    modal: {

    },
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