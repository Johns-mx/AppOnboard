import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Button, Dimensions, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import { MaterialCommunityIcons, Ionicons, AntDesign, FontAwesome5, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { FloatingAction } from 'react-native-floating-action';
import { cartProducts } from '../constants/CartProducts';


const { width } = Dimensions.get('window');


const ProductDetailScreen = ({ navigation, route }) => {
    const { product } = route.params; // Obtiene el producto de la ruta

    const [quantityCart, setQuantity] = useState(0);
    const [fav, setFav] = useState(false);
    const [activeDescriptionAdd, setactiveAdd] = useState(false);
    const [cartItems, setCartItems] = useState(cartProducts)

    const handleIncrement = () => {
        if (quantityCart < product.quantity) {
            setQuantity(quantityCart + 1);
        }
    };

    const handleDecrement = () => {
        if (quantityCart > 0) {
            setQuantity(quantityCart - 1);
        }
    };

    const addToCart = () => {
        if (!activeDescriptionAdd) { // Optional...
            // Verificar si el producto ya está en el carrito.
            //const isProductInCart = cartProducts.some((item) => item.id === product.id);
            const productIndex = cartProducts.findIndex((item) => item.id === product.id);

            if (productIndex !== -1) {
                // Si el producto ya está en el carrito, actualiza la cantidad seleccionada
                //const updatedCartProducts = [...cartProducts];
                //cartProducts[productIndex].selectedQuantity + quantityCart <= product.quantity;
                //console.log(cartProducts[productIndex])
                cartProducts[productIndex].selectedQuantity = quantityCart;
                console.log(cartProducts[productIndex].selectedQuantity, "Producto actualizado en el carrito!");

                //cartProducts.push(updatedCartProducts)
                //if (isProductInCart) {
                //product.selectedQuantity= quantityCart;
                //const updatedCart = cartProducts.map((item) =>
                    //item.id === product.id ? { ...item, selectedQuantity: quantityCart } : item
                //);
                //cartProducts[product.id].selectedQuantity = quantityCart;
            } else {
                // Si el producto no está en el carrito, agrégalo con la cantidad seleccionada
                const selectedProduct = { ...product, selectedQuantity: quantityCart };
                cartProducts.push(selectedProduct)
                console.log("Producto agregado!");
            }
        }
        setTimeout(() => {
            setactiveAdd(activeDescriptionAdd);
        }, 1000);
        setQuantity(0);
        setactiveAdd(!activeDescriptionAdd);
    };

    const handleBtnFavorite = () => {
        if (fav) { // Optional...
            console.log("Se quito de tu lista de favoritos.");
        } else {
            console.log("Se agrego a tu lista de favoritos.");
        }
        setFav(!fav);
    }

    // Crea un array de íconos de estrellas basado en la cantidad de estrellas
    const RenderStars = () => {
        const starIcons = [];
        for (let i = 0; i < product.stars; i++) {
          starIcons.push(
            <AntDesign key={i} name="star" size={12} color={Colors.BLUE.tercero} style={{ marginBottom: 8 }} />
          );
        }
        return (
            <View style={{ flexDirection: 'row' }}>
                {starIcons}
                <Text style={{ fontSize: 11, color: Colors.WHITE.noveno, marginLeft: 5, }}>({product.stars})</Text>
            </View>
        );
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.secondary} hidden={false} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={{ backgroundColor: Colors.WHITE.segundo }}>

                    {/*<Image source={product.img} style={styles.productImage} />*/}
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <View style={styles.sliderContainer}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={true}
                                pagingEnabled={true}
                            >
                                {product.imgSlides.map((item, index) => (
                                    <Image
                                        key={index}
                                        source={item}
                                        style={styles.imgSlides}
                                    />
                                ))}
                            </ScrollView>

                            <View style={styles.iconsColumn}>
                                <TouchableOpacity style={styles.buttonSpecials} activeOpacity={0.5}>
                                    <FontAwesome5 name="share" size={15} color={Colors.WHITE.noveno} />
                                </TouchableOpacity>
                                
                                {/*<TouchableOpacity style={styles.buttonSpecials}>
                                    <FontAwesome5 name="heart" size={14} color={Colors.WHITE.primero} />
                                </TouchableOpacity>*/}
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", marginTop: 0, marginBottom: 15, padding: 10 }}>
                        {product.attributes ? (
                            product.attributes.map((item, index) => (
                                <View key={index} style={{ margin: 5, padding: 13, backgroundColor: Colors.general, borderRadius: 13 }}>
                                    {item ? (
                                        <FontAwesome5 name={`${item}`} size={28} color={Colors.BLUE.doceavo} />
                                    ) : (
                                        <FontAwesome5 name="question" size={20} color={Colors.BLUE.doceavo} />
                                    )}
                                </View>
                            ))
                        ) : (
                            <View>
                                <Text style={{ marginTop: 10, color: Colors.BLUE.sexto, fontWeight: "400", fontSize: 13 }}>*Este producto no tiene iconos de categorias*</Text>
                            </View>
                        )}
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <View style={styles.productInfo}>

                        <View style={styles.nameColumn}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={{ fontSize: 11, color: Colors.WHITE.septimo }}>Brand: {product.brand}</Text>
                        </View>

                        <View>
                            {RenderStars()}
                            <Text style={{ alignSelf: "flex-end", fontSize: 14, color: Colors.WHITE.noveno, fontWeight: "400", }}>Quantity: {product.quantity}</Text>
                        </View>

                        {/*
                        <View style={styles.iconsColumn}>
                        <TouchableOpacity style={styles.buttonSpecials}>
                        <FontAwesome5 name="share" size={14} color={Colors.WHITE.primero} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.buttonSpecials}>
                        <FontAwesome5 name="heart" size={14} color={Colors.WHITE.primero} />
                        </TouchableOpacity>
                        <Text style={{ alignSelf: "flex-end", fontSize: 12, color: Colors.WHITE.decimo, fontWeight: "300", marginTop: 15 }}>Disponible(s): {product.quantity}</Text>
                    </View>*/}
                    </View>


                    <View style={{ justifyContent: "space-between", flexDirection: "row",  marginBottom: 30, marginVertical: 25 }}>
                        <Text style={styles.productPrice}>${product.price}</Text>
                        
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={handleDecrement} activeOpacity={0.4} style={{ borderRadius: 15, backgroundColor: Colors.WHITE.noveno, padding: 5 }}>
                                <AntDesign name="minus" size={14} color={Colors.WHITE.primero} />
                            </TouchableOpacity>
                            
                            <Text style={styles.quantityValue}>{quantityCart}</Text>

                            <TouchableOpacity onPress={handleIncrement} activeOpacity={0.4} style={{ borderRadius: 15, backgroundColor: Colors.WHITE.noveno, padding: 5, }}>
                                <AntDesign name="plus" size={14} color={Colors.WHITE.primero} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*<FloatingAction
                        style={styles.buttonCart}
                        onPressItem={(name) => {
                            // Manejar la acción del botón aquí
                            console.log(`Botón presionado: ${name}`);
                        }}
                    />*/}
                    
                    {product.variety ? (
                        <View>
                            <Text style={{ fontWeight: "500" }}>Colors</Text>
                            <View style={{ width: "70%", flexDirection: "row", alignItems: "center", marginVertical: 12 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    pagingEnabled={false}
                                >
                                    {product.variety.map((item, index) => (
                                        <TouchableOpacity key={index} style={{ backgroundColor: item.color, paddingVertical:5, marginHorizontal: 5, borderRadius: 25, width: 22, height: 22, }}></TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        </View>
                    ) : (
                        <Text style={{ fontWeight: "300", fontSize: 13 }}>*Este articulo no tiene variaciones por colores.*</Text>
                    )}

                    <Text style={{ fontSize: 17, fontWeight: "500", marginBottom: 12, marginTop: 20, borderColor: Colors.WHITE.quinto, borderTopWidth: 0.8, paddingTop: 8 }}>Description</Text>
                    <Text style={styles.productDescription}>{product.shortDescription}</Text>
                    <Text style={styles.productDescription}>{product.fullDescription}</Text>
                    
                    <View style={{ marginBottom: 100 }}></View>
                </View>
            </ScrollView>

            <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", gap: 5, position: "absolute", bottom: 0, width: width, paddingTop: 5, backgroundColor: Colors.general }}>
                {product.quantity > 0 ? (
                    <TouchableOpacity
                        style={{
                            width: "83%",
                            height: 40,
                            marginBottom: 10,
                            borderRadius: 10,
                            backgroundColor: quantityCart === 0 ? Colors.WHITE.cuatro : Colors.WHITE.noveno,
                            paddingHorizontal: 13,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: Colors.general,
                        }}
                        activeOpacity={0.6}
                        onPress={() => addToCart()}
                        disabled={quantityCart === 0}
                    >
                        {activeDescriptionAdd ? (
                            <View style={{ flexDirection: 'row', gap: 15 }}>
                                <MaterialIcons name="shopping-cart" size={24} color={Colors.general} />
                                <Text style={{ fontWeight: "500", color: Colors.general, fontSize: 16 }}>Producto agregado!</Text>
                            </View>
                        ) : (
                            <Text style={{ color: 'white', fontWeight: "600" }}>ADD TO CART   |   ${product.price*quantityCart} (x{quantityCart})</Text>
                        )}
                    </TouchableOpacity>
                ) : (
                    <Text style={{ color: "#b81d24", backgroundColor: "#ffe4ea", fontWeight: "600", width: "83%", height: 40, marginBottom: 10, borderRadius: 10, paddingHorizontal: 13, textAlign: "center", verticalAlign: "middle" }}>PRODUCTO AGOTADO</Text>
                )}

                <TouchableOpacity
                    style={{
                        width: "12%",
                        //height: 40,
                        marginBottom: 10,
                        borderRadius: 25,
                        backgroundColor: fav == false ? Colors.WHITE.noveno : Colors.BLUE.cuarto,
                        //paddingHorizontal: 13,
                        alignItems: 'center',
                        justifyContent: 'center',
                        //borderWidth: 3,
                        borderColor: Colors.general,
                    }}
                    onPress={() => handleBtnFavorite()}
                >
                    <AntDesign name="heart" size={18} color={Colors.WHITE.primero} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.general,
    },
    scrollView: {
        //flex: 1,
        backgroundColor: Colors.WHITE.segundo,
        //marginHorizontal: 15, // Margen horizontal de 15px en lugar de margen global
    },
    productContainer: {
        //alignItems: 'center',
        //marginHorizontal: 15,
        backgroundColor: Colors.general,
        paddingHorizontal: 20,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },
    productImage: {
        width: '100%',
        height: 300,
        resizeMode:"cover",
        borderRadius: 10,
        marginBottom: 5,
    },
    productInfo: {
        //borderColor: "black", borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: "space-between",
        marginTop: 40,
    },
    nameColumn: {
        flex: 0.75,
    },
    iconsColumn: {
        flexDirection: "column",
        flex: 0.25, // 25% de ancho
        //justifyContent: "flex-end",
        gap: 10,
        position: "absolute",
        alignSelf: "flex-end",
        top: 10,
        right: 10,
        borderColor: Colors.WHITE.cuatro,
        borderWidth: 0.5,
        borderRadius: 25,
        padding: 3,
        backgroundColor: Colors.secondary,
    },
    buttonSpecials: {
        alignItems: "center",
        padding: 8,
        borderRadius: 25,
        //backgroundColor: Colors.BLUE.tercero,
        backgroundColor: Colors.general,
    },
    productName: {
        fontSize: 20,
        fontWeight: "500",
        //marginTop: 30,
        //marginBottom: 5,
    },
    productDescription: {
        fontSize: 15,
        fontWeight: "300",
        marginTop: 10,
    },
    productPrice: {
        fontSize: 22,
        color: Colors.BLUE.sexto,
        fontWeight: "500",
        //borderBottomWidth: 3,
        //borderBottomColor: Colors.WHITE.tercero,
        //paddingBottom: 15,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        //marginTop: 20,
        padding: 4,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.WHITE.segundo,
    },
    quantityText: {
        fontSize: 18,
        marginRight: 10,
    },
    quantityButton: {
        fontSize: 24,
        paddingHorizontal: 10,
        marginVertical: 20,
        color: "white",
        borderRadius: 5,
        backgroundColor: Colors.terciary2,
    },
    quantityValue: {
        fontSize: 18,
        paddingHorizontal: 10,
    },
    sliderContainer: {
        width: '100%', // Ancho completo
        height: 400,
        //borderRadius: 10,
        overflow: 'hidden', // Oculta contenido que se desborda
    },
    imgSlides: {
        width: width,
        height: 400, // Altura fija o ajusta según tus necesidades
    },
    buttonCart: {
        position: 'absolute',
        bottom: 20, // Ajusta esta propiedad para controlar la distancia desde la parte inferior
        right: 20, // Ajusta esta propiedad para controlar la distancia desde la derecha
        backgroundColor: 'blue', // Color de fondo del botón
        borderRadius: 30, // Radio de borde para hacerlo redondeado
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});

export default ProductDetailScreen;