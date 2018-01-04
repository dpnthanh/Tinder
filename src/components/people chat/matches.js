import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'
export default class PeopleMatches extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode='cover'
                        style={styles.image}
                        source={{uri: this.props.image }}/>
                    <View style={styles.newNotification}></View>
                </View>
                <Text style={styles.name}>{this.props.name}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:100,
        flexDirection: 'column',
        // backgroundColor:'#ff00ff',
        alignItems:'center'
    },
    imageContainer:{
        width:100,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'#ffff00'
    },
    newNotification:{
        position: 'absolute',
        right:0,
        height:20,
        width:20,
        borderColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: '#fd5068'
    },
    image:{
        height:80,
        width:80,
        borderRadius:40
    },
    name:{
        color: '#474747',
        fontSize: 16,
        height:20,
    }
});