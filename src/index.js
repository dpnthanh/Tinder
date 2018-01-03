import React, {Component} from 'react';
import { 
    View,
    Text,
} from "react-native";
//navigation between screen
import RootScreen from './config/Navigator';

export default class App extends Component{
    
    render(){
        return(
            <RootScreen/>
        );
    }
}