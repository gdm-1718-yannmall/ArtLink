import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from '../components';
import { defaultStyles, confStyles } from '../styles';
import { users } from '../data';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height- 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'

    },

    content: {
        width: width - 20,
        height: height - 40,
        flex: 1,
        justifyContent: 'space-between',
        
    },

    group: {
        height: 250,
        justifyContent: 'flex-start',
    },

    group__content: {
        width: '100%',
        textAlign: 'left',
        marginBottom: 15
    },

    button: {
        width: '100%',
        marginBottom: 15,

    },

    button__top: {
        marginTop: 60
    },

    noMembers: {
        paddingVertical: 100,
        textAlign: 'center',
        color: '#666666'
    }




})

export default class Group extends Component {

    state = {
        groupMembers: [],
        disable: false,
    }

    something = () => {
        user = users[Math.floor(Math.random() * users.length)];
        console.log(user);

        if (this.state.groupMembers.length < 5) {
            this.setState({groupMembers: this.state.groupMembers.concat(user)});
            console.log(this.state.groupMembers.length);
            if (this.state.groupMembers.length == 4) {
                this.setState({disable: true});
            }
        }

        console.log(this.state.disable);
    }
    something2 = () => {
        alert('Joined Group');
    }

    render() {
        if (this.state.groupMembers.length > 0) {
            return (
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View>
                            <View style={[styles.button, styles.button__top]}>
                                <ButtonGroup disable={this.state.disable} name="INVITE YOUR FRIENDS" doSomethingGroup="" />
                            </View>
                            <View style={styles.group}>
                                <Text style={styles.group__content}>Your Group</Text>
                                {this.state.groupMembers.map((member, i) => <Text key={i}>{member}</Text>)}
                                <View style={styles.button}>
                                    <ButtonGroup disable={this.state.disable} name="FIND NEW PEOPLE" doSomethingGroup={this.something} />
                                </View>
                            </View>
                        </View>
                        
                        <View style={styles.button}>
                            <ButtonGroup disable={true} name="JOIN GROUP" doSomethingGroup={this.something2} />
                            <ButtonGroup disable={true} name="LEAVE GROUP" doSomethingGroup={this.something2} />
                        </View>
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View>
                            <View style={[styles.button, styles.button__top]}>
                                <ButtonGroup disable={this.state.disable} name="INVITE YOUR FRIENDS" doSomethingGroup={this.something} />
                            </View>
                            <View style={styles.group}>
                                <Text style={styles.group__content}>Your Group</Text>
                                <Text style={styles.noMembers}>No members yet</Text>
                            </View>
                            <View style={styles.button}>
                                <ButtonGroup disable={this.state.disable} name="FIND NEW PEOPLE" doSomethingGroup={this.something} />
                            </View>
                        </View>
                        <View>
                            <View style={styles.button}>
                                <ButtonGroup disable={true} name="JOIN GROUP" doSomethingGroup={this.something2} />
                            </View>
                            <View style={styles.button}>
                                <ButtonGroup disable={true} name="LEAVE GROUP" doSomethingGroup={this.something2} />
                            </View>
                        </View>
                    </View>
                    
                </View>
            )
        }
    }
}

