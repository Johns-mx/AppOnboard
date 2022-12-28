import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

//iconos
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-dynamic-vector-icons';


export const InputFieldGeneral = props => {
  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.inputStyle}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor="#c0c0c0"
        />
        <Icon 
            name={props.iconName}
            type={props.iconType}
            size={20}
            color="#fff"
            style={styles.icon}
        />
    </View>
  )
}


export const InputLogin = props => {
    return (
        <View style={styles.container2}>
            <TextInput
                style={styles.inputStyle2}
                placeholder={props.placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20, 
        borderWidth: 0.5,
        marginTop: 5,
        marginBottom: 25,
        paddingLeft: 20,
        width: "90%",
    },
    container2: {
        width: "95%",
        //alignItems: "center"
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 16,
    },
    inputStyle: {
        height: 40, 
        width: "88%",
        alignSelf: "center",
        paddingRight: 15,
    },
    icon: {
        paddingLeft: 20, 
        backgroundColor: "#8B63FF",
        padding: 9,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    inputStyle2: {
        color: "#222222", 
        borderRadius: 50, 
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        width: "90%", 
        backgroundColor: "#f2f2f2", 
        height: 50,
    },
});
