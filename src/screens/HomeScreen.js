import React from "react";
import { View, Text, Button, StyleSheet, StatusBar, useWindowDimensions, Alert, ScrollView, Image, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { qYPWLogin } from "../config/Queries";

//componentes
import GradientButton from "../components/GradientButton";
import RenderCategorias from "../components/RenderCategorias";
import RenderSlideHome from "../components/RenderSlideHome";
import { useState } from "react";
import Colors from "../constants/Colors";
//import { InputFieldGeneral } from "../components/TextInputField"


const HomeScreen = ({ navigation }) => {
    const [username, setUsername] = useState(String);
    const [password, setPassword] = useState(String);
    
    const renderHeader = () => {
        return (
            <View style={{ backgroundColor: Colors.secondary, flexDirection: "row", height: 38, top: 15, marginBottom: 10, alignSelf: "center"}}>
                <TouchableOpacity
                    style={{ 
                        //width: 50,
                        marginHorizontal: 15,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.push("UserSettings")}
                >
                    {/*<FontAwesome5 name="bell" size={25} color="grey" />*/}
                    <Image source={require("../assets/ic_launcher.png")} style={{ height: 35, width: 35, borderRadius: 17.5, borderWidth: 2, borderColor: Colors.BLUE.septimo, }} />
                </TouchableOpacity>
                <View
                    style={{
                        width: "70%",
                        height: "100%",
                        //backgroundColor: "#f3f3f9",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 25,
                    }}
                >
                    <Text style={{ fontWeight: "800", fontSize: 16 }}>LOGO</Text>
                </View>
                <TouchableOpacity
                    style={{
                        //width: 50,
                        marginHorizontal: 15,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.push("Details")}
                >
                    <Ionicons name="settings-outline" size={27} color="grey" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.secondary} hidden={false} />

            <SafeAreaView style={{ backgroundColor: "#fafaff", ...styles.shadow }}>
                <View style={{ marginTop: 25, marginBottom: 15 }}>
                    {renderHeader()}
                </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <View style={{ marginTop: 15, marginBottom: 10, marginLeft: 20,}}>
                        <Text style={{fontSize: 30, fontWeight: "700",}}>Let's Started!</Text>
                    </View>

                    <View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 15, flexDirection: "row" }}>
                        <View style={ styles.searchContainer}>
                            <FontAwesome5 name="search" size={18} color="gray" style={{ marginHorizontal: 20 }} />
                            <TextInput placeholder="Search..." style={styles.input}/>
                        </View>
                    </View>

                    <View style={{ alignSelf: "center" }}></View>

                    <RenderCategorias style={styles.slideCategory} />
                    <RenderSlideHome />
                    <RenderSlideHome />
                    <RenderSlideHome />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.general,
    },
    content: {
        marginBottom: 15,
        marginTop: 15,
    },
    header: {
        flexDirection: "row", 
        height: 38, 
        top: 20, 
        marginBottom: 10, 
        alignSelf: "center",
    },
    slideCategory: {
        width: "100%",
    },
    searchContainer: {
        height: 40,
        width: "80%",
        backgroundColor: Colors.BLUE.septimo2,
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        fontSize: 14,
        fontWeight: "400",
        color: Colors.WHITE.decimo,
        flex: 1,
    },
    sortBtn: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: Colors.BLUE.decimo,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
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
})

export default HomeScreen
