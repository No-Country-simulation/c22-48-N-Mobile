import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Modal, Button } from 'react-native';

const InversorHome = () => {

    const popularProjects = [
        {
            id: '1',
            title: 'Soda Stereo',
            description: 'Persiana Americana, Disco "Signos"',
            image: [require('../assets/images/soda.png')],
        },
        {
            id: '2',
            title: 'Tecnología - EcoCreate',
            description: 'Proyecto de sostenibilidad e innovación',
            image: [require('../assets/images/ecocreate.png')],
        },
    ];

    const recentProjects = [
        {
            id: '1',
            title: 'Videojuego - EchoQuest',
            description: 'Un juego inmersivo en las profundidades del océano.',
            image: [require('../assets/images/videojuego.png')],
        },
        {
            id: '2',
            title: 'Tecnología - EcoCreate',
            description: 'Proyecto de sostenibilidad e innovación.',
            image: [require('../assets/images/ecocreate.png')],
        },
    ];

    const categories = [
        { id: '1', icon: '🎨', label: 'Arte' },
        { id: '2', icon: '🎵', label: 'Música' },
        { id: '3', icon: '🎮', label: 'Videojuegos' },
        { id: '4', icon: '🍔', label: 'Comida' },
    ];

    return (
        <View style={styles.container}>
            {/* Populares Section */}
            <Text style={styles.sectionTitle}>Populares</Text>
            <FlatList
                data={popularProjects}
                horizontal
                renderItem={({ item }) => (
                    <View style={styles.popularCard}>
                        {Array.isArray(item.image) ? (
                            <Image source={item.image[0]} style={styles.popularImage} />
                        ) : (
                            <Image source={{ uri: item.image }} style={styles.popularImage} />
                        )}
                        <Text style={styles.projectTitle}>{item.title}</Text>
                        <Text style={styles.projectDescription}>{item.description}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.popularList}
            />

            {/* Categorías */}
            <View style={styles.categoriesContainer}>
                {categories.map((category) => (
                    <View key={category.id} style={styles.category}>
                        <Text style={styles.categoryIcon}>{category.icon}</Text>
                        <Text style={styles.categoryLabel}>{category.label}</Text>
                    </View>
                ))}
            </View>

            {/* Recientes Section */}
            <Text style={styles.sectionTitle}>Recientes</Text>
            <FlatList
                data={recentProjects}
                renderItem={({ item }) => (
                    <View style={styles.recentCard}>

                        {typeof item.image === 'string' ? (
                            <Image source={{ uri: item.image }} style={styles.recentImage} />
                        ) : (
                            <Image source={item.image[0]} style={styles.recentImage} />
                        )}
                        <View style={styles.recentInfo}>
                            <Text style={styles.projectTitle}>{item.title}</Text>
                            <Text style={styles.projectDescription}>{item.description}</Text>
                        </View>
                        <TouchableOpacity style={styles.likeButton}>
                            <Text style={styles.likeText}>❤️</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.recentList}
            />

            {/* Crear mi campaña */}
            <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>Descubre proyectos</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor: '#fff' 
    },
    sectionTitle: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 8 
    },
    popularCard: {
        width: 250,
        marginRight: 16, // Espaciado entre tarjetas
        backgroundColor: '#fff', // Fondo blanco para mayor contraste
        borderRadius: 8,
        overflow: 'hidden',
    },
    popularList: {
        paddingHorizontal: 16,
        
    },
    popularImage: { 
        width: 380, 
        height: 100, 
        borderRadius: 8, 
        marginBottom: 8 
    },
    projectTitle: 
    {   fontSize: 16, 
        fontWeight: 'bold',
        textAlign: 'left', 
    },
    projectDescription: { 
        fontSize: 12, 
        color: '#555',
        textAlign: 'left',
        marginTop: 4, 
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 24, // Espaciado entre "Populares" y "Categoría"
        marginBottom: 16,
    },
    category: {
        alignItems: 'center',
    },
    categoryIcon: { fontSize: 24 },
    categoryLabel: { fontSize: 12, marginTop: 4, color: '#555' },
    recentCard: {
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        marginBottom: 12,
        padding: 8,
        alignItems: 'center', // Centra los elementos horizontalmente
        width: '100%',
        overflow: 'hidden', // Asegura que no haya elementos desbordand
    },
    recentImage: { 
        width: '100%', 
        height: 120, 
        borderRadius: 8, 
        marginRight: 8 
    },
    recentList: {
        paddingHorizontal: 16,
    },
    recentInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    likeButton: {
        marginTop: 8,
        backgroundColor: '#ff6b6b',
        borderRadius: 50,
        padding: 8,
        alignSelf: 'flex-end',
    },
    createButton: {
        marginTop: 16,
        backgroundColor: '#ff6b6b', // Color del botón
        paddingVertical: 10, // Reduce el alto del botón
        paddingHorizontal: 20, // Reduce el ancho interno
        borderRadius: 8, // Bordes redondeados
        alignSelf: 'center', 
    },
    createButtonText: { color: '#fff', fontWeight: 'bold' },
    likeText: { color: '#fff', fontSize: 16 },
});

export default InversorHome;