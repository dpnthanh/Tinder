import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'
export default class Messages extends Component{
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
                <View style={styles.messContainer}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.mess}>{this.props.mess}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:100,
        flexDirection: 'row',
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
    messContainer:{
        flexDirection:'column',
        justifyContent:'center'
    },
    mess:{
        color: '#7c7c7c',
        fontSize: 16,
        height:20,
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