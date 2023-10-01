import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { cartProducts } from '../constants/CartProducts';


const Cart = ({ navigation }) => {
  const [loading, setLoading] = useState(true); // Estado para mostrar el indicador de carga
  const [cartItems, setCartItems] = useState(cartProducts); // Estado para los productos en el carrito
  const [total, setTotal] = useState(0)

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        setLoading(false); // Cuando la carga simulada termina, detener el indicador de carga
      }, 2000);
    }, [])
  );

  useEffect(() => {
    setCartItems(cartProducts);
    calculateTotal()
  }, [cartItems])

  useFocusEffect(
    React.useCallback(() => {
      setCartItems(cartProducts);
      calculateTotal()
    }, [cartItems])
  );

  const calculateTotal = () => {
    const totalPrice = cartItems.reduce((accumulator, product) => {
      return accumulator + product.price * product.selectedQuantity;
    }, 0);
  
    setTotal(totalPrice)
  };  

  // Función para actualizar la cantidad seleccionada de un producto
  const updateQuantity = (product, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, selectedQuantity: newQuantity } : item
    );
    //setCartItems(updatedCart);
    //console.log(product.quantity)
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", height: 100, justifyContent: "space-between", alignItems: "center", marginBottom: 15, backgroundColor: Colors.WHITE.tercero, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, borderRadius: 0.5, paddingHorizontal: 15, }}>
        <Text>SubTotal:</Text>
        <Text style={{ fontWeight: "600", fontSize: 18 }}>${parseFloat(total).toFixed(2)}</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.BLUE.tercero} style={styles.loadingIndicator} />
      ) : (
        <View>
          {!cartItems ? (
            <View style={{ alignItems: 'center', marginVertical: 50 }}>
              <MaterialIcons name='shopping-cart' size={80} color={Colors.BLUE.segundo} />
              <Text style={{ fontSize: 18, fontWeight: '400', marginTop: 15 }}>No tienes productos en el carrito</Text>
            </View>
          ) : (
            <ScrollView contentContainerStyle={styles.contenido}>
              {cartItems.map((product, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.push("ProductDetail", { product: product })}
                  style={styles.card}
                >
                  <Image source={product.img} style={styles.image} resizeMode="cover" />
                  <Text style={{ padding: 5, top: 5, left: 5, position: "absolute", backgroundColor: Colors.general, borderRadius: 25 }}>{product.selectedQuantity}</Text>
                  <View style={styles.details}>
                    <Text style={styles.name}>{product.name}</Text>
                    {/*<Text style={[styles.description, { fontSize: 11, fontWeight: "300" }]}>{product.shortDescription}</Text>*/}
                    <Text style={[styles.description, { fontSize: 13, fontWeight: "400" }]}>Selected: {product.selectedQuantity}</Text>
                    <Text style={styles.price}>${product.price} (x{product.selectedQuantity}):   ${product.price*product.selectedQuantity}</Text>

                    {/*<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TouchableOpacity onPress={() => updateQuantity(product, product.selectedQuantity + 1)}>
                        <AntDesign name="pluscircle" size={20} color={Colors.BLUE.segundo} />
                      </TouchableOpacity>
                      <Text style={{ paddingHorizontal: 5 }}>{product.selectedQuantity}</Text>
                      <TouchableOpacity onPress={() => updateQuantity(product, product.selectedQuantity - 1)}>
                        <AntDesign name="minuscircle" size={20} color={Colors.BLUE.segundo} />
                      </TouchableOpacity>
                    </View>*/}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.general,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  contenido: {
    padding: 15,
    marginBottom: 50,
  },
  card: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    marginBottom: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.WHITE.cuatro,
  },
  image: {
    width: 100,
    height: '100%',
    backgroundColor: Colors.WHITE.segundo,
  },
  details: {
    width: '65%',
    paddingLeft: 15,
    paddingRight: 20,
    paddingVertical: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "400",
  },
  description: {
    marginVertical: 5,
    color: Colors.WHITE.noveno,
  },
  price: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.BLUE.sexto,
  },
  loadingIndicator: {
    marginTop: 50,
  },
});

export default Cart;