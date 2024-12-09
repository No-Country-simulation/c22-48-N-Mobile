import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('emprendedor');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
      <Image
        source={require('../assets/images/logo_1.png')}
        style={styles.logo}
      />
        <Text style={styles.logoText}>Registrarse</Text>
      </View>

      {/* Inputs con Labels */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={fullName}
          onChangeText={setFullName}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
      </View>

      {/* Contraseña */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Contraseña"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Text style={styles.togglePassword}>{passwordVisible ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirmar contraseña */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Repetir contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Repetir contraseña"
            secureTextEntry={!confirmPasswordVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
          <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
            <Text style={styles.togglePassword}>{confirmPasswordVisible ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Picker */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Soy emprendedor / Soy inversionista</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedRole}
            onValueChange={(itemValue) => setSelectedRole(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Soy emprendedor" value="emprendedor" />
            <Picker.Item label="Soy inversionista" value="inversionista" />
          </Picker>
        </View>
      </View >

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/emprendedorHome')}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#0B3D91', // Azul oscuro
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  togglePassword: {
    marginLeft: 10,
    fontSize: 18,
    color: '#999',
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
