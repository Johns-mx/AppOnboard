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
			pagingEnabled={false}
			style={{
				marginVertical: 15,
			}}
		>
			{Products.map((item) => (
		  		<TouchableOpacity
					style={[
						styles.botonSlides,
						styles.sombra,
						{ width: 150, minWidth: 150, minHeight: 270, borderWidth: 0.5, borderRadius: 10, borderColor: Colors.WHITE.cuatro, backgroundColor: Colors.WHITE.primero }
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
		//backgroundColor: Colors.WHITE.segundo, 
		alignSelf: "center",
	},
	productContainer: {
		maxHeight: 310,
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