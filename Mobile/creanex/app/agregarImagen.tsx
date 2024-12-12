import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

const AddImageScreen = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const router = useRouter();

    // Función para abrir el selector de imágenes
    const pickImage = async () => {
        // Solicitar permisos si aún no se han otorgado
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Lo sentimos, necesitamos permisos para acceder a tu galería.');
            return;
        }

        // Abrir la galería y seleccionar la imagen
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri); // Guardar la URI de la imagen seleccionada
        }
    };

    // Función para aceptar la imagen seleccionada
    const handleAccept = () => {
        if (!selectedImage) {
            alert('Por favor selecciona una imagen antes de continuar.');
            return;
        }

        // Aquí puedes manejar el guardado o paso de la imagen a otra pantalla
        router.push({
            pathname: '/creacionCampain',
            params: { imageUri: selectedImage }, // Pasar la imagen seleccionada como parámetro
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agregar imagen</Text>

            {/* Mostrar la imagen seleccionada */}
            <View style={styles.imageContainer}>
                {selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={styles.image} />
                ) : (
                    <View style={styles.placeholder}>
                        <Text style={styles.placeholderText}>Imagen no seleccionada</Text>
                    </View>
                )}
            </View>

            {/* Botón para seleccionar una imagen */}
            <TouchableOpacity style={styles.pickImageButton} onPress={pickImage}>
                <Text style={styles.pickImageButtonText}>📷 Ingresa fotos para que puedan visualizar tu proyecto</Text>
            </TouchableOpacity>

            {/* Botón para aceptar */}
            <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
                <Text style={styles.acceptButtonText}>Aceptar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    imageContainer: {
        width: '100%',
        height: 200,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    placeholder: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 14,
        color: '#999',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    pickImageButton: {
        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
    },
    pickImageButtonText: {
        fontSize: 14,
        color: '#007bff',
        textAlign: 'center',
    },
    acceptButton: {
        backgroundColor: '#ff6b6b',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    acceptButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AddImageScreen;
