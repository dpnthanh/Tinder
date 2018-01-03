import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import styles from './Styles';
import ProfileImage from '../../components/image/UserProfile';

import ReactionDock from '../../components/reactionDock/reactionDock'
export default class ProfileScreen extends Component {
    render() {
        return(
            <View style={styles.container} >
                {/* <ScrollView  style={{height:300}}> */}
                    
                    <ProfileImage/>
                    <View style={styles.dock}>
                        <ReactionDock/>
                    </View>
                {/* </ScrollView> */}
            </View>
        );
    }
}
