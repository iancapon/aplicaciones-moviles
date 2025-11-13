import { styles } from '@/constants/stylesheets';
import { StatusBar } from 'expo-status-bar';
import { fetchWeatherApi } from 'openmeteo';
import { useEffect, useState } from 'react';
import { Text, View } from "react-native";

interface CurrentWeatherData {
  currentTime: Date | undefined;
  latitude: number | undefined
  longitude: number | undefined
  temperature: number | undefined
  windSpeed: number | undefined
  windDirection: number | undefined
  windGusts: number | undefined
}

async function fetchData(latitud: number, longitud: number) {
  const params = {
    latitude: latitud,//-34.6033,
    longitude: longitud,//-58.4436,
    current: ["temperature_2m", "wind_speed_10m", "wind_direction_10m", "wind_gusts_10m"],
    timezone: "auto",//"America/Argentina/Buenos_Aires",
    forecast_days: 1
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];
  //console.log("RAW RESPONSE", responses);

  const latitude = response.latitude();
  const longitude = response.longitude();
  const elevation = response.elevation();
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const getFirstIndex = (array: Float32Array<ArrayBufferLike> | null | undefined) => {
    if (array == null) return "-"
    else if (array.length > 0) {
      return array[0]
    }
    return "-"
  }

  const current = response.current();

  const currentWeatherData: CurrentWeatherData = {
    currentTime: new Date((Number(current?.time()) + utcOffsetSeconds) * 1000),
    latitude: latitude,
    longitude: longitude,
    temperature: current?.variables(0)?.value(),
    windSpeed: current?.variables(1)?.value(),
    windDirection: current?.variables(2)?.value(),
    windGusts: current?.variables(3)?.value()
  }

  return currentWeatherData
}



export default function Index() {
  const [data, setData] = useState<CurrentWeatherData>()
  const [now, setNow] = useState(new Date());

  const latitud = -34.5
  const longitud = -58.4

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData(latitud, longitud);
      setData(result);
    };

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);


    loadData();
    return () => clearInterval(interval); // Limpieza obligatoria
  }, []);

  const capHundreads = (value: number | undefined) => {
    if (!value) return "-"
    return value.toFixed(2)
  }

  function gradosACardinal(deg: number | undefined): string {
    if (deg == undefined) return "-"
    if (isNaN(deg)) return "-";

    const direcciones = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    const indice = Math.round((deg % 360) / 45) % 8;

    return direcciones[indice];
  }

  const ultimaActualizacion = (tiempo: Date | undefined) => tiempo?.toISOString().slice(11, 19)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data ? (
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Usando modelos de la api "open-meteo"</Text>
          <Text style={styles.text}>LAT: {data?.latitude} ° LON: {data?.longitude} °</Text>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Estado actual</Text>
            <Text style={styles.subtitle}>Hoy, {now.toLocaleDateString()}, {now.toLocaleTimeString("es-AR", { hour12: false })}</Text>
            <Text style={styles.subtitle}>Ultima actualización: {ultimaActualizacion(data?.currentTime)}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>☀️   {capHundreads(data?.temperature)} °C</Text>
            <Text style={styles.title}>🍃   {capHundreads(data?.windSpeed)} Knts</Text>
            <Text style={styles.title}>🧭   {capHundreads(data?.windDirection)} ° {gradosACardinal(data?.windDirection)}</Text>
            <Text style={styles.title}>🌪️   {capHundreads(data?.windGusts)} Knts</Text>
          </View>
        </View>
      ) :
        <Text style={styles.title}>⌛ Esperando datos...</Text>
      }
      <StatusBar style="dark" />
    </View>
  );
}
