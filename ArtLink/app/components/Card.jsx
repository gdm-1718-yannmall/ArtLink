import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, TouchableHighlight } from 'react-native';
import { PropTypes } from 'prop-types';
import { defaultStyles, cardStyles, popupStyles } from '../styles';
import CardFlip from 'react-native-card-flip';
import { MuseumPopup } from '../components';


export default class Card extends Component {
  // Component prop types
  // static propTypes = {
  //   // museum object with title, adres, and logo
  //   museum: PropTypes.object.isRequired,
  //   // Called when user taps on a logo
  //   onOpen: PropTypes.func.isRequired,
  // }

  state = {
    popupIsOpen: false,
    // day chosen by user
    chosenDay: 0, // choose first day by default
    // time chosen by user
    chosenTime: null,
  }

  openMuseum = (museum) => {
    this.setState({
      popupIsOpen: true,
      museum,	
    });
  }

  closeMuseum = () => {
    this.setState({
      popupIsOpen: false,
      // reset values to default
      chosenDay: 0,
      chosenTime: null,
    });
  }

  chooseDay = (day) => {
      this.setState({
          chosenDay: day,
      })
  }

  chooseTime = (time) => {
      this.setState({
          chosenTime: time,
      })
  }

  joinEvent = () => {
      if (!this.state.chosenTime) {
          alert('Please select a time');
      } else {
          this.closeMuseum();
          this.props.navigation.navigate('confirmation', {code: Math.random().toString(36).substring(6).toUpperCase()});
      }
  }
  render() {
    const { museum, museum: { title, description, logo, adres, }, onOpen } = this.props; 
    return (
      <View>
      <View style={cardStyles.container}>
        <CardFlip style={cardStyles.cardContainer} ref={(card) => this.card = card} >
          <TouchableOpacity activeOpacity={1} style={cardStyles.card} onPress={() => this.card.flip()} >
            <Image source={{ uri: logo }} style={cardStyles.image} />
            <Text style={[defaultStyles.text, cardStyles.title]}>{title}</Text>
            <Text style={[defaultStyles.text, cardStyles.adres]}>{adres}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={cardStyles.card} onPress={() => this.card.flip()} >
            <Text style={[defaultStyles.text, cardStyles.description]}>{description}</Text>
            <TouchableHighlight
                            underlayColor="#9575CD"
                            style={popupStyles.buttonContainer}
                            onPress={() => onOpen(museum)}
                        >
                            <Text style={popupStyles.button}> Join Event </Text>
                        </TouchableHighlight>
          </TouchableOpacity>
        </CardFlip>
      </View>
      
      </View>
    );
  }
}


