import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';

//screens
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import Cart from '../screens/Cart';
import User from '../screens/User';
import { NavigationContainer } from '@react-navigation/native';


//navegacion TABS
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator  
            initialRouteName="HomeScreen"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#8B63FF',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                //headerTitle: "Anime Royalty",
                headerTitleAlign: "right",
                headerStyle: {
                    backgroundColor: "#280886",
                    height: 85,
                },
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 5,
                    left: 5,
                    right: 5,
                    paddingTop: 5,
                    paddingBottom: 5,
                    elevation: 0,
                    borderRadius: 7,
                    height: 55,
                    backgroundColor: "#ffffff",
                    ...styles.sombra
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    
                    if (rn === 'HomeScreen') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (rn === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                
            })}
        >
            <Tab.Screen 
                name="HomeScreen" 
                component={HomeScreen}
                options={{
                    title: "Dashboard",
                }}
            />
            
            <Tab.Screen 
                name="Cart" 
                component={Cart}
                options={{
                    title: "Cart",
                    tabBarIcon: ({color}) => (
                        <View
                            style={styles.botonPrincipal}
                        >
                            <Ionicons name='cart' size={24} color={color} />
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Settings"
                component={Settings} 
                options={{
                    title: "Settings"
                }}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sombra: {
        shadowColor: "#0d2750",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    botonPrincipal: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: "#410ed3",
        borderWidth: 2,
        borderRadius: 30,
        top: -20,
        elevation: 5,
    },
})

export default MyTabs