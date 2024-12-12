import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useRouter, SearchParams } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';

const CategorySelection = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentCategory = searchParams.get('currentCategory') || ''; // Categoría actual seleccionada
    const [selectedCategory, setSelectedCategory] = useState(currentCategory);

    const categories = [
        { id: '1', name: 'Arte' },
        { id: '2', name: 'Música' },
        { id: '3', name: 'Teatro' },
        { id: '4', name: 'Cine y video' },
        { id: '5', name: 'Comida' },
        { id: '6', name: 'Comics' },
        { id: '7', name: 'Videojuegos' },
        { id: '8', name: 'Moda' },
        { id: '9', name: 'Tecnología' },
        { id: '10', name: 'Publicaciones' },
    ];

    const handleAccept = () => {
        // Redirigir de vuelta con la categoría seleccionada
        router.push({
            pathname: '/creacionCampain',
            params: { category: selectedCategory },
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorías</Text>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.categoryRow}
                        onPress={() => setSelectedCategory(item.name)}
                    >
                        <Text style={styles.categoryName}>{item.name}</Text>
                        <View
                            style={[
                                styles.checkbox,
                                selectedCategory === item.name && styles.checked,
                            ]}
                        >
                            {selectedCategory === item.name && (
                                <Text style={styles.checkmark}>✓</Text>
                            )}
                        </View>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
                <Text style={styles.acceptButtonText}>Aceptar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 16 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    categoryName: { fontSize: 16, color: '#333' },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    checked: {
        backgroundColor: '#ff6b6b',
        borderColor: '#ff6b6b',
    },
    checkmark: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    acceptButton: {
        marginTop: 16,
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

export default CategorySelection;