import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const yourname = 'Hunter M. Maxwell';
return    (
<View>
    <Text style={styles.TextStyle}>
    Getting Started with React Native
    </Text>
    <Text style={styles.subHeaderStyle}>
    My Name is {yourname}
    </Text>
</View>
)
};


const styles = StyleSheet.create({
    TextStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;