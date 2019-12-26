import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const HomeScreen = props => {
  console.log(props.navigation);
  return (
    <>
  <Text style={styles.text}>Day two React Native</Text>
  <Button 
  title="Go to the Components Screen"
  onPress={() => props.navigation.navigate('Components')}
  />
  <TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
    <Text>Go to List Demo</Text>
  </TouchableOpacity>
    
    <Button
    title="Go to image Screen"
    onPress={() => props.navigation.navigate('Image')}
    />
    <Button 
    title="Go to Counter Demo"
    onPress={() => props.navigation.navigate('Counter')}
    />
    <Button 
    title="Go to Color Demo"
    onPress={() => props.navigation.navigate('Color')}
    />
    <Button 
    title="Go to Square Screen"
    onPress={()=>props.navigation.navigate('Square')} 
    />
    </>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
