import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button, Alert, Image } from "react-native";
import React, { useState } from "react";

//categorias lista
const Categories = [
    {
        id: 1,
        name: "Todos",
        image: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    },
    {
        id: 2,
        name: "Laptops",
        image: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    },
    {
        id: 3,
        name: "PC Desktop",
        image: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    },
    {
        id: 4,
        name: "GPU",
        image: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    },
    {
        id: 5,
        name: "CPU",
        image: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    },
    {
        id: 6,
        name: "Tarjeta Grafica",
        image: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    },
]

//categorias render
const RenderCategorias = () => {
    const [activeCategoryId, setActiveCategoryId] = useState(Number)

    //funcion para agarrar el evento al pulsar una categoria
    const handlePress = (id, name, img) => {
        setActiveCategoryId(id)
        Alert.alert(name, img)
        //...consultamos los productos por la categoria seleccionada.
    }
    
    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingHorizontal: 10 }}
            data={Categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => handlePress(item.id, item.name, item.image)}
                >
                    <Text
                        style={[
                            styles.categoria,
                            activeCategoryId === item.id && {
                                color: "#ffffff",
                                fontWeight: "bold",
                                backgroundColor: "#280886",
                            },
                        ]}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    categoria: {
        color: "#666f80",
        fontSize: 11,
        paddingVertical: 12,
        paddingHorizontal: 30,
        backgroundColor: "#f2f2f2",
        borderRadius: 25,
        marginHorizontal: 5,
    },
    slideCategory: {
        marginHorizontal: 0,
    },
})

export default RenderCategorias
