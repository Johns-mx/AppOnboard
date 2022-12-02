import { View, Text, StyleSheet, Image, useWindowDimensions
 } from 'react-native';
import React from 'react';

export default OnboardingItem = ({ item }) => {
    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]}/>

            <View style={{ flex: 0.3 }}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.descripcion}>{item.descripcion}</Text>
                <Text style={styles.boton}>{item.boton}</Text>
            </View>
        </View>
    );
}


//establecer estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: "center",
    },
    titulo: {
        fontWeight: "800",
        fontSize: 30,
        marginBottom: 10,
        color: "#8B63FF",
        textAlign: "center",
    },
    descripcion: {
        fontWeight: "300",
        fontSize: 15,
        color: "#29353a",
        textAlign: "center",
        paddingHorizontal: 64,
    },
    boton: {
        alignSelf: "center",
        marginTop: 0,
        height: 50,
    },
});