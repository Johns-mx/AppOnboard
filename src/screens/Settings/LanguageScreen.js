import { View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar, Image, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect, useRef }  from 'react';
import { Button, Icon, CheckBox } from 'react-native-elements';
import Colors from '../../constants/Colors'

const LanguageScreen = () => {
    const [language, setLanguage] = useState('en');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.secondary} hidden={false} />

            <View style={{ height: 100 }}></View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: Colors.BLUE.tercero }}
            >
                <View>
                    <Text>Personalizar perfil</Text>
                </View>
                <View>
                    <Text>Idioma</Text>
                    <Picker
                        selectedValue={language}
                        onValueChange={setLanguage}
                    >
                        <Picker.Item label="Inglés" value="en" />
                        <Picker.Item label="Español" value="es" />
                    </Picker>
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

export default LanguageScreen