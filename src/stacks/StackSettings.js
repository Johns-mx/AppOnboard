import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EditPerfilScreen from "../screens/Settings/SettingsHeader/EditPerfilScreen";
import Notificaciones from "../screens/User/Notificaciones";
import NotificacionesScreen from "../screens/Settings/NotificacionesSettings";
import MembresiaScreen from "../screens/Settings/SettingsHeader/MembresiaScreen";
import LanguageScreen from "../screens/Settings/LanguageScreen";
import AccesibilidadScreen from "../screens/Settings/AccesibilidadScreen";
import PrivacidadScreen from "../screens/Settings/PrivacidadScreen";
import HelpScreen from "../screens/Settings/HelpScreen";
import AparienciaScreen from "../screens/Settings/AparienciaScreen";
import StorageScreen from "../screens/Settings/StorageScreen";
import Colors from "../constants/Colors";

//navegacion STACKS
const Stack = createNativeStackNavigator()

const StackSettings = () => {
    return (
        <Stack.Navigator 
            screenOptions={{ 
                headerShown: true,
                gestureEnabled: true,
                cardStyleInterpolator: ({ current: { progress } }) => {
                    return {
                        cardStyle: {
                            transform: [{
                                translateX: progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [600, 0]
                                })
                            }]
                        }
                    };
                }
            }}
        >
            <Stack.Screen 
                name="EditPerfil" 
                component={EditPerfilScreen} 
                options={{
                    title: "Personalizar perfil",
                    headerTransparent: true,
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 16
                    },
                }}
            />
            <Stack.Screen 
                name="Membresia" 
                component={MembresiaScreen} 
                options={{
                    title: "Membresia",
                    headerTransparent: true,
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 16
                    },
                }}
            />
            <Stack.Screen 
                name="Notifications" 
                component={Notificaciones} 
                options={{
                    title: "Todas las notificaciones",
                    headerTransparent: true,
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 16
                    },
                }}
            />
            <Stack.Group name="Grupo1">
                <Stack.Screen 
                    name="Language" 
                    component={LanguageScreen} 
                    options={{
                        title: "Idioma",
                        //headerTransparent: true,
                        //headerTintColor: Colors.BLUE.noveno,
                        //headerShadowVisible: true,
                        //headerSearchBarOptions: true
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontSize: 16
                        },
                    }}
                />
                <Stack.Screen 
                    name="Accesibilidad" 
                    component={AccesibilidadScreen} 
                    options={{
                        title: "Accesibilidad",
                        headerTransparent: true,
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontSize: 16
                        },
                    }}
                />
                <Stack.Screen 
                    name="NotificacionesSettings" 
                    component={NotificacionesScreen} 
                    options={{
                        title: "Notificaciones y Sonidos",
                        headerTransparent: true,
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontSize: 16
                        },
                    }}
                />
                <Stack.Screen 
                    name="Privacidad" 
                    component={PrivacidadScreen} 
                    options={{
                        title: "Privacidad y Seguridad",
                        headerTransparent: true,
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontSize: 16
                        },
                    }}
                />
                <Stack.Screen 
                    name="Apariencia" 
                    component={AparienciaScreen} 
                    options={{
                        title: "Apariencia",
                        headerTransparent: true,
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontSize: 16
                        },
                    }}
                />
                <Stack.Screen 
                    name="Storage" 
                    component={StorageScreen} 
                    options={{
                        title: "Datos y Almacenamiento",
                        headerTransparent: true,
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontSize: 16
                        },
                    }}
                />
                <Stack.Screen 
                    name="Help" 
                    component={HelpScreen} 
                    options={{
                        title: "Ayuda y Comentarios",
                        headerTransparent: true,
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontSize: 16
                        },
                    }}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackSettings
