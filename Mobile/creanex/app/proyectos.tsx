import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Proyectoscreen = () => {
    const router = useRouter();

    const projects = [
        {
            id: '1',
            title: 'Piano para todos',
            description: 'Clases de piano para principiantes y avanzados.',
            image: require('../assets/images/piano.png'),
            category: 'Música',
            location: 'Buenos Aires',
            information: 'Clases de piano diseñadas para principiantes y avanzados, donde aprenderás a interpretar tus canciones favoritas con un enfoque práctico, sencillo y altamente efectivo. Descubre el placer de la música mientras desarrollas tus habilidades al piano',
        },
        {
            id: '2',
            title: 'Videojuego - EchoQuest',
            description: 'Un juego inmersivo en las profundidades del océano.',
            image: require('../assets/images/videojuego.png'),
            category: 'Videojuegos',
            location: 'Buenos Aires',
            information: 'Embárcate en una aventura inmersiva en las profundidades del océano, donde descubrirás un mundo submarino lleno de secretos, desafíos y maravillas ocultas. Explora paisajes marinos misteriosos y enfréntate a retos que pondrán a prueba.',
        },
        {
            id: '3',
            title: 'Tecnología - EcoCreate',
            description: 'Proyecto de sostenibilidad e innovación.',
            image: require('../assets/images/ecocreate.png'),
            category: 'Tecnología',
            location: 'Buenos Aires',
            information: 'Un proyecto dedicado a la sostenibilidad y la innovación, enfocado en el desarrollo de tecnología avanzada para construir un mundo más limpio, eficiente y comprometido con el cuidado del medio ambiente.',
        },
    ];

    const handleProjectPress = (project: { id: string; title: string; description: string; image: any; category: string; location: string; information: string }) => {
        router.push({
            pathname: '/detalleCampaña',
            params: {
                id: project.id,
                title: project.title,
                description: project.description,
                image: project.image,
                category: project.category,
                location: project.location,
                information: project.information,
            }, // Pasar datos del proyecto al detalle
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Populares</Text>
            <FlatList
                data={projects}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleProjectPress(item)}>
                        <View style={styles.projectCard}>
                            <Image source={item.image} style={styles.projectImage} />
                            <Text style={styles.projectTitle}>{item.title}</Text>
                            <Text style={styles.projectDescription}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
    projectCard: {
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
        padding: 12,
    },
    projectImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
    },
    projectTitle: { fontSize: 16, fontWeight: 'bold' },
    projectDescription: { fontSize: 14, color: '#555' },
});

export default Proyectoscreen;
