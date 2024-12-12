import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const ApoyarProyecto = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const supportOptions = [
        { id: 1, title: 'Contribuí con $1000', description: 'Recibe: Acceso a reportes mensuales y mención en nuestras redes sociales.' },
        { id: 2, title: 'Contribuí con $5000', description: 'Recibe: Todos los beneficios anteriores y acceso anticipado a nuevas funciones.' },
        { id: 3, title: 'Contribuí con $10.000', description: 'Recibe: Todos los beneficios anteriores y tu nombre en la página de patrocinadores.' },
    ];

    const handleSupport = () => {
        if (selectedOption) {
            router.push('/metodoPago'); // Navegar a la pantalla de método de pago
        } else {
            alert('Por favor selecciona una opción de apoyo.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Apoyar Proyecto</Text>
            <Text style={styles.subtitle}>Elige tu forma de apoyo</Text>
            {supportOptions.map((option) => (
                <TouchableOpacity
                    key={option.id}
                    style={[
                        styles.optionCard,
                        selectedOption === option.id && styles.selectedOption,
                    ]}
                    onPress={() => setSelectedOption(option.id)}
                >
                    <Text style={styles.optionTitle}>{option.title}</Text>
                    <Text style={styles.optionDescription}>{option.description}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.supportButton} onPress={handleSupport}>
                <Text style={styles.supportButtonText}>Apoyar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
    subtitle: { fontSize: 16, color: '#555', marginBottom: 16 },
    optionCard: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
    },
    selectedOption: {
        borderColor: '#ff6b6b',
        backgroundColor: '#fff5f5',
    },
    optionTitle: { fontSize: 16, fontWeight: 'bold' },
    optionDescription: { fontSize: 14, color: '#555', marginTop: 4 },
    supportButton: {
        marginTop: 16,
        backgroundColor: '#ff6b6b', // Color del botón
        paddingVertical: 10, // Reduce el alto del botón
        paddingHorizontal: 20, // Reduce el ancho interno
        borderRadius: 8, // Bordes redondeados
        alignSelf: 'center', 
    },
    supportButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default ApoyarProyecto;
