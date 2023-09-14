import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity, useWindowDimensions, TextInput } from "react-native";
import React, { useState } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { InputFieldGeneral, InputLogin } from "../components/TextInputField"
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"
import Colors from "../constants/Colors";


const RegisterScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    const [nombre, setNombre] = useState(String);
    const [username, setUsername] = useState(String);
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const [telefono, setTelefono] = useState(String);

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "#ffffff", height: height, alignContent: "center" }}>
                
                <View style={{ marginBottom: 40 }}>
                    <Text style={styles.txtHeader}>Welcome</Text>
                    <Text style={styles.txtSubheader}>Create your own account</Text>
                </View>

                {/* NOMBRE COMPLETO */}
                <View 
                    style={{ 
                        marginHorizontal: 16,
                        flexDirection: "row", 
                        alignSelf: "center",
                    }}
                >
                    <FontAwesome5 name="user" size={20} color="grey" style={styles.iconStyle} />
                    <TextInput
                        style={{
                            marginVertical: 5,
                            borderRadius: 10, 
                            paddingLeft: 20, 
                            width: "80%", 
                            height: 40, 
                            backgroundColor: Colors.primary 
                        }} 
                        placeholder='Nombre completo'
                        value={nombre}
                        keyboardType="default"
                        onChangeText={nombre => setNombre(nombre)}
                    />
                </View>

                {/* USERNAME */}
                <View 
                    style={{ 
                        marginHorizontal: 16,
                        flexDirection: "row", 
                        alignSelf: "center",
                    }}
                >
                    <FontAwesome5 name="user-circle" size={20} color="grey" style={styles.iconStyle} />
                    <TextInput
                        style={{
                            marginVertical: 5,
                            borderRadius: 10, 
                            paddingLeft: 20, 
                            width: "80%", 
                            height: 40, 
                            backgroundColor: Colors.primary 
                        }} 
                        placeholder='Username'
                        value={username}
                        keyboardType="default"
                        onChangeText={username => setUsername(username)}
                    />
                </View>

                {/* EMAIL */}
                <View 
                    style={{ 
                        marginHorizontal: 16,
                        flexDirection: "row", 
                        alignSelf: "center",
                    }}
                >
                    <FontAwesome5 name="user" size={20} color="grey" style={styles.iconStyle} />
                    <TextInput
                        style={{
                            marginVertical: 5,
                            borderRadius: 10, 
                            paddingLeft: 20, 
                            width: "80%", 
                            height: 40, 
                            backgroundColor: Colors.primary 
                        }} 
                        placeholder='Correo electronico'
                        value={email}
                        keyboardType="default"
                        onChangeText={email => setEmail(email)}
                    />
                </View>

                {/* PASSWORD */}
                <View 
                    style={{ 
                        marginHorizontal: 16,
                        flexDirection: "row", 
                        alignSelf: "center",
                    }}
                >
                    <FontAwesome5 name="key" size={20} color="grey" style={styles.iconStyle} />
                    <TextInput
                        style={{
                            marginVertical: 5,
                            borderRadius: 10, 
                            paddingLeft: 20, 
                            width: "80%", 
                            height: 40, 
                            backgroundColor: Colors.primary 
                        }} 
                        placeholder='Contraseña'
                        value={password}
                        keyboardType="default"
                        onChangeText={password => setPassword(password)}
                    />
                </View>

                {/* TELEFONO */}
                <View 
                    style={{ 
                        marginHorizontal: 16,
                        flexDirection: "row", 
                        alignSelf: "center",
                    }}
                >
                    <FontAwesome5 name="phone" size={20} color="grey" style={styles.iconStyle} />
                    <TextInput
                        style={{
                            marginVertical: 5, 
                            borderRadius: 10, 
                            paddingLeft: 20, 
                            width: "80%", 
                            height: 40, 
                            backgroundColor: Colors.primary 
                        }} 
                        placeholder='Telefono'
                        value={telefono}
                        keyboardType="default"
                        onChangeText={telefono => setTelefono(telefono)}
                    />
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
        paddingHorizontal: 5,
        alignSelf: "center",
        width: "15%"
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
