import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './Styles';
import AvatarGroup from '../../components/image/group'
import SBar from '../../components/statusBar/statusBar'
import LinearGradient from 'react-native-linear-gradient';
export default class CreateGroup extends Component {
    constructor(props){
        super(props);
        this.state={
            namegroup: 'Andrea'
        };
    }
    render() {
        return(
            <View style={styles.container} >
                <SBar/>
                <AvatarGroup size={250}/>
                <Text style={styles.nameGroup}>{this.state.namegroup}</Text>
                <View style={styles.settingsContainer}>
                    <View style={styles.settingSmallContainer}>
                        <Text style={styles.textSettings}>MY TINDER PLUS</Text>
                    </View>
                    <View style={styles.settingSmallContainer}>
                        <Text style={styles.textSettings}>SETTINGS</Text>
                    </View>
                    
                </View>
                <View style={styles.footer}>
                    
                    <Image
                        style={[styles.icon, styles.iconCenter]}
                        source={require('../../../public/images/createGroup/icon.png')}/>
                    <Image
                        style={[styles.icon, styles.iconLeft]}
                        source={require('../../../public/images/createGroup/icon.png')}/>
                    <Image
                        style={[styles.icon, styles.iconRight]}
                        source={require('../../../public/images/createGroup/icon.png')}/>
                    <Text style={styles.textStyleOne}>Swipe with Friends</Text>
                    <Text style={styles.textStyleTwo}>Match with groups of friends nearby</Text>
                    {/* <TouchableOpacity> */}
                        <LinearGradient 
                            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                            // locations={[0,0.5,0.6]}
                            colors={['#f95398', '#fd3874', '#fe4c6a', '#fe5a63', '#ff7356']}
                            style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                CREATE YOUR GROUP
                            </Text>
                        </LinearGradient>
                    {/* </TouchableOpacity> */}
                    <Image 
                        resizeMode='cover'
                        style={styles.backgroundImage}
                        source={require('../../../public/images/createGroup/background.png')}/>

                </View>
            </View>
        );
    }
}
