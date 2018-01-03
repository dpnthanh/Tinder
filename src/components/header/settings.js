import React from 'react'
import {
    View, StyleSheet, Button, Text
} from 'react-native'
export default class SettingHeader extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.alignCenter}>

                </View> 
                <View style={styles.alignCenter}>

                    <Text style={styles.title}>Settings</Text>

                </View> 
                <View style={[styles.alignCenter, {alignItems: 'flex-end', paddingRight:10}]}>
                    <Text style={styles.buttonDone}>Done</Text>
                </View> 
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        // height:20,
        flexDirection:'row',
    },
    alignCenter:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 24,
        color:'#000000'
    },
    buttonDone:{
        fontSize: 22,
        color: '#fe5068'
    }
    

})