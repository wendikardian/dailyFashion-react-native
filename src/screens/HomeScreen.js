import { View, Text, StyleSheet } from 'react-native'
import {imageSlider} from '../../data/Data'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box'

const HomeScreen = () => {
  return (
    <View>
        <SliderBox
            images={imageSlider} autoplay={true} circleLoop={true} sliderBoxHeight={250}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor : 'white',
        flex: 1
    }
})

export default HomeScreen