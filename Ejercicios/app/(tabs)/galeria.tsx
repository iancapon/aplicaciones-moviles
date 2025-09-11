import { View, Text, FlatList, Image, Modal, StyleSheet, StyleProp, ViewStyle, TextStyle, Pressable } from "react-native"
import { Router, useRouter } from "expo-router"
import { useState } from "react"
import Boton from "../../components/Boton"
import ListaDeProductos from "../../components/ListaDeProductos"


const productos = [
    { id: "1", titulo: "manzana", precio: 200, imagen: { uri: "https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg" } },
    { id: "2", titulo: "banana", precio: 100, imagen: { uri: "https://greenshop.ar/wp-content/uploads/2024/06/A.2.6-500GR.jpg" } },
    { id: "3", titulo: "pera", precio: 300, imagen: { uri: "https://www.nutricionyentrenamiento.fit/images/alimento/248.jpg" } },
    { id: "4", titulo: "uva", precio: 2000, imagen: { uri: "https://frutasdobrasil.org/wp-content/uploads/2021/08/WhatsApp-Image-2021-09-29-at-15.42.51-2-477x375.jpeg" } },
    { id: "5", titulo: "naranja", precio: 400, imagen: require("../../assets/naranja.jpg") }
]

export default function Galeria() {

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