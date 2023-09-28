import { StyleSheet, Button } from "react-native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import Splash from "../screens/Splash";
import Onboarding from "../components/Onboarding";
import Login from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import DetailsScreen from "../screens/DetailsScreen";
import MyTabs from "./BottomNavigation";
import MenuLogin from "./MenuLogin";
import UserSettings from "../screens/User/UserSettings";
import StackSettings from "./StackSettings";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

//otros
import Colors from "../constants/Colors";

//navegacion STACKS
const Stack = createNativeStackNavigator()

const MyStacks = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={MyTabs} />
            <Stack.Screen 
                name="Details" 
                component={DetailsScreen} 
                options={{
                    title: "",
                    headerShown: true,
                    headerTransparent: true,
                    //gestureEnabled: false
                }}
            />
            <Stack.Screen 
                name="UserSettings" 
                component={UserSettings} 
                options={{
                    //headerShown: true,
                    title: "",
                    headerTransparent: true,
                    headerShadowVisible: false,
                    headerTintColor: "#ffffff",
                    //headerSearchBarOptions: true,
                }}
            />
            <Stack.Screen 
                name="ProductDetail"
                component={ProductDetailScreen}
                options={{
                    title: "Product Details",
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 16
                    },
                    headerStyle: {
                        backgroundColor: Colors.secondary,
                    },
                    headerShadowVisible: true
                }}
            />
            <Stack.Screen 
                name="Checkout"
                component={CheckoutScreen}
                options={{
                    title: "Final step!",
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 16
                    },
                    headerStyle: {
                        backgroundColor: Colors.secondary,
                    },
                    headerShadowVisible: true
                }}
            />
            <Stack.Screen name="Settings" component={StackSettings} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default MyStacks
