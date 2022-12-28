import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useWindowDimensions } from "react-native"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"

const Tab = createMaterialTopTabNavigator()

const MenuLogin = () => {
    const { width, height } = useWindowDimensions();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { 
                    width: width, 
                    height: 50, 
                    alignSelf: "center",
                    justifyContent: "center",
                    marginTop: 20, 
                    borderTopLeftRadius: 25, 
                    borderTopRightRadius: 25,
                },
                tabBarLabelStyle: { 
                    fontSize: 14, 
                    fontWeight: "400" 
                },
                tabBarItemStyle: { 
                    borderTopLeftRadius: 25, 
                    borderTopRightRadius: 25 
                },
                tabBarActiveTintColor: "#5f0cd4",
                tabBarInactiveTintColor: "grey"
            }}
        >
            <Tab.Screen 
                name="LoginScreen" 
                component={LoginScreen} 
                options={{
                    title: "Iniciar session",
                }}
            />
            <Tab.Screen 
                name="RegisterScreen" 
                component={RegisterScreen} 
                options={{
                    title: "Registrarse",
                }}
            />
        </Tab.Navigator>
    )
}

export default MenuLogin
