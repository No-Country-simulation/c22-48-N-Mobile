import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

export default function Login() {
    const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Contraseña"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.togglePassword}>{passwordVisible ? '👁️' : '🙈'}</Text>
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/emprendedorHome')}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>¿No tenés cuenta?</Text>
        <Link href="/register" style={styles.registerText}>Registrate</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 180,
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  slogan: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  togglePassword: {
    marginLeft: 10,
    fontSize: 18,
    color: '#777',
  },
  forgotPassword: {
    color: '#007BFF',
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#777',
    marginRight: 5,
  },
  registerText: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
});
