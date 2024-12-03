import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#f8f8f8' }, headerTintColor: '#333' }}>
      <Stack.Screen name="index" options={{ title: 'Bienvenido' }} />
      <Stack.Screen name="login" options={{ title: 'Iniciar Sesión' }} />
      <Stack.Screen name="register" options={{ title: 'Registro' }} />
      <Stack.Screen name="home" options={{ title: 'Inicio' }} />
    </Stack>
  );
}