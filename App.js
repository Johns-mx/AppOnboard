import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

//screens
import Onboarding from './src/components/Onboarding';
import MyStacks from './src/stacks/StackNavigation';


//aqui se inicializan todas los componentes
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        translucent
      />
      <NavigationContainer>
        <MyStacks />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridSystem: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  footer: {
    fontWeight: "normal",
    marginBottom: 7,
    fontStyle: "italic",
    color: "#211647",
  },
});
