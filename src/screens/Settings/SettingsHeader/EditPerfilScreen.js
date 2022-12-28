import { View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native"
import React from "react"

// Imports
import Colors from "../../../constants/Colors"


const EditPerfilScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.secondary} hidden={false} />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text>Personalizar perfil</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.general
    }
})

export default EditPerfilScreen
