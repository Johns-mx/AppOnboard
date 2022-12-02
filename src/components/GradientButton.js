import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const GradientButton = ({onPress, btnText}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <LinearGradient 
        colors={["#8B63FF", "#080187"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.button}
      >
        <View>
          <Text style={styles.texto}>{btnText}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    alignItems: "center",
  },
  texto: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    borderRadius: 25,
    height: 45,
    width: "37%",
    justifyContent: "center",
    alignItems: "center",
  },
})

export default GradientButton;