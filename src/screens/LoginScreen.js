import { View, Text, Button } from "react-native"
import React from "react"

const LoginScreen = ({ navigation }) => {
    return (
        <View>
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
            <Button
                title="LOGIN"
                onPress={() => navigation.navigate("Dashboard")}
            />
        </View>
    )
}

export default LoginScreen
