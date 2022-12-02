import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const Cart = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.contenido}>
        <Text>Carrito</Text>
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e9f1',
  },
  contenido: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});


export default Cart