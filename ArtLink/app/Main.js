import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Musea, Group, Confirmation } from './screens';

const AppNavigator = createStackNavigator(
    {
        Home: Group,
        confirmation: Confirmation,
        Group: Group,
    },
    {
      defaultNavigationOptions: () => ({
        header: null,
      })
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Main extends Component {
    render(){
        return(
            <AppContainer />
        )
    }
}