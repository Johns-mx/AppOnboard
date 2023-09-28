import React from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';

const BannerImages = [
  {
    id: 1,
    info: "Parzival",
    img: require('../assets/parzival.jpg')
  },
  {
    id: 2,
    info: "Daito",
    img: require('../assets/daito.jpg')
  },
  {
    id: 3,
    info: "Artemis",
    img: require('../assets/artemis.jpg')
  }
]

const width = Dimensions.get("screen").width;


const RenderSlideBanner = () => {

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          {BannerImages.map((item) => (
            <Image
              key={item.id}
              source={item.img}
              style={styles.imgSlides}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15, // Margen a los lados del contenedor
  },
  sliderContainer: {
    width: '100%', // Ancho completo
    height: 100,
    borderRadius: 10,
    overflow: 'hidden', // Oculta contenido que se desborda
  },
  imgSlides: {
    width: 354,
    height: 100, // Altura fija o ajusta según tus necesidades
  }
});

export default RenderSlideBanner;
