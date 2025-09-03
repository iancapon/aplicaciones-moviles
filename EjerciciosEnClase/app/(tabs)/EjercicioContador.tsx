import { Image } from 'expo-image';
import { Platform } from 'react-native';
import { StyleSheet, Pressable, View, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Contador from '@/components/Contador'


export default function EjercicioContador() {
  return (
    <ThemedView style={{marginTop:"20%"}}>
      <ThemedView style={styles.verticalContainer}>
        <ThemedText type="title">Ejercicio de contador</ThemedText>
        <Contador />
      </ThemedView>
    </ThemedView>

  );
}


const styles = StyleSheet.create({
  verticalContainer: {
    backgroundColor: "grey",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '5%',
    padding: '7%',
    borderRadius: 5
  }
});
