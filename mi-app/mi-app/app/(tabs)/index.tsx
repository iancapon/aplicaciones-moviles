import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link, useRouter } from 'expo-router';
import { View, Text, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { Modal } from 'react-native';
import api_url from '../api_url'

const url = api_url()

export default function HomeScreen() {
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState(false)
  const [mensaje, setMensaje] = useState("")
  const [parametro, setParametro] = useState("joder")
  const handleUser = async () => {
    setMensaje("...")
    setModalVisible(true)
    try {
      const response = await fetch(`${url}/user/${parametro}`)
      const data = await response.json()
      if (!data) {
        Alert.alert("Error", "No llegó una respuesta")
      }
      setMensaje(data.mensaje)
    } catch (error) {
      Alert.alert("Error", "No se pudo enviar el mensaje al servidor")
    }
  }
  return (
    <ParallaxScrollView

      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <Modal transparent visible={modalVisible} >
        <View style={[styles.overlay, { justifyContent: "center" }]}>
          <View style={styles.modal}>
            <View>
              <Text>Respuesta: {mensaje}</Text>
            </View>
            <Pressable onPress={() => setModalVisible(false)}>
              <View style={styles.boton}>
                <Text> cerrar </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={handleUser}><View style={styles.boton}>
        <Text>--Mandar GET a /user/--</Text>
      </View></Pressable>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#dddddd3d"
  },
  modal: {
    width: 300,
    height: 200,
    alignSelf: "center",
    padding: 20,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 3,
    justifyContent: "space-between"
  },
  boton: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e6e6ff"
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
