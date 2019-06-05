import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import { defaultStyles, cardStyles } from '../styles';



export default class MuseumCard extends Component {
  // Component prop types
  static propTypes = {
    // museum object with title, adres, and logo
    museum: PropTypes.object.isRequired,
    // Called when user taps on a logo
    onOpen: PropTypes.func.isRequired,
  }
  render() {
    const { museum, museum: { title, description, logo }, onOpen } = this.props; 
    return (
      <TouchableOpacity style={cardStyles.container} onPress={() => onOpen(museum)}>
        <View style={cardStyles.imageContainer}>
          <Image source={{ uri: logo }} style={cardStyles.image} />
        </View>
        <Text style={[defaultStyles.text, cardStyles.title]} numberOfLines={1}>{title}</Text>
        <Text style={[defaultStyles.text, cardStyles.adres]} numberOfLines={1}>{description}</Text>
      </TouchableOpacity>
    );
  }
}

