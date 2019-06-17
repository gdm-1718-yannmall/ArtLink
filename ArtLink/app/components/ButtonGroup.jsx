import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const buttonStyles = StyleSheet.create({
    button: {
        width: width-20,
        alignItems: 'center',
        backgroundColor: '#673AB7',
        borderRadius: 100,
        paddingVertical: 10
        
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
    }
    
});

const ButtonGroup = ({ pressGroup, name, disable}) => (
    <TouchableOpacity disabled={disable} style={buttonStyles.button} onPress={pressGroup}>
        <Text style={buttonStyles.text}>{name}</Text>
    </TouchableOpacity>
)

export default ButtonGroup;