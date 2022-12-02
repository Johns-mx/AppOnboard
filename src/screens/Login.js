import { View, Text, StyleSheet, Button, TextInput, SafeAreaView, useWindowDimensions, StatusBar } from "react-native"
import React, { useRef, useState } from "react"

//componentes
import GradientButton from "../components/GradientButton"
import InputFieldGeneral from "../components/TextInputField"
import Background from "../components/Background"


const Login = ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    return (
        <Background>
            <StatusBar
                barStyle="light-content"
                //backgroundColor="#1b143c"
                translucent
            />

            <View style={{ alignItems: "center", width: width }}>
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 64,
                        fontWeight: "bold",
                        marginVertical: 25,
                    }}
                >
                    Login
                </Text>

                <View style={styles.contenido}>
                    <Text
                        style={{
                            paddingTop: 60,
                            fontSize: 27,
                            fontWeight: "bold",
                            color: "#5f0cd4",
                        }}
                    >
                        Welcome back
                    </Text>
                    <Text>Login y registro</Text>
                    <Button
                        title="LOGIN"
                        onPress={() => navigation.navigate("Dashboard")}
                    />
                </View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    boton: {
        bottom: 20,
    },
    contenido: {
        backgroundColor: "#fff",
        height: 700,
        width: "100%",
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingLeft: 10,
        alignItems: "center",
    },
})

export default Login
