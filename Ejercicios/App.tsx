import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import EjercicioContador from './EjercicioContador'
import EjercicioTarjetas from './EjercicioTarjetas'

const Tab = createBottomTabNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator >
        <Tab.Screen name='Contador' component={EjercicioContador}  />
        <Tab.Screen name='Tarjetas' component={EjercicioTarjetas}  />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
