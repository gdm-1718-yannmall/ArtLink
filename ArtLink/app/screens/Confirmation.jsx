import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import {Button} from '../components';
import { defaultStyles, confStyles } from '../styles';

export default class Confirmation extends Component {

//   static propTypes = {
//     code: PropTypes.string.isRequired,
//   }

  render() {
    const { navigation } = this.props;
    const code = JSON.stringify(navigation.getParam('code'));

    return (
      <View style={confStyles.container}>
        <Text style={confStyles.header}>Your confirmation code</Text>
        <Text style={confStyles.code}>{code}</Text>

        

        <TouchableOpacity
          style={confStyles.buttonContainer}
          // Go back when pressed
          onPress={() => this.props.navigation.navigate('Group') } // change to new react native navigation
        >
          <Text style={confStyles.button}>Done</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}

