import { View, Text, Button, ToastAndroid ,SafeAreaView, StyleSheet, TouchableOpacity, useWindowDimensions, TextInput, TouchableHighlight, Alert, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
//import CheckBox from '@expo';
import { FontAwesome5 } from '@expo/vector-icons';
import { qGetSections, qYPWSections } from "../config/Apis/Queries";
import axios from "axios"
import { APIError, dataLogin, getItemData} from "../config/Apis/MethodsApi";
import Colors from "../constants/Colors";
import { showMessage } from "react-native-flash-message";
import { useUser } from "../config/UserContext";


const LoginScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    // USO DE USERCONTEXT PARA ALMACENAR LOS DATOS DEL USUARIO.
    const { setUserData } = useUser();

    const [username, setUsername] = useState(String);
    const [password, setPassword] = useState(String);
    //const [isSelected, setSelection] = useState(false);

    //Funcion para LOGIN
    async function qYPWLogin(username, password, appConnect) {
        const axios = require('axios').default;
        
        const config = {
            method: 'POST',
            url: "https://account.ypw.com.do/api/v1/account/login", 
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: username,
                password: password,
                appConnect: appConnect
            }
        };
        
        try {
            const response = await axios(config)
    
            if (response.status === 200) {
                const keyUser= response.data.res.keyUser;
                const dataUser= await qYPWGetUser(keyUser)
                
                // Almacena los datos en el contexto
                setUserData(dataUser);
                await dataLogin(keyUser);

                navigation.replace("Dashboard");
            }
    
        } catch (error) {
            const err = await APIError(error);
            showToastAlert(err);
        }
    };

    async function qYPWGetUser(keyUser) {
        const axios = require('axios').default;
        
        const config = {
            method: 'POST',
            url: "https://account.ypw.com.do/api/v1/account/getUser", 
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                appConnect: "AppOnboard",
                keyUser: keyUser
            }
        };
        
        try {
            const response = await axios(config)
    
            if (response.status === 200) {
                const res = response.data.res;
                return res;
            }
    
        } catch (error) {
            const err = await APIError(error);
            showToastAlert(err);
        }
    };

    // Handle event from login button
    async function handleLogin() {
        await qYPWLogin(username, password, "AppOnboard");
    }

    function showToastAlert(message) {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: Colors.general, height: height, alignItems: "center", }}>

                <View style={{ marginBottom: 50 }}>
                    <Text style={styles.txtHeader}>Welcome Back</Text>
                    <Text style={styles.txtSubheader}>Sign In to your account</Text>
                </View>

                <View style={{ alignContent: "center", marginVertical: 20 }}>
                    <View style={{ 
                        marginHorizontal: 16,
                        flexDirection: "row", 
                        alignSelf: "center",
                    }}>
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
                            placeholder="Email, username" 
                            value={username} 
                            keyboardType="default" 
                            onChangeText={username => setUsername(username)}
                        />
                    </View>

                    <View style={{ 
                        marginHorizontal: 16,
                        flexDirection: "row", 
                        alignSelf: "center",
                    }}>
                        <FontAwesome5 name="key" size={20} color="grey" style={styles.iconStyle} />
                        <TextInput
                            style={{
                                marginVertical: 10, 
                                borderRadius: 10, 
                                paddingLeft: 20, 
                                width: "80%", 
                                height: 40, 
                                backgroundColor: Colors.primary 
                            }} 
                            placeholder='Password'
                            value={password}
                            keyboardType="default"
                            onChangeText={password => setPassword(password)}
                        />
                    </View>

                    <Text 
                        style={{
                            textAlign: "right", 
                            fontWeight: "300", 
                            color: Colors.WHITE.decimo,
                            fontSize: 12,
                            marginRight: 16,
                            textDecorationLine: "underline"
                        }}
                        onPress={() => {}}
                    >Has olvidado tu contraseña?</Text>

                    {/*<View style={{}}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={{ backgroundColor: "#fff", fontWeight: "300" }}
                            title="Recordar contraseña"
                        />
                        <Text style={{}}>Do you like React Native?</Text>
                    </View>
                    <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>*/}

                    <View style={{ alignItems: "center", marginTop: 50, }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => handleLogin()}
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
        paddingHorizontal: 5,
        alignSelf: "center",
        width: "15%"
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
