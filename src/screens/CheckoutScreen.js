import { StyleSheet, Text, View, SafeAreaProvider } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'


const CheckoutScreen = ({ navigation, route }) => {
  const { product } = route.params; // Obtiene el producto de la ruta

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.contenido}>
        <Text>Hola este es el cart</Text>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.WHITE.segundo,
    },
    contenido: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
});
  

export default CheckoutScreen