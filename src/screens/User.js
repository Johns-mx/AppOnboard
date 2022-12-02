import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const User = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <View>
        <Text>User</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e9f1',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default User