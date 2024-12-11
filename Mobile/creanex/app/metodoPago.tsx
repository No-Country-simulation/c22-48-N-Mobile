import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentMethod = () => {
    const [cardType, setCardType] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCVC] = useState('');
    const [billingAddress, setBillingAddress] = useState('');

    const handlePayment = () => {
        if (!cardType || !cardNumber || !expiryDate || !cvc || !billingAddress) {
            alert('Por favor completa todos los campos.');
            return;
        }
        alert('Pago procesado con éxito');

        setTimeout(() => {
            router.push({ pathname: '/inversorCompletedo' }); // Navegar a la pantalla de éxito
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Método de pago</Text>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Tipo de Tarjeta</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Visa, MasterCard, etc."
                    value={cardType}
                    onChangeText={setCardType}
                />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Número de tarjeta</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0000 0000 0000 0000"
                    keyboardType="numeric"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                />
            </View>
            <View style={styles.row}>
                <View style={[styles.inputGroup, styles.halfWidth]}>
                    <Text style={styles.label}>Fecha de venc.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChangeText={setExpiryDate}
                    />
                </View>
                <View style={[styles.inputGroup, styles.halfWidth]}>
                    <Text style={styles.label}>CVC</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="123"
                        keyboardType="numeric"
                        value={cvc}
                        onChangeText={setCVC}
                    />
                </View>
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Dirección de facturación</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Calle, Ciudad, Estado"
                    value={billingAddress}
                    onChangeText={setBillingAddress}
                />
            </View>
            <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
                <Text style={styles.payButtonText}>Pagar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
    inputGroup: { marginBottom: 16 },
    label: { fontSize: 16, color: '#555', marginBottom: 4 },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
    halfWidth: { width: '48%' },
    payButton: {
        backgroundColor: '#ff6b6b',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    payButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default PaymentMethod;
