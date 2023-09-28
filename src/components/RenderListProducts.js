import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, useState } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { Products } from '../constants/Products';


const RenderListProducts = ({ navigation }) => {
    const [fav, setFav] = useState(false);

    // Crea un array de íconos de estrellas basado en la cantidad de estrellas
    const RenderStars = ({product}) => {
        const starIcons = [];
        for (let i = 0; i < product.stars; i++) {
          starIcons.push(
            <AntDesign key={i} name="star" size={13} color={Colors.BLUE.tercero} style={{ marginVertical: 8 }} />
          );
        }
        return (
            <View style={{ flexDirection: 'row' }}>
                {starIcons}
                <Text style={{ fontSize: 12, color: Colors.WHITE.noveno, marginLeft: 5, marginVertical: 6 }}>({product.stars})</Text>
            </View>
        );
    };

    const handleBtnFavorite = () => {
        if (fav) {
            console.log("Se quito de tu lista de favoritos.");
        } else {
            console.log("Se agrego a tu lista de favoritos.");
        }
        setFav(!fav);
    }
    
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {Products.map((product) => (
          <TouchableOpacity
            key={product.id}
            onPress={() => navigation.push("ProductDetail", { product: product })}
            style={styles.card}
          >
            <Image source={product.img} style={styles.image} resizeMode="cover" />
            <View style={styles.details}>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.description}>{product.shortDescription}</Text>
              <Text style={styles.price}>${product.price}</Text>
              {/* Stars */}
              <View style={styles.starsContainer}>
                {RenderStars(product)}
              </View>
            </View>
            <TouchableOpacity style={styles.iconContainer}>
              <AntDesign name='arrowright' color={Colors.general} size={12} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 15,
      marginBottom: 50,
    },
    card: {
      flexDirection: 'row',
      width: '100%',
      height: 150,
      marginBottom: 15,
      backgroundColor: '#fff', // Puedes cambiar el color de fondo si lo deseas
      overflow: 'hidden', // Esto asegura que la imagen no se desborde de la tarjeta
      borderWidth: 0.5,
      borderRadius: 10,
      borderColor: Colors.WHITE.cuatro,
    },
    image: {
      width: 150,
      height: '100%',
      backgroundColor: Colors.WHITE.tercero,
    },
    details: {
      width: '65%',
      paddingLeft: 15,
      paddingRight: 20,
      paddingVertical: 10,
    },
    name: {
      fontSize: 16,
      fontWeight: "500",
    },
    description: {
      marginVertical: 5,
      fontSize: 11,
      fontWeight: "300"
    },
    price: {
      marginBottom: 5,
      fontSize: 14,
      fontWeight: 'bold',
      color: Colors.BLUE.sexto,
    },
    starsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    iconContainer: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      borderRadius: 15,
      backgroundColor: Colors.WHITE.noveno,
      padding: 5,
    },
});

export default RenderListProducts;