import { View, StyleSheet, FlatList, StatusBar, Animated } from 'react-native';
import React, { useState, useRef, Image } from 'react';
import Slides from '../constants/Slides';
import Colors from '../constants/Colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//screens
import Paginator from './Paginator';
import OnboardingItem from './OnboardingItem';
import NextButton from './NextButton';


const Onboarding = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollx = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < Slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.replace('Dashboard') //La screen que va es 'Login'.
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" />
            <View style={{ flex: 3 }}>
                <FlatList 
                    data={Slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollx}}}], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>

            <Paginator data={Slides} scrollx={scrollx} />
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / Slides.length)} />
        </View>
    );
};


//<GradientButton onPress={() => navigation.navigate('Home')} />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: "space-between",
        paddingBottom: 40,
    },
    indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    currentIndicator: {
        height: 12,
        width: 30,
        borderRadius: 10,
        backgroundColor: "#534234",
        marginHorizontal: 5,
    },
    indicator: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: Colors.BLUE.cuarto,
        marginHorizontal: 5,
    },
});

export default Onboarding