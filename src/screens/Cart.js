import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import { Products } from '../components/RenderProducts';


const Cart = () => {

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


export default Cart