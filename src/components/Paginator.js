import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native'
import React from 'react'


export default function Paginator({ data, scrollx }) {
    //se extrae el ancho de la pantalla
    const { width } = useWindowDimensions();

    return (
        <View style={{flexDirection: "row", height: 64}}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i+1) * width];

                const dotWith = scrollx.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: "clamp",
                });

                /*const opacidad = scrollx.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: "clamp",
                });*/

                return <Animated.View style={[styles.dot, { width: dotWith }]} key={i.toString()} />;
            })}
        </View>
    );
}


const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: "#8B63FF",
        marginHorizontal: 8,
    },
});