import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { useSearchParams } from 'expo-router/build/hooks';


const CampaignDetail = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id') as keyof typeof imageMap;
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    //const image = searchParams.get('image');
    const category = searchParams.get('category');
    const location = searchParams.get('location');
    const information = searchParams.get('information');

    // Mapeo de imágenes locales
    const imageMap = {
        '1': require('../assets/images/piano.png'),
        '2': require('../assets/images/videojuego.png'),
        '3': require('../assets/images/ecocreate.png'),
    };

      // Seleccionar imagen basada en el ID
    const image = imageMap[id];
    
    const [value, setValue] = useState(25000);

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Detalle de campaña</Text>
                <TouchableOpacity>
                    <Text style={styles.headerIcon}>⋮</Text>
                </TouchableOpacity>
            </View>

            {/* Imagen de la campaña */}
            {image ? (
                <Image source={image} style={styles.campaignImage} />
            ) : (
                <Text style={styles.errorText}>Imagen no disponible</Text>
            )}

            {/* Información de la campaña */}
            <View style={styles.infoContainer}>
                <Text style={styles.campaignTitle}>{title}</Text>
                <Text style={styles.categoryLocation}>{category} | {location}</Text>
                <Text style={styles.campaignDescription}>{information}</Text>
            </View>

            {/* Rentabilidad y Objetivo */}
            <View style={styles.objectiveContainer}>
                <Text style={styles.sectionTitle}>Rentabilidad</Text>
                <View style={styles.sliderRow}>
                    <Text style={styles.sliderLabel}>0$</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={50000}
                        step={1000}
                        value={value}
                        onValueChange={setValue}
                        minimumTrackTintColor="#ff6b6b"
                        maximumTrackTintColor="#ddd"
                        thumbTintColor="#ff6b6b"
                    />
                    <Text style={styles.sliderLabel}>50,000.00$</Text>
                </View>
                <Text style={styles.currentValue}>
                    Valor actual: {value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </Text>
                <Text style={styles.deadlineText}>Plazos: 02/2025</Text>
            </View>

            {/* Comentarios y FAQ */}
            <View style={styles.linksContainer}>
                <TouchableOpacity>
                    <Text style={styles.linkText}>Comentarios</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.linkText}>FAQ</Text>
                </TouchableOpacity>
            </View>

            {/* Botón de Apoyar */}
            <TouchableOpacity style={styles.supportButton}>
                <Text style={styles.supportButtonText}>Apoyar Proyecto</Text>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerIcon: {
        fontSize: 20,
    },
    campaignImage: {
        width: 376,
        height: 176,
        borderRadius: 8,
        marginBottom: 16,
    },
    infoContainer: {
        marginBottom: 16,
    },
    campaignTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    categoryLocation: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    campaignDescription: {
        fontSize: 14,
        color: '#555',
    },
    objectiveContainer: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    sliderRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    slider: {
        flex: 1,
        marginHorizontal: 8,
    },
    sliderLabel: {
        fontSize: 12,
        color: '#555',
    },
    currentValue: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginVertical: 8,
    },
    deadlineText: {
        marginTop: 8,
        fontSize: 14,
        color: '#555',
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    linkText: {
        fontSize: 14,
        color: '#007bff',
        textDecorationLine: 'underline',
    },
    supportButton: {
        backgroundColor: '#ff6b6b',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    supportButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        fontSize: 14,
        color: '#ff6b6b',
        textAlign: 'center',
        marginVertical: 16,
    },
});

export default CampaignDetail;
