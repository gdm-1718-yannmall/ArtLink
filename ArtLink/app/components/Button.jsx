import React, { Component } from 'react';
import { withNavigation, TouchableOpacity, Text } from 'react-navigation';
//import * as styles from '../styles';

class Button extends Component {
    constructor(props){
        super(props);
    
    }

    render() {
        //let style = this.props.style;
        //let textStyle = this.props.textStyle;
        let label = this.props.label;
        let onPress = this.props.onPress;
        return(
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
            >
                <Text>Test</Text>
            //     
            //     // Go back when pressed
            //     onPress= // change to new react native navigation
            // >
            {/* //     <Text style={textStyle}>{label}</Text> */}
            </TouchableOpacity>
        );
    }
}

export default withNavigation(Button);

