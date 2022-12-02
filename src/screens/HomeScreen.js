import React from "react";
import { View, Text, Button, StyleSheet, StatusBar, useWindowDimensions, Alert, ScrollView, Image, TextInput, SafeAreaView } from "react-native";
import { MaterialCommunityIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import Icon from "react-native-dynamic-vector-icons";

//componentes
import GradientButton from "../components/GradientButton";
import RenderCategorias from "../components/RenderCategorias";
import RenderSlideHome from "../components/RenderSlideHome";
//import { InputFieldGeneral } from "../components/TextInputField"


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            </View>

            <View style={styles.contenido}>
                <View style={{ alignSelf: "center" }}></View>

                <RenderCategorias style={styles.slideCategory} />
                <RenderSlideHome />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    contenido: {
        padding: 10,
        //marginVertical: 10,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    header: {
        backgroundColor: "#ffffff",
        height: 70,
        position: "static",
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    slideCategory: {
        width: "100%",
    },
})

export default HomeScreen
