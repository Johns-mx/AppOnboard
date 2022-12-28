import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity, useWindowDimensions, TextInput } from "react-native";
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { InputFieldGeneral, InputLogin } from "../components/TextInputField"
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"


const RegisterScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "#ffffff", height: height, alignContent: "center" }}>
                
                <View style={{ marginBottom: 40 }}>
                    <Text style={styles.txtHeader}>Welcome</Text>
                    <Text style={styles.txtSubheader}>Create your own account</Text>
                </View>

                <TextInput placeholder="Nombre completo" style={styles.txtInput} />

                <View style={{ marginBottom: 10, ...styles.inputContainer }}>
                    <FontAwesome name="user" size={20} color="grey" style={styles.iconStyle} />
                    <InputLogin placeholder="Username" />
                </View>

                <View style={{ marginBottom: 12, ...styles.inputContainer }}>
                    <FontAwesome5 name="user-circle" size={20} color="grey" style={styles.iconStyle} />
                    <InputLogin placeholder="Email" />
                </View>

                <View style={{ marginBottom: 12, ...styles.inputContainer }}>
                    <FontAwesome5 name="key" size={20} color="grey" style={styles.iconStyle} />
                    <InputLogin placeholder="Password" />
                </View>

                <View style={{ marginBottom: 12, ...styles.inputContainer }}>
                    <FontAwesome name="phone" size={25} color="grey" style={styles.iconStyle} />
                    <InputLogin placeholder="Telefono" />
                </View>

                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Dashboard")}
                    >
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>REGISTRARSE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        marginHorizontal: 10        
    },
    iconStyle: {
        paddingHorizontal: 10,
        alignSelf: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#5f0cd4",
        width: "50%",
        height: 48,
        justifyContent: "center",
        borderRadius: 25
    },
    txtHeader: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#5f0cd4",
        alignSelf: "center",
        marginTop: 30,
    },
    txtSubheader: {
        fontSize: 14,
        color: "#222222",
        alignSelf: "center",
        fontStyle: "italic"
    },
    txtInput: {
        backgroundColor: "#f2f2f2",
        height: 50, 
        width: "82%", 
        borderRadius: 50, 
        color: "#222222", 
        paddingHorizontal: 15, 
        paddingVertical: 1, 
        alignSelf: "center", 
        marginBottom: 12,
    }
})

export default RegisterScreen
