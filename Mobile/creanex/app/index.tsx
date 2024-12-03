import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: undefined,
    aspectRatio: 1, 
    resizeMode: 'contain',
    marginBottom: 20,
  },
  slogan: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
});
