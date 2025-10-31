export type MyThemeColorType = {
  text: string
  muted: string
  background: string
  header: string
  success: string
  warning: string
  accent: string
  card: string
  button: string
  overlay: string
  navbar: string
}

export const myLightTheme: MyThemeColorType = {
  text: '#2E0000',        // casi negro rojizo
  muted: '#7A4A4A',       // rojo grisáceo suave
  background: '#FFF8F8',  // blanco con leve tinte rosado
  header: '#fd8686ff',      // rojo principal
  success: '#4CAF50',     // verde de éxito
  warning: '#E65100',     // naranja cálido
  accent: '#EF5350',      // rojo brillante
  card: '#FFFFFF',        // blanco puro
  button: '#C62828',      // rojo sólido para botones
  overlay: '#fac1c1b4',
  navbar: '#1A0000'
}

export const myDarkTheme: MyThemeColorType = {
  text: '#FFF0F0',        // texto casi blanco con tono rosado
  muted: '#E57373',       // rojo suave para texto secundario
  background: '#1A0000',  // fondo negro rojizo profundo
  header: '#8E0000',      // rojo oscuro elegante
  success: '#81C784',     // verde apagado para buen contraste
  warning: '#FFB74D',     // amarillo anaranjado
  accent: '#EF5350',      // rojo claro que destaca
  card: '#2A0000',        // fondo de tarjeta más claro
  button: '#C62828',      // rojo fuerte que sobresale en oscuro
  overlay: '#831515b4',
  navbar: '#FFF8F8'
}