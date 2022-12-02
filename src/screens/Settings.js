import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const Settings = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.contenido}>
        <Text>Settings</Text>
        <Button 
          title="Go to Home" 
          onPress={() => navigation.navigate('HomeScreen')} 
        />
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
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});


export default Settings