import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Dimensions, Text, TouchableWithoutFeedback, View, Image, LayoutAnimation, PanResponder, TouchableHighlight } from 'react-native';
import { popupStyles, defaultStyles, cardStyles,  } from '../styles';
import { Options } from '../components';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Set default popup height to 67% of screensize
const defaultHeight = height * 0.67;

export default class MuseumPopup extends Component {

    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        //museum object with title, adres, logo, days & time
        movie: PropTypes.object,
        //Index chosen day
        chosenDay: PropTypes.number,
        //Index chosen time
        chosenTime: PropTypes.number,
        // called when user chooses day
        onChooseDay: PropTypes.func,
        // called when user chooses time
        onChooseTime: PropTypes.func,
        // called when user confirms
        onConfirm: PropTypes.func,
        // called when popup closes
        onClose: PropTypes.func,
    }
    
    state = {
        // animates opening and closing the popup
        position: new Animated.Value(this.props.isOpen ? 0 : height),
        // Backdrop opacity
        opacity: new Animated.Value(0),
        // Popup height - can be changed by pulling up or down
        height: defaultHeight,
        // Expanded mode with more info
        expanded: false,
        // visibility flag
        visible: this.props.isOpen,
    }

    // This will store the previous height of the popup when the user pulls it
    // With this value we can calculate the new height
    _previousHeight = 0

    componentWillMount(){
        // initialize PanResponder to handle gestures
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,

            onMoveShouldSetPanResponder: (evt, gestureState) => {
                const { dx, dy } = gestureState;
                // ignore taps
                if (dx !== 0 && dy !== 0){
                    return true;
                }
                return false;
            },

            onPanResponderGrant: (evt, gestureState) => {
                // store height before changed by user
                this._previousHeight = this.state.height;
            },

            onPanResponderMove: (evt, gestureState) => {
                // pull delta & velocity values for y axis from gestureState
                const { dy, vy } = gestureState;
                // substract delta from previous height to get new height
                let newHeight = this._previousHeight - dy;

                // make height change a smooth animation
                LayoutAnimation.easeInEaseOut();

                // switch to expanded mode if pulled up above 80%
                if (newHeight > height - height / 5) {
                    this.setState({ expanded: true});
                } else {
                    this.setState({ expanded: false});
                }

                // expand to full height if pulled up quickly
                if (vy < -0.75) {
                    this.setState({
                        expanded: true,
                        height: height
                    });
                }
                // close if pulled down quickly
                else if (vy < -0.75) {
                    this.props.onClose();
                }
                // close if pulled down under 75% of default height
                else if (newHeight < defaultHeight * 0.75) {
                    this.props.onClose();
                }
                // limit max height to screen height
                else if (newHeight > height) {
                    this.setState({ height: height });
                }
                else {
                    this.setState({ height: newHeight});
                }
            }, // end of onPanResponderMove

            onPanResponderTerminationRequest: (evt, gestureState) => true,

            onPanResponderRelease: (evt, gestureState) => {
                const { dy } = gestureState;
                const newHeight = this._previousHeight - dy;

                // close when pulled below default height
                if (newHeight < defaultHeight) {
                    this.props.onClose();
                }

                // update previous height
                this._previousHeight = this.state.height;
            },

            onShouldBlockNativeResponder: (evt, gestureState) => {
                // returns if this component should block native components from becoming the JS responder
                // true by default
                return true;
            },
        }); // end of PanResponder.create
    } // end of componentWillMount

    // handle isOpen changes to open or close the popup
    componentWillReceiveProps(nextProps) {
        // isOpen prop changed to true from false
        if (!this.props.isOpen && nextProps.isOpen){
            this.animateOpen();
        }
        else if (this.props.isOpen && !nextProps.isOpen){
            this.animateClose();
        }
    }

    //open popup
    animateOpen(){
        // Update state
        this.setState({ visible: true }, () => {
            Animated.parallel([
                // animate opacity
                Animated.timing(
                    this.state.opacity, { toValue: 0.5 }// semi-transparent
                ),
                // animate slide up
                Animated.timing(
                    this.state.position, { toValue: 0 } // top of the screen
                ),
            ]).start();
        });
    }

    //close popup
    animateClose(){
            Animated.parallel([
                // animate opacity
                Animated.timing(
                    this.state.opacity, { toValue: 0 }       // transparent
                ),
                // animate slide down
                Animated.timing(
                    this.state.position, { toValue: height } // bottom of the screen
                ),
            ]).start(() => this.setState({ 
                // reset values to default
                height: defaultHeight,
                expanded: false,
                visible: false,
            }));
    }

    // Dynamic styles that depend on state of popup
    getStyles = () => {
        return {
            imageContainer: this.state.expanded ? {
                width: width / 2,           // half of screen width
            } : {
                maxWidth: 110,              // limit width 
                marginRight: 10,
            },

            museumContainer: this.state.expanded ? {
                flexDirection: 'column',    // arrange image and info in a column
                alignItems: 'center',       // and center them
            } : {
                flexDirection: 'row',       // arrange image and info in a row
            },

            museumInfo: this.state.expanded ? {
                flex: 0,
                alignItems: 'center',       // center horizontally
                paddingTop: 20,
            } : {
                flex: 1,
                justifyContent: 'center',   // center vertically
            },

            title: this.state.expanded ? {
                textAlign: 'center',
            } : {},
        }
    }

    render(){
        const {
            museum,
            chosenDay,
            chosenTime,
            onChooseDay,
            onChooseTime,
            onConfirm,
        } = this.props;
        // pull out museum data
        const { title, adres, logo, description, days, times } = museum || {};
        // render nothing if not visible
        if (!this.state.visible){
            return null;
        }
        return (
            <View style={popupStyles.container}>
                {/* close popup if user taps on backdrop */}
                <TouchableWithoutFeedback onPress={this.props.onClose}>
                    <Animated.View style={[popupStyles.backdrop, { opacity: this.state.opacity }]} />
                </TouchableWithoutFeedback>

                <Animated.View
                    style={[popupStyles.modal, {
                        // Animate height
                        height: this.state.height,
                        // Animate position on screen
                        transform: [{ translateY: this.state.position }, { translateX: 0}]
                    }]}
                >
                    {/* content */}
                    <View style={popupStyles.content}>
                        {/* logo, title and adres */}
                        <View 
                            style={[popupStyles.museumContainer, this.getStyles().museumContainer]}
                            {...this._panResponder.panHandlers}
                        >
                            {/* logo */}
                                <Image source={{ uri: logo }} style={popupStyles.image} />
                            

                            
                        </View>

                        {/* days and times */}
                        <View>
                            {/* Day */}
                            <Text style={popupStyles.sectionHeader}>Day</Text>
                            <Options
                                values={days}
                                chosen={chosenDay}
                                onChoose={onChooseDay}
                            />
                            {/* Time */}
                            <Text style={popupStyles.sectionHeader}>Time</Text> 
                            <Options
                                values={times}
                                chosen={chosenTime}
                                onChoose={onChooseTime}
                            /> 
                        </View>
                        {/* </View> */}
                    </View>

                    {/* footer */}
                    <View style={popupStyles.footer}>
                        <TouchableHighlight
                            underlayColor="#9575CD"
                            style={popupStyles.buttonContainer}
                            onPress={onConfirm}
                        >
                            <Text style={popupStyles.button}> Join Event </Text>
                        </TouchableHighlight>
                    </View>

                </Animated.View>
            </View>
        );
    }
}