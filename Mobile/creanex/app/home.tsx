import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Populares</Text>
      <View style={styles.card}></View>
      <Text style={styles.sectionTitle}>Recientes</Text>
      <View style={styles.card}></View>
      <View style={styles.card}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
},

  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10 
},
  card: { 
    height: 100, 
    backgroundColor: 
    '#ccc', 
    marginBottom: 10, 
    borderRadius: 10 
},
});
