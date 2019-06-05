import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Musea, Confirmation } from './screens';

const AppNavigator = createStackNavigator(
    {
        Home: Musea,
        confirmation: Confirmation,
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