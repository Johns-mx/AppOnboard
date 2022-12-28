import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    SafeAreaView,
    useWindowDimensions,
    StatusBar,
    Image,
} from "react-native"
import React, { useRef, useState } from "react"

//componentes
import GradientButton from "../components/GradientButton";
import Colors from "../constants/Colors";
import InputFieldGeneral from "../components/TextInputField";
import MenuLogin from "../stacks/MenuLogin";


const Login = ({ navigation }) => {
    const { width, height } = useWindowDimensions()

    return (
        <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor={Colors.BLUE.doceavo} hidden={false} />

            <View style={styles.container}>
                <Image
                    source={require("../assets/icons/React.png")}
                    style={{ width: 90, height: 80, ...styles.logoHeader }}
                />

                <MenuLogin />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1b143c",
        height: "100%",
        width: "100%",
        //paddingTop: 40
        //alignItems: "center",
    },
    logoHeader: {
        alignSelf: "center",
        marginVertical: 40,
    },
})

export default Login
