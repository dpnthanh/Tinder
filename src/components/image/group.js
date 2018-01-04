import React from 'react'
import {
    View,Image, StyleSheet,Text
} from 'react-native'
var size = 150
export default class AvatarGroup extends React.Component{
    constructor(props){
        super(props)
        var size = this.props.size || 150;
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerSmall}>
                    <Image 
                        style={styles.image} source={require('../../../public/images/home/user.png')}
                        resizeMode="cover"
                    />
                    <Image 
                        resizeMode='contain'
                        style={styles.icon} source={require('../../..//public/images/createGroup/pen.png')}/>
                </View>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        // backgroundColor:'#ff0000'
    },
    image:{
        borderRadius: size/2,
        height:size,
        width:size
    },
    containerSmall:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        // backgroundColor:'#ffff00'
    },
    icon:{
        height:50,
        position: 'absolute',
        left:45
    }

})