import React from 'react';
import{
    StatusBar
} from 'react-native';

export default class SBar extends React.Component{
    render(){
        return(
            <StatusBar
                backgroundColor = "#ffffff"
                barStyle='dark-content'
            />
        );
    }
}