import { View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Ionicons, AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Colors from '../../../constants/Colors'


const Cards = [
    {
        id: 1,
        title: "MEMBRESIA",
        description: "STANDARD",
        price: 40
    },
    {
        id: 2,
        title: "MEMBRESIA",
        description: "PRO",
        price: 70
    },
    {
        id: 3,
        title: "MEMBRESIA",
        description: "ADVANCED",
        price: 100
    }
]


const RenderCards = () => {
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={Cards}
            stickyHeaderHiddenOnScroll={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View
                    style={{
                        backgroundColor: "#fff",
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                        height: 130,
                        marginHorizontal: 16,
                        marginVertical: 10,
                        borderRadius: 15, ...styles.shadow
                    }}
                >
                    <Text style={{ fontSize: 12, fontWeight: "700", color: Colors.WHITE.octavo, height: "20%" }}>{item.title}</Text>
                    <View style={{ height: "60%", justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 26, fontWeight: "700", color: Colors.WHITE.noveno, width: "70%" }}>{item.description}</Text>
                        <TouchableOpacity 
                            style={{ 
                                alignSelf: "center", 
                                justifyContent: "center",
                                width: "30%", 
                                height: 35, 
                                borderRadius: 6,
                                borderWidth: 2,
                                borderColor: Colors.BLUE.octavo,
                                backgroundColor: Colors.BLUE.primero
                            }}
                            onPress={() => {}}
                        >
                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 5}}>
                                <Text style={{ fontSize: 14, fontWeight: "700", color: Colors.WHITE.noveno, marginHorizontal: 10, }}>GET</Text>
                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={20}
                                    color={Colors.WHITE.noveno}
                                    style={{ }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: "700", fontStyle: "italic", color: Colors.WHITE.noveno, height: "20%", justifyContent: "center" }}>${item.price}</Text>
                </View>
            )}
        />
    )
}


const MembresiaScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.secondary} hidden={false} />

            <View style={{ marginVertical: 25, }}>
                <Text style={{ fontSize: 12, fontWeight: "700", color: Colors.WHITE.octavo, marginHorizontal: 16, marginBottom: 10, alignSelf: "flex-start" }}>CONFIGURACION</Text>
                <RenderCards />
            </View>

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
    },
    shadow: {
        shadowColor: Colors.terciary2,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        shadowColor: Colors.BLUE.octavo,
        elevation: 5
    }
})

export default MembresiaScreen