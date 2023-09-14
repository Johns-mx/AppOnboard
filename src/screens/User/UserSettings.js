import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Image, TextInput, SafeAreaView, TouchableOpacity, StatusBar, Button, Animated, Alert, FlatList } from "react-native";
import { MaterialCommunityIcons, Ionicons, AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg"

// >> Imports locales
import { WIDTH_WINDOW, HEIGHT_WINDOW } from "../../constants/Utils";
import RenderSettingsB, { RenderSettingsFlat } from "../../components/RenderSettings";
import { dataLogout, APIError, getItemData } from "../../config/Apis/MethodsApi";
import ListOptions from "../../constants/ListOptions";
import Colors from "../../constants/Colors";


const UserSettings = ({ navigation, route }) => {

    // DATOS NECESARIOS PARA REALIZAR EL LOGOUT
    const [keyUser, setKeyUser] = useState(String);
    const [appConnect, setAppConnect] = useState(String);

    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [scrollPosition, setScrollPosition] = useState(0);
    const [middleHeight, setMiddleHeight] = useState(0);
    const scrollViewRef = useRef(null);

    //Funcion para LOGIN
    async function qYPWLogout(keyUser, appConnect) {
        const axios = require('axios').default;

        const config = {
            method: 'POST',
            url: "https://account.ypw.com.do/api/v1/account/logout", 
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                keyUser: keyUser,
                appConnect: appConnect,
            }
        };
        
        try {
            const response = await axios(config)
    
            if (response.status === 200) {
                //const keyUser = response.data.res;
                navigation.replace("Login");
            }
    
        } catch (error) {
            await APIError(error);
        }
    };


    useEffect(() => {
        // Codigo que se ejecuta solo cuando entre a la screen (si no tiene los corchete)
        fadeIn();
    }, [])
    
    const fadeIn = () => {
        // Will change fadeAnim value in -3 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value in -3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 150,
            useNativeDriver: false
        }).start();
    };

    function handleOnScroll(event) {
        const { x, y } = event.nativeEvent.contentOffset;
        setScrollPosition(y);
        // Get size of ScrollView
        const {width, height} = event.nativeEvent.contentSize;
        /*if (y < height * 0.2) {
        }*/
        setMiddleHeight(height * 0.04);
    }
    
    async function handleBtnLogout() {
        const keyUser = await getItemData("keyUser");
        await qYPWLogout(keyUser, "AppOnboard");
        //console.log("Ha salido de la sesion.", keyUser);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.secondary} hidden={false} />

            <SafeAreaView>
                <View style={styles.upperHeaderPlaceholder} />
            </SafeAreaView>

            <SafeAreaView style={styles.headerMomo}>
                <View style={styles.upperHeader}>
                    <View style={{ flexDirection: "row",justifyContent: "space-between", width: "100%", top: 42, }}>
                        <View style={{ width: "15%", justifyContent: "center", }}>
                            <Ionicons
                                name="arrow-back-outline"
                                size={27}
                                color={Colors.WHITE.decimo}
                                style={styles.backBtn}
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                        <View style={{ width: "70%" }}>
                            <Text 
                                style={{
                                    textAlign: "right", 
                                    fontWeight: "600", 
                                    color: Colors.WHITE.decimo,
                                }}>Johanel Perez Sanchez</Text>
                            <Text 
                                style={{
                                    textAlign: "right", 
                                    fontWeight: "300", 
                                    color: Colors.WHITE.decimo,
                                    fontSize: 12,
                                }}>johanfsk144@gmail.com</Text>
                        </View>
                        <View style={{ width: "15%", alignItems: "flex-end", justifyContent: "center" }}>
                            <Image
                                source={require("../../assets/ic_launcher.png")}
                                style={styles.img}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.lowerHeader}></View>
            </SafeAreaView>

            <ScrollView
                ref={scrollViewRef}
                onScroll={handleOnScroll}
                //bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={[styles.paddingForHeader, styles.shadow]}>
                    <Animated.View style={{ opacity: fadeAnim }}>
                        <View>
                            <TouchableOpacity 
                                style={{ 
                                    justifyContent: "center", alignItems: "center",
                                    alignSelf: "center", width: "91%", height: 35, 
                                    borderRadius: 6, 
                                    //borderWidth: 1, 
                                    //borderStyle: "solid",
                                    //borderColor: Colors.WHITE.octavo, 
                                    backgroundColor: Colors.BLUE.octavo,
                                }}
                                onPress={() => navigation.push("Settings", {screen: "EditPerfil"})}
                            >
                                <Text style={{ fontSize: 14, fontWeight: "500", color: Colors.WHITE.primero }}>Editar perfil</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerHeaderItems}>
                            <TouchableOpacity
                                style={styles.featuresUserBtn}
                                onPress={() => navigation.push("Settings", {screen: "EditPerfil"})}
                            >
                                <MaterialCommunityIcons name="account-edit-outline" size={28} color={Colors.WHITE.onceavo} />
                                <Text style={styles.featuresUserText}>Personalizar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.featuresUserBtn}
                                onPress={() => navigation.push("Settings", {screen: "Membresia"})}
                            >
                                <MaterialCommunityIcons name="progress-star" size={25} color={Colors.WHITE.onceavo} />
                                <Text style={styles.featuresUserText}>Membresia</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.featuresUserBtn}
                                onPress={() => navigation.push("Settings", {screen: "Notifications"})}
                            >
                                <MaterialCommunityIcons name="bell-check-outline" size={25} color={Colors.WHITE.onceavo} />
                                <Text style={styles.featuresUserText}>Notificacion</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </View>
                <View style={styles.scrollViewContent}>
                    <Text style={{ fontSize: 12, fontWeight: "700", color: Colors.BLUE.octavo, marginHorizontal: 16, marginTop: 35, marginBottom: 10, alignSelf: "flex-start" }}>CONFIGURACION</Text>

                    {/* Aqui va todo el codigo siguiente */}
                    <View>
                        {ListOptions.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    backgroundColor: Colors.general,
                                    paddingHorizontal: 16,
                                    height: 60,
                                    marginVertical: 5,
                                    justifyContent: "center",
                                }}
                                onPress={() => navigation.push("Settings", {screen: item.screenName})}
                            >
                                <View style={{ flexDirection: "row", alignItems: "center",}}>
                                    <View style={{ width: "12%" }}>{item.icon}</View>
                                    <View style={{ width: "83%" }}>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: "400",
                                                paddingBottom: 1
                                            }}
                                        >{item.title}</Text>
                                        <Text style={{ fontSize: 11, fontWeight: "700", color: Colors.BLUE.tercero, marginBottom: 5, }}>{item.data}</Text>
                                    </View>
                                    <Ionicons
                                        name="chevron-forward-outline"
                                        size={20}
                                        color={Colors.WHITE.cuatro}
                                        style={{ width: "5%", textAlign: "right" }}
                                    />
                                </View>
                            </TouchableOpacity>
                        ))}
                        <View style={{ height: 70 }} />
                        <View>
                            <TouchableOpacity 
                                style={{ 
                                    justifyContent: "center", alignSelf: "center", width: "91%", height: 35, borderRadius: 6, backgroundColor: Colors.WHITE.octavo
                                }}
                                onPress={() => handleBtnLogout()}
                            >
                                <View style={{flexDirection: "row", alignItems: "center"}}>
                                    <FontAwesome
                                        name="sign-out"
                                        size={20}
                                        color={Colors.WHITE.primero}
                                        style={{ marginLeft: 35, marginRight: 15 }}
                                    />
                                    <Text style={{ fontSize: 14, fontWeight: "500", color: Colors.WHITE.primero }}>SALIR</Text>
                                </View>
                            </TouchableOpacity>

                            <Text style={{textAlign: "center", fontSize: 11, marginVertical: 15,}}>AppOnboard v1.0.1 @ JohnsMX</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {scrollPosition < middleHeight ? fadeIn() : fadeOut()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperHeaderPlaceholder: {
        height: 100,
    },
    headerMomo: {
        position: "absolute",
        width: "100%",
        backgroundColor: Colors.secondary,
    },
    upperHeader: {
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    lowerHeader: {
        height: 156,
    },
    paddingForHeader: {
        height: 106,
        backgroundColor: Colors.secondary,
    },
    scrollViewContent: {
        //height: HEIGHT_WINDOW * 2,
        backgroundColor: Colors.general,
    },
    containerHeaderItems: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 0,
        paddingTop: 20,
    },
    img: {
        //top: 40,
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2,
        //marginLeft: 25,
        borderColor: Colors.WHITE.cuatro,
    },
    header: {
        paddingHorizontal: 0,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    backBtn: {
        //top: 42,
    },
    shadow: {
        shadowColor: Colors.terciary2,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    featuresUserBtn: {
        justifyContent: "center",
        paddingHorizontal: 0,
        alignItems: "center",
    },
    featuresUserText: {
        fontWeight: "300",
        fontSize: 11,
    },
    containerSettings: {
        paddingHorizontal: 16,
    }

})

export default UserSettings
