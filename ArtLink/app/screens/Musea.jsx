import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
// import our own components
import { MuseumCard, MuseumPopup, Card } from '../components';
// import our temporary data
import { musea } from '../data';
//import styles
import { museaStyles } from '../styles';

export default class Musea extends Component {

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
        return(
            <View style={museaStyles.container}>
                <ScrollView
                    contentContainerStyle={museaStyles.scrollContent}
                    // Hide scroll indicators
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {musea.map((museum, index) => <Card
                        museum={museum}
                        onOpen={this.openMuseum}
                        key={index}
                    />)}
                </ScrollView>

                <MuseumPopup
            museum={this.state.museum}
            isOpen={this.state.popupIsOpen}
            onClose={this.closeMuseum}
            chosenDay={this.state.chosenDay}
            chosenTime={this.state.chosenTime}
            onChooseDay={this.chooseDay}
            onChooseTime={this.chooseTime}
            onConfirm={this.joinEvent}
        /> 
                
            </View>
        );
    }
}