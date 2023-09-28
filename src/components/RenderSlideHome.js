import { View, Text, useWindowDimensions, TouchableOpacity, Button, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'


const SlideImages = [
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


const RenderSlideHome = () => {
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width * 0.7}
      //decelerationRate="normal"
      pagingEnabled
      style={{ marginVertical: 15}}
    >
      {SlideImages.map((item) => (
        <TouchableOpacity 
          style={[
            styles.botonSlides, 
            { width: 200, height: 260 }
          ]}
          key={item.id}
        >
          <Image 
            source={item.img} 
            style={styles.imgSlides} 
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  botonSlides: {
    marginHorizontal: 10, 
    overflow: "hidden", 
    //marginRight: 10
  },
  imgSlides: {
    width: 200, //"100%"
    height: 250, //"100%"
    borderRadius: 25,
  }
})


export default RenderSlideHome