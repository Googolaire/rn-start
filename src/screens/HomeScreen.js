import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <>
  <Text style={styles.text}>Day One React Native</Text>
  <Button 
  title="Go to the Components Screen"
  onPress={() => console.log('Button Pressed')}
  />
  <TouchableOpacity onPress={()=>console.log('List Pressed')}>
    <Text>Go to List Demo</Text>
  </TouchableOpacity>
    </>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
