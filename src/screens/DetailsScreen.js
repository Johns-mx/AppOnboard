import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';


const DetailsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text>DetailsScreen</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    }
})


export default DetailsScreen