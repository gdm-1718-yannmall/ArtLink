import React, { Component } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from '../components';
import { groupStyles } from '../styles';
import { users } from '../data';

export default class Group extends Component {

    state = {
        groupMembers: [],
        disable: false,
    }

    addUserToGroup = () => {
        user = users[Math.floor(Math.random() * users.length)];
        console.log(user);

        if (this.state.groupMembers.length < 5) {
            this.setState(
                { groupMembers: this.state.groupMembers.concat(user) }
            );
            console.log(this.state.groupMembers.length);
            if (this.state.groupMembers.length == 4) {
                this.setState(
                    { disable: true }
                );
            }
        }

        console.log(this.state.disable);
    }
    leaveGroup = () => {
        this.setState(
            { 
                groupMembers: [],
                disable: false
            
            }
        )
    }

    confirmGroup = () => {       
                this.props.navigation.navigate('confirmGroup', {group: this.state.groupMembers});
    }

    render() {
        if (this.state.groupMembers.length > 0) {
            return (
                <View style={groupStyles.container}>
                    <View style={groupStyles.content}>
                        <View>
                            <View style={[groupStyles.button, groupStyles.button__top]}>
                                <ButtonGroup disable={this.state.disable} name="INVITE YOUR FRIENDS" pressGroup="" />
                            </View>
                            <View style={groupStyles.group}>
                                <Text style={groupStyles.group__content}>Your Group</Text>
                                {this.state.groupMembers.map((member, i) => {
                                    return(
                                        <View style={groupStyles.member}>
                                            <Image style={groupStyles.picture} source={{uri: member.picture}} />
                                            <Text style={groupStyles.name} key={i}>{member.name}</Text>
                                        </View>
                                    )
                                })}                        
                            </View>
                            <View style={groupStyles.button}>
                                <ButtonGroup disable={this.state.disable} name="FIND NEW PEOPLE" pressGroup={this.addUserToGroup} />
                            </View>
                        </View>
                        <View>
                            <View style={groupStyles.button}>
                                <ButtonGroup disable={false} name="CONFIRM GROUP" pressGroup={this.confirmGroup} />
                            </View>
                            <View style={groupStyles.button}>
                                <ButtonGroup disable={false} name="LEAVE GROUP" pressGroup={this.leaveGroup} />
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={groupStyles.container}>
                    <View style={groupStyles.content}>
                        <View>
                            <View style={[groupStyles.button, groupStyles.button__top]}>
                                <ButtonGroup disable={this.state.disable} name="INVITE YOUR FRIENDS" pressGroup="" />
                            </View>
                            <View style={groupStyles.group}>
                                <Text style={groupStyles.group__content}>Your Group</Text>
                                <Text style={groupStyles.noMembers}>No members yet</Text>
                            </View>
                            <View style={groupStyles.button}>
                                <ButtonGroup disable={false} name="FIND NEW PEOPLE" pressGroup={this.addUserToGroup} />
                            </View>
                        </View>
                        <View>
                            <View style={groupStyles.button}>
                                <ButtonGroup disable={true} name="CONFIRM GROUP" pressGroup="" />
                            </View>
                            <View style={groupStyles.button}>
                                <ButtonGroup disable={true} name="LEAVE GROUP" pressGroup={this.leaveGroup} />
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
    }
}

