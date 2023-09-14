import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'


const Splash = ({ navigation }) => {
    
    //establece el tiempo de muestra
    setTimeout(() => {
        navigation.replace('Onboarding')
    }, 3000)

    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content" 
                hidden={false} 
                backgroundColor="#8B63FF" 
            />
            <Image source={require('../assets/icons/React.png')} style={{ width: 50, height: 50 }} />
            <Text style={{ fontSize: 30, color: "#ffffff", fontWeight: 'bold' }}>Anime Royalty</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8B63FF'
    }
})

export default Splash