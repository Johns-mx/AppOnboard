import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
    FlatList,
    TouchableOpacity,
} from "react-native"
import React, { useEffect, useState, useRef } from "react"
import Colors from "../constants/Colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import ListOptions from "../constants/ListOptions"


const ItemSetting = ({ title }) => (
    <View style={styles.item}>
        <TouchableOpacity
            style={{
                //alignItems: "center",
                //alignSelf: "center",
                //width: "91%",
                height: 35,
                borderRadius: 6,
            }}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>
)

export const RenderSettings = () => {
    return (
        <SafeAreaView style={{ backgroundColor: Colors.general }}>
            <SectionList
                sections={ListOptions}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <ItemSetting title={item} />}
                renderSectionHeader={({ section: { icon, title } }) => (
                    <Text style={styles.header}>
                        {icon} {title}
                    </Text>
                )}
            />
        </SafeAreaView>
    )
}

export const RenderSettingsFlat = () => {
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={ListOptions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={{
                        backgroundColor: "#fff",
                        padding: 10,
                        marginVertical: 10,
                        borderRadius: 15,
                    }}
                    onPress={() => {}}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "normal",
                        }}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            )}
        />
    )
}


export const RenderSettingsB = () => {
  return (
    ListOptions.map((item, index) => (
        <TouchableOpacity
            key={index}
            style={{
                backgroundColor: "#fff",
                padding: 10,
                marginVertical: 10,
                borderRadius: 15,
            }}
            onPress={() => {}}
        >
            <View>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                    }}
                >
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
      ))
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 16,
        backgroundColor: Colors.general,
    },
    item: {
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 16,
        fontWeight: "500",
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginVertical: 5,
        //backgroundColor: Colors.WHITE.onceavo
    },
    title: {
        fontSize: 16,
    },
})
