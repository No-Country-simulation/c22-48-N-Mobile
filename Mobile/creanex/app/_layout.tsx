import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#f8f8f8' }, headerTintColor: '#333' }}>
      <Stack.Screen name="index" options={{ title: 'Bienvenido' }} />
      <Stack.Screen name="login" options={{ title: 'Iniciar Sesión' }} />
      <Stack.Screen name="register" options={{ title: 'Registro' }} />
      <Stack.Screen name="emprendedorHome" options={{ title: 'Inicio' }} />
      <Stack.Screen name="inversionistaHome" options={{ title: 'Inicio' }} />
      <Stack.Screen name="proyectos" options={{ title: 'Proyectos' }} />
      <Stack.Screen name="detallePantalla" options={{ title: 'Detalle de Campaña' }} />
      <Stack.Screen name="apoyarProyecto" options={{ title: 'Apoyar Proyecto' }}/>
      <Stack.Screen name="metodoPago" options={{ title: 'Método de Pago' }}/>
      <Stack.Screen name="inversorCompletado" options={{ title: 'Inversor Completado' }}/>
      <Stack.Screen name="creacionCampain" options={{ title: 'Crear Campaña' }}/>
      <Stack.Screen name="categoria" options={{ title: 'Categorías' }}/>
      <Stack.Screen name="agregarImagen" options={{ title: 'Agregar Imagen' }}/>
      <Stack.Screen name="recompensa" options={{ title: 'Recompensa' }}/>
      <Stack.Screen name="emprendedorCompletado" options={{ title: 'Emprendedor Completado' }}/>
    </Stack>
  );
}