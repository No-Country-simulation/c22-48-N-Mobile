import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const RewardsScreen = () => {
    const router = useRouter();

    const [rewards, setRewards] = useState([
        { amount: '', description: '' },
        { amount: '', description: '' },
        { amount: '', description: '' },
    ]);

    const handleRewardChange = (index: number, field: 'amount' | 'description', value: string) => {
        const updatedRewards = [...rewards];
        updatedRewards[index][field] = value;
        setRewards(updatedRewards);
    };

    const handleAccept = () => {
        if (rewards.some((reward) => !reward.amount || !reward.description)) {
            alert('Por favor completa todos los campos de las recompensas.');
            return;
        }
        alert('¡Recompensas guardadas con éxito!');
        router.push('/creacionCampain'); // Redirige a la pantalla de creación de campaña
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Apoyar Proyecto</Text>
            <Text style={styles.subtitle}>
                Indica con cuánto deben contribuir y describe qué recompensa ofrecerás.
            </Text>

            {rewards.map((reward, index) => (
                <View key={index} style={styles.rewardContainer}>
                    <Text style={styles.label}>Contribuí con $</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Monto"
                        keyboardType="numeric"
                        value={reward.amount}
                        onChangeText={(value) => handleRewardChange(index, 'amount', value)}
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Describí qué recompensa ofrecerás"
                        multiline
                        value={reward.description}
                        onChangeText={(value) => handleRewardChange(index, 'description', value)}
                    />
                </View>
            ))}

            <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
                <Text style={styles.acceptButtonText}>Aceptar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
        marginBottom: 16,
        textAlign: 'center',
    },
    rewardContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 8,
        backgroundColor: '#f9f9f9',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    acceptButton: {
        backgroundColor: '#ff6b6b',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    acceptButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RewardsScreen;
