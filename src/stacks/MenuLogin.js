import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"

const Tab = createMaterialTopTabNavigator()

const MenuLogin = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarItemStyle: { width: 150, height: 100, justifyContent: "center", alignSelf: "center" },
            }}
        >
            <Tab.Screen 
                name="LoginScreen" 
                component={LoginScreen} 
                options={{
                    title: "Iniciar session"
                }}
            />
            <Tab.Screen 
                name="RegisterScreen" 
                component={RegisterScreen} 
                options={{
                    title: "Registrarse"
                }}
            />
        </Tab.Navigator>
    )
}

export default MenuLogin
