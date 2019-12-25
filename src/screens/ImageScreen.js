import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail from './components/ImageDetail'


const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageSource={require('../../assets/Images/forest.jpg')} imageScore={3}/>
        <ImageDetail title="Beach" imageSource={require('../../assets/Images/beach.jpg') } imageScore={5}/>
        <ImageDetail title="Mountain" imageSource={require('../../assets/Images/mountain.jpg')} imageScore={4}/>
    </View>
};

const styles = StyleSheet.create({});


export default ImageScreen;