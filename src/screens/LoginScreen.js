import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity, useWindowDimensions, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { InputFieldGeneral, InputLogin } from "../components/TextInputField";
import { FontAwesome5 } from '@expo/vector-icons';
import { qGetSections, qYPWSections } from "../config/Queries";
import Colors from "../constants/Colors";


const LoginScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    const [username, setUsername] = useState(String);
    const [password, setPassword] = useState(String);

    const handleLogin = () => {
        qYPWSections(username, password);
    }

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "#ffffff", height: height }}>

                <View style={{ marginBottom: 40 }}>
                    <Text style={styles.txtHeader}>Welcome Back</Text>
                    <Text style={styles.txtSubheader}>Sign In to your account</Text>
                </View>

                <View style={{ alignContent: "center" }}>
                    <View style={{ 
                        marginBottom: 10,
                        flexDirection: "row", 
                        width: "90%", 
                        alignSelf: "center",
                    }}>
                        <FontAwesome5 name="user-circle" size={20} color="grey" style={styles.iconStyle} />
                        <TextInput
                            style={{marginVertical: 10, borderRadius: 20, paddingLeft: 20, width: "70%", height: 40, backgroundColor: Colors.primary }}
                            placeholder="Email, username" 
                            value={username} 
                            keyboardType="default" 
                            onChangeText={username => setUsername(username)}
                        />
                    </View>

                    <View style={{ 
                        marginBottom: 10,
                        flexDirection: "row", 
                        width: "90%", 
                        alignSelf: "center",
                    }}>
                        <FontAwesome5 name="key" size={20} color="grey" style={styles.iconStyle} />
                        <TextInput
                            style={{marginVertical: 10, borderRadius: 20, paddingLeft: 20, width: "70%", height: 40, backgroundColor: Colors.primary }} 
                            placeholder='Password'
                            value={password}
                            keyboardType="default"
                            onChangeText={password => setPassword(password)}
                        />
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("Dashboard")}
                        >
                            <Text style={{ color: "#fff", fontWeight: "bold", }}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    iconStyle: {
        paddingHorizontal: 10,
        alignSelf: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#5f0cd4",
        width: "85%",
        height: 48,
        justifyContent: "center",
        borderRadius: 25,
        marginTop: 20
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
    }
})

export default LoginScreen
