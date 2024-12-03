import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nombre completo" />
      <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      <TextInput style={styles.input} placeholder="Repetir contraseña" secureTextEntry />
      <Picker style={styles.input}>
        <Picker.Item label="Soy emprendedor" value="emprendedor" />
        <Picker.Item label="Soy inversionista" value="inversionista" />
      </Picker>
      <Button title="Registrarse" onPress={() => router.push('/home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { marginBottom: 15, borderBottomWidth: 1, padding: 10 },
});
