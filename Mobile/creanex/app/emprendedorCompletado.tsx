import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const EmprendedorCompletado = () => {
    const router = useRouter();

    const userName = "Kevin"; // Este valor podría provenir de un contexto o parámetros

    return (
        <View style={styles.container}>
            {/* Icono de éxito */}
            <Image
                source={require('../assets/images/checkmark.png')} // Reemplaza con la ruta a tu imagen local
                style={styles.checkIcon}
            />

            {/* Mensaje de felicitación */}
            <Text style={styles.title}>¡Felicidades, {userName}!</Text>
            <Text style={styles.subtitle}>Tu campaña ha sido creada con éxito</Text>

            {/* Botón para volver al inicio */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.push('/emprendedorHome')} // Cambia esta ruta según tu configuración
            >
                <Text style={styles.backButtonText}>Volver al inicio</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    checkIcon: {
        width: 100,
        height: 100,
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 24,
    },
    backButton: {
        backgroundColor: '#ff6b6b',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EmprendedorCompletado;
