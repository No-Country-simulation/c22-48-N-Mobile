import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';

const CreateCampaign = () => {
    const router = useRouter();

    const [projectName, setProjectName] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [goal, setGoal] = useState(100000); // Valor inicial del slider

    const handleLaunchProject = () => {
        if (!projectName || !category || !location || !description) {
            alert('Por favor completa todos los campos obligatorios.');
            return;
        }
        alert('¡Proyecto lanzado con éxito!');
        // Aquí puedes manejar la lógica para guardar o enviar los datos del proyecto
        router.push('/emprendedorHome'); // Redirige al home del emprendedor
    };

    return (
        <ScrollView style={styles.container}>
            {/* Nombre del Proyecto */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Nombre del Proyecto</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre del Proyecto"
                    value={projectName}
                    onChangeText={setProjectName}
                />
            </View>

            {/* Categoría */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Categoría</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Selecciona una categoría"
                    value={category}
                    onChangeText={setCategory}
                />
            </View>

            {/* Ubicación */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Ubicación</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ciudad, Estado o País"
                    value={location}
                    onChangeText={setLocation}
                />
            </View>

            {/* Descripción del Proyecto */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Descripción del proyecto</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Describe tu proyecto"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />
            </View>

            {/* Objetivo */}
            <View style={styles.sliderGroup}>
                <Text style={styles.label}>Objetivo</Text>
                <View style={styles.sliderRow}>
                    <Text style={styles.sliderLabel}>0$</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={200000}
                        step={1000}
                        value={goal}
                        onValueChange={setGoal}
                        minimumTrackTintColor="#ff6b6b"
                        maximumTrackTintColor="#ddd"
                        thumbTintColor="#ff6b6b"
                    />
                    <Text  style={styles.sliderLabel}> {goal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                </View>
                <Text style={styles.deadlineText}>Plazos: 02/2025</Text>
            </View>

            {/* Opciones Adicionales */}
            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Rentabilidad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Agregar imagen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Recompensa</Text>
            </TouchableOpacity>

            {/* Botón para lanzar el proyecto */}
            <TouchableOpacity style={styles.launchButton} onPress={handleLaunchProject}>
                <Text style={styles.launchButtonText}>Lanzar Proyecto</Text>
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
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    sliderGroup: {
        marginBottom: 24,
    },
    sliderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    slider: {
        flex: 1,
        marginHorizontal: 8,
    },
    sliderLabel: {
        fontSize: 14,
        color: '#555',
    },
    deadlineText: {
        marginTop: 8,
        fontSize: 14,
        color: '#555',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionText: {
        fontSize: 16,
        color: '#007bff',
    },
    launchButton: {
        backgroundColor: '#ff6b6b',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    launchButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CreateCampaign;
