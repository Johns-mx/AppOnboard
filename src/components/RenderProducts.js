import { StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView, Text, Image, View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';


import { Products } from '../constants/Products';


const RenderProducts = ({ navigation }) => {
	const { width } = useWindowDimensions();


	const quantityExisted = (item) => {
		if (item.quantity <= 0) {
			return <Text style={{ color: "#b81d24", backgroundColor: "#ffe4ea", padding: 2, margin: 3, textAlign: "center", borderRadius: 6, fontSize: 12 }}>Agotado</Text>
		}
	}
	
	return (
	  	<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			//snapToInterval={width * 0.7}
			pagingEnabled={false}
			style={{
				marginTop: 15,
				marginBottom: 25,
				//paddingHorizontal: 10 
			}}
		>
			{Products.map((item) => (
		  		<TouchableOpacity
					style={[
						styles.botonSlides,
						styles.sombra,
						{ width: 150, height: 270, borderWidth: 0.5, borderRadius: 10, borderColor: Colors.WHITE.cuatro }
					]}
					key={item.id}
					onPress={() => navigation.push("ProductDetail", { product: item })}
		  		>
					<View style={[styles.productContainer, styles.sombra]}>
						<Image source={item.img} style={styles.imgSlides} />
						<View style={styles.productInfo}>
							<Text style={styles.productName}>{item.name}</Text>
							<Text style={styles.productPrice}>${item.price}</Text>
							{quantityExisted(item)}
						</View>
					</View>
		  		</TouchableOpacity>
			))}
	  	</ScrollView>
	);
};
  
const styles = StyleSheet.create({
	botonSlides: { // Estilos del TouchableOpacity
	  	marginHorizontal: 5,
		overflow: 'hidden',
		shadowColor: "#0d2750",
    	shadowOffset: {
            width: 0,
            height: 10,
        },
    	shadowOpacity: 0.25,
    	shadowRadius: 3.5,
	},
	sombra: {
        shadowColor: "#0d2750",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
	},
	imgSlides: { // Estilos del TouchableOpacity
		width: 150,
		height: '60%', // El 60% de la altura total
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		backgroundColor: Colors.WHITE.segundo
	},
	productContainer: {
		height: 270,
		backgroundColor: Colors.WHITE.primero,
		borderRadius: 10,
		overflow: 'hidden',
	},
	productInfo: {
		padding: 10,
	},
	productName: {
		fontSize: 14,
		paddingBottom: 8,
	},
	productPrice: {
		fontSize: 14,
		fontWeight: 'bold',
		color: Colors.BLUE.sexto,
		paddingBottom: 5
	},
});

export default RenderProducts;


/*
const RenderProducts = ({ navigation }) => {

	const renderItem = ({ item }) => (
	  <TouchableOpacity
		style={styles.botonSlides}
		onPress={() => navigation.push("ProductDetail", { product: item })}
	  >
		<View style={styles.productContainer}>
		  <Image source={item.img} style={styles.imgSlides} />
		  <View style={styles.productInfo}>
			<Text style={styles.productName}>{item.name}</Text>
			<Text style={styles.productPrice}>${item.price}</Text>
		  </View>
		</View>
	  </TouchableOpacity>
	);
  
	return (
	  <FlatList
		data={Products}
		renderItem={renderItem}
		keyExtractor={(item) => item.id.toString()}
		numColumns={2} // Renderizar en dos columnas
		columnWrapperStyle={styles.columnWrapper} // Espacio entre columnas
	  />
	);
};
  
const styles = StyleSheet.create({
	botonSlides: {
	  flex: 1, // Para que cada elemento ocupe la mitad del ancho
	  marginVertical: 10,
	  overflow: 'hidden',
	  shadowColor: "#0d2750",
	  shadowOffset: {
		width: 0,
		height: 10,
	  },
	  shadowOpacity: 0.25,
	  shadowRadius: 3.5,
	},
	columnWrapper: {
	  justifyContent: 'space-between', // Espacio entre las dos columnas
	},
	imgSlides: {
	  width: '100%', // Ancho completo de la columna
	  height: 150, // Altura fija o ajusta según tus necesidades
	  borderTopLeftRadius: 10,
	  borderTopRightRadius: 10,
	},
	productContainer: {
	  backgroundColor: Colors.WHITE.primero,
	  borderRadius: 10,
	  overflow: 'hidden',
	  marginHorizontal: 15,
	},
	productInfo: {
	  padding: 10,
	},
	productName: {
	  fontSize: 14,
	  paddingBottom: 5,
	},
	productPrice: {
	  fontSize: 14,
	  fontWeight: 'bold',
	  color: Colors.BLUE.sexto,
	},
});
  
export default RenderProducts;*/