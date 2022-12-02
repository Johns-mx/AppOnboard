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

//navegacion STACKS
const Stack = createNativeStackNavigator()

const MyStacks = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={MenuLogin} />
            <Stack.Screen name="Dashboard" component={MyTabs} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

/*
options={{ headerShown: false }}
<Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default MyStacks
