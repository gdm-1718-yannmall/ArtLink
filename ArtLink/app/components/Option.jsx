import React, { Component } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { defaultStyles, popupStyles } from '../styles';

// Colors for smooth transition when picking
const colorDefault = 'rgba(255, 255, 255, 1)',  // white
    colorSelected = 'rgba(103, 58, 183, 1)';    // purple

export default class Options extends Component {

    static propTypes = {
        // value to display
        value: PropTypes.string.isRequired,
        // chosen by user or not?
        isChosen: PropTypes.bool.isRequired,
        // called when user choses value
        onChoose: PropTypes.func.isRequired,
    }

    state = {
        // Animate bg-color when value gets picked
        background: new Animated.Value(0),
    }

    // Animate option selection if value was already chose but not by user
    componentWillMount() {
        if (this.props.isChosen) {
            this.animateSelect();
        }
    }

    // handle isChosen prop changes
    componentWillReceiveProps(nextProps) {
        if (!this.props.isChosen && nextProps.isChosen) {
            this.animateSelect();
        } else if (this.props.isChosen && !nextProps.isChosen) {
            this.animateDeselect();
        }
    }

    animateSelect() {
        Animated.timing(this.state.background, {
            toValue: 100,
            duration: 200,
        }).start();
    }

    animateDeselect() {
        Animated.timing(this.state.background, {
            toValue: 0,
            duration: 200,
        }).start();
    }

    render() {
        const { value, isChosen, onChoose } = this.props;
        const backgroundColorAnimation = this.state.background.interpolate({
            inputRange: [0, 100],
            outputRange: [colorDefault, colorSelected],
        });

        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onChoose}
            >
                <Animated.View style={[popupStyles.optionContainer, {backgroundColor: backgroundColorAnimation}]} >
                    <Text style={{ color: isChosen ? colorDefault : colorSelected }}>
                        {value}
                    </Text>
                </Animated.View>
            </TouchableOpacity>
        );
    }
}